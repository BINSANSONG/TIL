/*
let arr = [1,2,3,4,5];
let obj = {a:'A',b:'B',c:'C', 2:'2'};
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log(arr.hasOwnProperty(0));
console.log(obj.hasOwnProperty('a'));

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
*/

/*
let _ = {};
_.each = function(collection, iterator) {
  let isArray = Array.isArray(collection);
    if(isArray){
      for (let index = 0; index < collection.length; index++) {
        iterator(collection[index],index,collection);
      }
    }else{
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          const value = collection[key];
          iterator(value,key,collection);
        }
      }
    }
};
var letters = ['a', 'b', 'c'];
var iterations = [];
_.each(letters, function(letter, index) {
  iterations.push([letter, index]);
});
console.log(iterations);
expect(iterations).to.eql([
  ['a', 0],
  ['b', 1],
  ['c', 2]
]);


var letters = ['a', 'b', 'c'];
var iterations = [];
_.each(letters, function(letter, index, collection) {
  iterations.push([letter, index, collection]);
});
expect(iterations).to.eql([
  ['a', 0, letters],
  ['b', 1, letters],
  ['c', 2, letters]
]);


var iterations = [];
var letters = ['a', 'b', 'c'];
console.log(typeof(letters));
console.log(Array.isArray(letters));
letters.someProperty = 'Do not iterate over me!';
console.log(typeof(letters));
console.log(Array.isArray(letters));
console.log(letters[0]);
console.log(letters[3]);
console.log(letters['someProperty']);
_.each(letters, function(letter, index, collection) {
  iterations.push(letter);
});

console.log(iterations);
// expect(iterations).to.not.include('Do not iterate over me!');

*/
/*
const someFunc = (value) => value;
console.log(typeof(someFunc));
console.log(someFunc);
console.log(!someFunc);
console.log(typeof(!someFunc));
*/

// function argu(obj) {
//   for (let index = 0; index < arguments.length; index++) {
//     console.log(arguments[index]);
//   }
//   console.log(obj);
// }

// argu({a:'A'},{b:'B',c:'C'},{d:'D'});

// function test(){
//   return arguments;
// }

// var t1 = test(1,2,3);
// var t2 = test(1,2,3);
// console.log(t1===t2);
// console.log(Object.is(t1,t2));
// console.log(t1);
// console.log(t2);
// var test2 = {
//   a:'a',
// };
// test2[t1] = 'b';
// test2[t2] = 'c';
// console.log(test2);

// function test() {
//   return arguments;
// }

// var t1 = { a:'A',b:'B'};
// var t2 = { a:1,b:2};
// var t3 = test(1,2,3);
// var t4 = test(2,3,4);
// console.log(JSON.stringify(t1));
// console.log(JSON.stringify(t2));
// console.log(JSON.stringify(t3));
// console.log(JSON.stringify(t4));

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// console.log(parseInt(input[0])+parseInt(input[1]));


// var n = 10;
// var memo = [0,1,1];
// function fibo(i){
//   if(!!memo[i]) {
//     return memo[i];
//   }
//   else{
//     memo[i] = fibo(i-1)+fibo(i-2);
//     return memo[i];
//   }
// }

// console.log(fibo(n));

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input.push(makearray(line));
//   })
//   .on('close', function () {
//     console.log(input);
//     process.exit();
// });

// function makearray(line){
//   return line.split(' ').map(el=>parseInt(el));
// }
// function maze(arr){

// }


// var arr = [0,1];
// var t = arr.pop();
// var r = arr.pop();
// var s = arr.pop();
// console.log(t);
// console.log(r);
// console.log(s);
// console.log(arr);

// var arr = [];
// arr.push([0,1],[3,4],[2,5],[2,4]);
// arr.sort();
// console.log(arr);

// function test(params) {
//   return params;
// }
// var tt = {};
// var t = 'test';
// console.log(typeof Object);

// var a1 = [1,2,3,4];
// var a2 = [2,3,'a','b','c'];
// var c1 = [true];
// var argu = [a1,a2,c1];
// var results = [];
// for (let i = 0; i < a2.length; i++) {
//   results[i] = argu.map(function(item){
//     return item[i];
//   });
// }
// console.log(results)

// function test(arr,result){
//   var results = result===undefined ? [] : result;
//   console.log(results);
//     arr.forEach(function(item){
//       if(Array.isArray(item)){
//         test(item,results);
//       }else{
//         results.push(item);
//       }
//     });
//     return results;
// }
// var arr = [[1,2],3,[4,5,[6]]];
// var arr2 = test(arr);
// console.log(arr2);

// memoize = function(func) {
//   const memo = {};
//   return function(){
//     const inputJSON = JSON.stringify(arguments);
//     if(!memo.hasOwnProperty(inputJSON)){
//       console.log(memo);
//       memo[inputJSON] = func(...arguments);
//       console.log(memo);
//     }
//     return memo[inputJSON];
//   }
// };

// const test = memoize((a,b)=>a+b);
// test(3,4)

sortBy = function(collection, iterator) {
  const cp = collection.slice();
  if(typeof iterator === 'string'){
    return cp.sort((a,b)=>{
      return a[iterator] - b[iterator];
    })
  }else{
    return cp.sort((a,b)=>{
      return iterator(a) - iterator(b);
    })
  }
};
var list = ['one','two','three','four','five'];
var sorted = sortBy(list,'length');
console.log(sorted);