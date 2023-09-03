
const rtpmidi = require('rtpmidi');


const session = rtpmidi.manager.createSession({
    localName: 'lazerController',
    bonjourName: 'lazerController',
    port: 5008,
  });
  session.on('ready', function() {
  // Send a note
  setInterval(function() {
    let buffer = new Uint8Array([0xB1, 0x40, 0x7f]);;
    let now = (new Date()).getTime();
    session.sendMessage(now, buffer);
  }, 1000);

});

  session.connect({ address: "127.0.0.1", port: 5004 }); 