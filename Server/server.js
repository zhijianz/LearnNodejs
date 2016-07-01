var http = require('http');
var url = require('url');

function start(route) {
	function onResponse(request, response) {
		var pathName = url.parse(request.url).pathname;
		console.log('Request for ' + pathName + ' received.');

		route(pathName);
		response.writeHead(200, {'Content-Type':'text/plain'});
		response.end('Server started. \n');
	}

	http.createServer(onResponse).listen(8888);
	console.log('Server started.');
}

exports.start = start;