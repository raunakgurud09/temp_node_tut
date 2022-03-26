const fs = require("fs");

const first = fs.readFileSync("./file/first.txt", "utf-8");
const second = fs.readFileSync("./file/second.txt", "utf-8");

console.log("start")
fs.writeFileSync(
  "./file/result.txt",
  `here is the result: ${first} ${second}`,
  { flag: "a" }
);
console.log("done with the task");
console.log("starting with the next task");