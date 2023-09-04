const {onExit} = require('./common/process.tools.js');
const {run} = require('./common/os.tools.js');
const {createRTPMidi} = require('./common/midi.tools.js');
const {cueTrigger, soloCue, multiCue} = require('./lazerController.js')
const {listMedia, hideMedia, showMedia, init:initOBS} = require('./obsController.js')

initOBS([{
	sceneName : "pentura",
	port : 4444
},{
	sceneName : "bave noire",
	port : 3333
},{
	sceneName : "wallpaper",
	port : 2222
}]);

(async ()=>{
	createRTPMidi(/*'192.168.43.48'*/ "192.168.1.60", {
		readyHandler : () => {
			console.log("ready")
			await cueTrigger("A")
		},
		messageHandler : async (channel, type, number, value) => {
			console.log(channel, type, number, value)
			if(number == 19 && value == 127)await cueTrigger("A")
			else if(number == 23 && value == 127)await cueTrigger("B")
			
		}
	});
	
	const wallpaper = await listMedia("wallpaper");
	for(const media of wallpaper){
		await hideMedia(media)
	}
	const baveNoire = await listMedia("bave noire");
	for(const media of baveNoire){
		await hideMedia(media)
	}
	const pentura = await listMedia("pentura");
	for(const media of pentura){
		await hideMedia(media)
	}

	await showMedia(wallpaper[0]);
	await showMedia(baveNoire[0]);
	await showMedia(pentura[0]);
	

})().catch(error => console.log(error));

