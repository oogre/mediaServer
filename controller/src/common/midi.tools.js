const midi = require('midi');
const rtpmidi = require('rtpmidi');

const MIDI_MSG = {
	NOTE_OFF : 0x80,
	NOTE_ON : 0x90,
	CONTROL_CHANGE : 0xB0,
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
module.exports.MSG_TO_MIDI = ([status, number, value]) => {
	return {
		channel : status & 0x0F,
		type : getKeyByValue(MIDI_MSG, status & 0xF0),
		number : number,
		value : value
	}
}

module.exports.MIDI_TO_MSG = ({channel=1, type=MIDI_MSG.CONTROL_CHANGE, number, value}) => {
	return [type|channel, number, value];
}

module.exports.getMidiID = (name) => {
	const outMidi = new midi.Output();
	const inMidi = new midi.Input();
	return {
		input : new Array(inMidi.getPortCount()).fill(0).map((_, id) => inMidi.getPortName(id)).findIndex(value => name == value),
		output : new Array(outMidi.getPortCount()).fill(0).map((_, id) => outMidi.getPortName(id)).findIndex(value => name == value)
	}
}

module.exports.createOutput = (controllerName) => {
	const output = new midi.Output();
	const {output:ID} = module.exports.getMidiID(controllerName);
	output.openPort(ID);
	return output;
}

module.exports.createRTPMidi = (ip, {readyHandler=()=>{}, messageHandler=()=>{}})=>{
	const session = rtpmidi.manager.createSession({
	  localName: 'lazerController',
	  bonjourName: 'lazerController',
	  port: 5006,
	});
	session.on('ready', readyHandler);

	session.on('message', (deltaTime, message) => {
		const {channel, type, number, value} = module.exports.MSG_TO_MIDI(Array.from(message));
		messageHandler(channel, type, number, value);
	});

	session.connect({ address: ip, port: 5004 });	
}
