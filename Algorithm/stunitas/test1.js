var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var input = fs.readFileSync('./data.txt').toString().split('\n');
var t = parseInt(input[0]);
var a = [];
var b = [];

function whoWins(arr1,arr2) {
  while(arr1.length>=0&&arr2.length>=0){
    if(arr1.length===0&&arr2.length>0) return 'B';
    if(arr2.length===0&&arr1.length>0) return 'A';
    if(arr1.length===0&&arr2.length===0) return 'D';

    var a = arr1.pop();
    var b = arr2.pop();
    
    if((a-b)===0){
      continue;
    }else if(a>b){
      return 'A';
    }else{
      return 'B'
    }
  }
}


for(var i=1;i<t*2;i+=2){
  a = input[i].split(' ').map(function(el){return parseInt(el)});
  a.shift();
  b = input[i+1].split(' ').map(function(el){return parseInt(el)});
  b.shift();
  a.sort();
  b.sort();
  console.log(whoWins(a,b));
}

