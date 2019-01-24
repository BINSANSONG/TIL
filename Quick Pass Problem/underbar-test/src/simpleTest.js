let arr = [1,2,3,4,5];
let obj = {a:'A',b:'B',c:'C', 2:'2'};
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// console.log(arr.hasOwnProperty(0));
// console.log(obj.hasOwnProperty('a'));

for (const key in arr) {
  if (arr.hasOwnProperty(key)) {
    const element = arr[key];
    console.log(key)
    console.log(element);
  }
}
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const element = obj[key];
    console.log(key);
    console.log(element);
  }
}