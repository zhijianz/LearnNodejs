var size = 26;
var buff = new Buffer(size);
for (var i = 0; i < size; i++) {
	buff[i] = i + 97;
}

console.log(buff.toString());