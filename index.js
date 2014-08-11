module.exports = spawn = require('child_process').spawn;

if(process.platform === 'win32') {
	module.exports = function(command, args, options) {
		return spawn(process.env.ComSpec, ['/c', command].concat(args), options);
	}
}