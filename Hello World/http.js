const http = require('http');

var server = http.createServer(function(request, response){

	console.log("Request received!");

	response.writeHead(200, {"Content-Type": "text/plain"});

	response.end("Hello node.jSTL!");

});

server.listen(9001);

console.log("Server is now running at localhost:9001/");