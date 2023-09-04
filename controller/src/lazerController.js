const {onExit} = require('./common/process.tools.js');
const {run, getPIDbyAppName} = require('./common/os.tools.js');
const {MIDI_TO_MSG, createOutput} = require('./common/midi.tools.js');

const outputMidi = createOutput("lazerController");
let QS_PID;

module.exports.blackout = () => outputMidi.sendMessage(MIDI_TO_MSG({number:1, value:0}));
module.exports.cueTrigger = async (key) =>{
	if(QS_PID == undefined) QS_PID = await getPIDbyAppName("QS.exe"); 
 	return run(`runCue.ahk ${QS_PID} ${key}`)
};


onExit((options, exitCode)=> {
	module.exports.blackout();

	outputMidi.closePort();
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
});

process.stdin.resume();//so the program will not close instantly
