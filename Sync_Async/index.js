
var request1 = require('request');
console.time('Time this: ');
request1('https://randomuser.me/api/',function(error,reponse,body){
	console.log('error: ', error);
	console.log('statusCode: ', reponse && reponse.statusCode);
	console.log('body: ', body);
});
console.timeEnd('Time this: ');