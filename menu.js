
function menu()
{
	var menu1 = require('./menu1.js');
	var menu2 = require('./menu2.js');
	var menu3 = require('./menu3.js');
	var menu4 = require('./menu4.js');
	var readlineSync = require('readline-sync');
	for(;;)
	{
		console.log('1. Show all Contact');
		console.log('2. Create a new Contact');
		console.log('3. Delete a Contact');
		console.log('4. Edit a Contact');
		console.log('0. Exit');
		var choice = readlineSync.question('#Select: ');
		if(choice == 0)
		{
			break;
		}
		else if(choice == 1)
		{
			menu1();
		}
		else if(choice == 2)
		{
			menu2();
		}
		else if(choice == 3)
		{
			menu3();
		}
		else if(choice == 4)
		{
			menu4();
		}
	}
}

module.exports = menu;