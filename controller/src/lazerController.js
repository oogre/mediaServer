const {onExit} = require('./common/process.tools.js');
const {run, getPIDbyAppName} = require('./common/os.tools.js');
const {MIDI_TO_MSG, createOutput} = require('./common/midi.tools.js');

const outputMidi = createOutput("lazerController");
const blackout = () => outputMidi.sendMessage(MIDI_TO_MSG({number:1, value:0}));
const cueTrigger = async (key) => await run (`runCue.ahk ${await getPIDbyAppName("QS.exe")} ${key}`);

(async ()=>{
	const PID = await cueTrigger("A");
})();


onExit((options, exitCode)=> {
	blackout();

	outputMidi.closePort();
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
});

process.stdin.resume();//so the program will not close instantly
