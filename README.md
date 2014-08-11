# spwn
node's spawn wrapper for easier use on Windows OS.

### Usage
```javascript
var spawn = require('spwn');
var echo = spawn('echo', ['hello world']);

echo.stdout.on('data', function(data){
	console.log(data.toString('utf8'));
});
```