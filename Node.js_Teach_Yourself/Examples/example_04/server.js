var http = require('http');

var onResponse = function (req, res) {
  // console.log("Got request: ", req);
  res.writeHead(301, {'Location':'http://www.bilibili.com'});
  res.end('Hello World \n');
}
http.createServer(onResponse).listen(3000);
