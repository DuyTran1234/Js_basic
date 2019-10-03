
function menu1()
{
	var fs = require('fs');
	var text = fs.readFileSync('./data.json', 'utf8');
	text = text.split('\n');
	console.log(text);
}

module.exports = menu1;