const midi = require('midi');

const MIDI_MSG = {
	NOTE_OFF : 0x80,
	NOTE_ON : 0x90,
	CONTROL_CHANGE : 0xB0,
}

module.exports.MSG_TO_MIDI = ([status, number, value]) => {
	return {
		channel : status & 0x0F,
		type : type & 0xF0,
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

