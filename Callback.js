/**
 * Node.js的异步操作通常如同下面异步读取文件操作一样
 * 通过使用回掉函数达到异步执行的效果
 */

var fs = require('fs');

// 同步读取文件内容
var data = fs.readFileSync('README.md');
console.log(data.toString());

console.log('同步读取结束\n');

// 利用回调异步读取文件内容
fs.readFile('README.md', function(err, data) {
	if (err) {
		return console.error(err);
	}

	console.log(data.toString());
})

console.log('异步读取结束\n');