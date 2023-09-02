
const cmd = require('node-cmd');


module.exports.run = async (command) => {
	return new Promise((resolve, reject) => {
		cmd.run(command,
        	(err, data, stderr) =>{
          	  if(err) return reject(err);
          	  if(stderr) return reject(stderr);
          	  resolve(data);
        	}
    	);
	});
};


module.exports.getPIDbyAppName = async (name) => {
	const list = await module.exports.run(`tasklist.exe`);
	const line = list.split("\n").find(line => line.includes(name));
	const PID = line.split(/\s+/)[1];
	return PID;
};
