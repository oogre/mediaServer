
const {onExit} = require('./common/process.tools.js');
const {run} = require('./common/os.tools.js');
const {createRTPMidi} = require('./common/midi.tools.js');
const {cueTrigger, soloCue, multiCue} = require('./lazerController.js')


createRTPMidi(/*'192.168.43.48'*/ "192.168.1.60", {
	readyHandler : async () => {
		console.log("ready")
		await cueTrigger("A");
	},
	messageHandler : async (channel, type, number, value) => {
		console.log(channel, type, number, value)
		if(number == 19 && value == 127)await cueTrigger("A")
		else if(number == 23 && value == 127)await cueTrigger("B")
		else if(number == 27 && value == 127)await soloCue()
		else if(number == 31 && value == 127)await multiCue()
	}
});