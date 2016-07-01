/**
 * basic operation
 */

// var fs = require('fs');

// var data = ''
// var inputStream = fs.createReadStream('README.md');
// var outputStream = fs.createWriteStream('output.md');

// inputStream.setEncoding('UTF8');

// inputStream.on('data', function(input) {
// 	data += input;	
// 	console.log('on data event');
// })

// inputStream.on('end', function() {
// 	console.log('on end event');
// 	outputStream.write(data, 'UTF8');
// 	outputStream.end();
// })

// inputStream.on('error', function(err) {
// 	console.log('on error event with err:' + err.stack);
// })

// outputStream.on('finish', function() {
// 	console.log('finish write output.md');
// })

/**
 * ReadStream.pipe();
 */

// var fs = require('fs');
// var readStream = fs.createReadStream('README.md');
// var writeStream = fs.createWriteStream('output.md');
// writeStream.on('finish', function() {
// 	console.log('write finish');
// })
// readStream.pipe(writeStream);

/**
 * compress
 */


var fs = require('fs');
var zlib = require('zlib');

// compress
// var readStream = fs.createReadStream('README.md');
// var writeStream = fs.createWriteStream('README.md.zip');
// writeStream.on('finish', function() {
// 	console.log('compress end!');
// })
// readStream.pipe(zlib.createGzip()).pipe(writeStream);

// decompress
var readStream = fs.createReadStream('README.md.zip');
var writeStream = fs.createWriteStream('README.md');
writeStream.on('finish', function() {
	console.log('decompress end!');
})
readStream.pipe(zlib.createGunzip()).pipe(writeStream);