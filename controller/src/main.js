const {onExit} = require('./common/process.tools.js');
const {run} = require('./common/os.tools.js');
const {wait} = require('./common/tools.js');
const {createRTPMidi} = require('./common/midi.tools.js');
//const {cueTrigger, soloCue, multiCue} = require('./lazerController.js')
const {blastMedia, listMedia, hideMedia, showMedia, init:initOBS} = require('./obsController.js')

initOBS([{
	sceneName : "pentura",
	port : 2222
},{
	sceneName : "bave noire",
	port : 3333
},{
	sceneName : "wallpaper",
	port : 4444
}]);


(async ()=>{

	
	

	/*
	createRTPMidi('192.168.1.12' , {
		readyHandler : async () => {
			console.log("ready")
		},
		messageHandler : async (channel, type, number, value) => {
			console.log(channel, type, number, value)
			if(number == 19 && value == 127)await cueTrigger("A")
			else if(number == 123 && value == 0){

				
				
				//await wait(200)
				//await cueTrigger("A")
			}
			else if(number == 23 && value == 127)await cueTrigger("B")
			
		}
	});
	*/
	const wallpaper = await listMedia("wallpaper");
	const baveNoire = await listMedia("bave noire");
	const pentura = await listMedia("pentura");

	console.log(wallpaper);
	console.log(baveNoire);
	console.log(pentura);

	for(const media of wallpaper){
		await hideMedia(media)
	}

	for(const media of baveNoire){
		await hideMedia(media)
	}

	for(const media of pentura){
		await hideMedia(media)
	}

	showMedia(wallpaper[0]);
	showMedia(pentura[0]);
	showMedia(baveNoire[0]);

	await wait(1000);

	showMedia(wallpaper[1]);
	showMedia(pentura[1]);
	showMedia(baveNoire[1]);


		//cueTrigger("Z");
		//await wait(5000);
		//cueTrigger("Q");
		//await wait(5000);
	/*for(let i = 0 ; i < 10 ; i ++){
		blastMedia(wallpaper[0]);
		blastMedia(pentura[0]);
		blastMedia(baveNoire[0]);
		await wait(100);
	}
	*/

})().catch(error => console.log(error));

