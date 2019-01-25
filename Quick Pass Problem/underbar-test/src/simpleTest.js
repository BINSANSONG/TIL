// let arr = [1,2,3,4,5];
// let obj = {a:'A',b:'B',c:'C', 2:'2'};
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// console.log(arr.hasOwnProperty(0));
// console.log(obj.hasOwnProperty('a'));

// for (const key in arr) {
//   if (arr.hasOwnProperty(key)) {
//     const element = arr[key];
//     console.log(key)
//     console.log(element);
//   }
// }
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     const element = obj[key];
//     console.log(key);
//     console.log(element);
//   }
// }

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
// var letters = ['a', 'b', 'c'];
// var iterations = [];
// _.each(letters, function(letter, index) {
//   iterations.push([letter, index]);
// });
// console.log(iterations);
// expect(iterations).to.eql([
//   ['a', 0],
//   ['b', 1],
//   ['c', 2]
// ]);


// var letters = ['a', 'b', 'c'];
// var iterations = [];
// _.each(letters, function(letter, index, collection) {
//   iterations.push([letter, index, collection]);
// });
// expect(iterations).to.eql([
//   ['a', 0, letters],
//   ['b', 1, letters],
//   ['c', 2, letters]
// ]);


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