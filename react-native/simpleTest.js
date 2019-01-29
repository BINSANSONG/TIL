const moment = require('moment');

const duration = moment.duration(1000000);
let min = duration.minutes();
let sec = duration.seconds();
setInterval(() => {
  console.log(min);
  console.log(sec);
}, 1000);