
function menu2()
{
	var readlineSync = require('readline-sync');
	var fs = require('fs');
	var obj = {name: '', phoneNumber: ''};
	obj.name = readlineSync.question('Enter name: ');
	obj.phoneNumber = readlineSync.question('Enter phone number: ');
	var text = JSON.stringify(obj) + '\n';
	fs.writeFileSync('./data.json', text , {flag: 'a'});
}

module.exports = menu2;