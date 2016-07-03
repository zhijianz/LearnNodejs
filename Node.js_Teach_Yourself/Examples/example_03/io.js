var http = require('http');
var urls = ['www.baidu.com', 'www.bilibili.com', 'www.google.com'];

function fetchResponse(url) {
  var start = new Date();
  http.get({host:url}, function(res) {
    console.log('Got response from: ' + url);
    console.log('Request took: ', new Date() - start, 'ms');
  });
}

for (var i = 0; i < urls.length; i++) {
    fetchResponse(urls[i]);
  } 
