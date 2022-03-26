//module
const SayHi = require('./1.2-util')
const names = require('./1.1-const')

console.log(names)

SayHi('susan');
SayHi(names.john);
SayHi(names.peter);