const moment = require('moment');

const duration = moment.duration(1000000);
let min = duration.minutes();
let sec = duration.seconds();
const du2 = moment.duration({
  s:2,
  m:3,
  h:3
});
const min2 = du2.minutes();
const sec2 = du2.seconds();
  console.log(min);
  console.log(sec);
  console.log(min2);
  console.log(sec2);



// const variable = 'variable';
// const test = (variables /*: * */ = variable) => {
//   console.log(variables);
// }
// test();