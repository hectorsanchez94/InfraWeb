var http = require('http');

var server = http.createServer(function (req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end('Hola mundo');
});

server.listen(8000);

console.log('Esperando peticiones localhost:8000');
