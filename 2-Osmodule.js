const os = require("os");

// info about user
const user = os.userInfo();
console.log(user);

//system time
console.log(`the system is running for ${os.uptime} seconds`);

//os object
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
