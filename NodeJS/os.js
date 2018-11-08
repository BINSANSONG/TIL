const os = require('os');

const totalMemory = os.totalmem()/1024/1024;
const freeMemory = os.freemem()/1024/1024;

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);
