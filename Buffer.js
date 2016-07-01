var buff1 = new Buffer(20);
var len = buff1.write('www.runoob.com');
var json = buff1.toJSON(buff1);
console.log(json);
console.log('\n');
console.log('buff1 content:' + buff1.toString() + '\n');
console.log('buff1 write len:' + len);
console.log('\n')

var buff2 = new Buffer('buff2');
var buff3 = new Buffer('buff3');
buff3.copy(buff2, 0, 1, 3);
console.log('buff3 content after copy:' + buff3.toString());