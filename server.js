var http = require("http");
 const https = require('https');
http.createServer(function (request,response){
 response.writeHead(200,{'Content-Type':'text/plain'});
 response.end("Hello World\n");

var post_data={
	'departmentId':'127254000000006907',
	'status':'open',
	'subject':'ticket created via node js',
	'contactId':'127254000000069619',
	'assigneeId':'127254000000064003'
}
var postData = JSON.stringify(post_data);
console.log('postData hallo'+postData);
const options={
	hostname:'desk.zoho.com',
	port:443,
	path:'/api/v1/tickets',
	method:'POST',
	headers:{
		'Authorization':'Zoho-authtoken a86eb1beed861cbe670b34c7d27e4bf6',
		'orgId':'525025162'
	}
};
console.log('options hallo'+options);
const requ = https.request(options,(res)=>{
	console.log('hallo');
	res.setEncoding('utf8');
	res.on('data',(d)=>{
		process.stdout.write(d);
	});
});

requ.write(postData);

requ.on('error',(e)=>{
	console.error(e);
});
requ.end();
}).listen(8080);
console.log('Server running at http://127.0.0.1:8081/');
