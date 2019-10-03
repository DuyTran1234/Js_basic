
function menu3()
{
	var fs = require('fs');
	var readLineSync = require('readline-sync');
	var text = fs.readFileSync('./data.json', 'utf8');
	text = text.split('\n');
	var nArray = [];
	for(var i = 0; i < text.length - 1; i++)
	{
		var obj = JSON.parse(text[i]);
		nArray.push(obj);
	}
	var check = false;
	var delContact = readLineSync.question('Enter name must delete in Contacs: ');
	for(var i = 0; i < nArray.length; i++)
	{
		if(delContact == nArray[i].name)
		{
			check = true;
			nArray.splice(i, 1);
			break;
		}
	}
	if(check === false)
	{
		console.log('Nhap sai!');
	}
	if(nArray.length === 0)
	{
		fs.writeFileSync('./data.json', '');
	}
	for(var i = 0; i < nArray.length; i++)
	{
		if(i === 0)
		{
			nArray[i] = JSON.stringify(nArray[i]);
			fs.writeFileSync('./data.json', nArray[i] + '\n');
		}
		else
		{
			nArray[i] = JSON.stringify(nArray[i]);
			fs.writeFileSync('./data.json', nArray[i] + '\n',{flag: 'a'});
		}
	}
}

module.exports = menu3;