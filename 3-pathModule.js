const path = require("path");
const { abort } = require("process");

console.log(path.sep);

const filePath = path.join("/file/", "subfile", "elif.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);
