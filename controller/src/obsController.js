

const rtpmidi = require('rtpmidi');
const cmd=require('node-cmd');

const session = rtpmidi.manager.createSession({
  localName: 'midi2OBS',
  bonjourName: 'midi2OBS',
  port: 5006,
});
session.on('ready', () => {
  // Send a note
  console.log("ready");
  setInterval(()=>{

       

    cmd.run(`python.exe /Users/vince/AppData/Roaming/Python/Python310/site-packages/obs_cli.py -P 2222 filter enable "Media Source 5" "Turn On"`,
        function(err, data, stderr){
            console.log('the node-cmd dir contains : ',data)
        }
    );


    cmd.run(`python.exe /Users/vince/AppData/Roaming/Python/Python310/site-packages/obs_cli.py -P 2222 item toggle "Media Source 4"`,
        function(err, data, stderr){
            console.log('the node-cmd dir contains : ',data)
        }
    );

  }, 5000);
});

// Route the messages
session.on('message', (deltaTime, message) => {
  console.log('Received a message', message);
});


// Connect to a remote session
session.connect({ address: '192.168.43.48', port: 5004 });