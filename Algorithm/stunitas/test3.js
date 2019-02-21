var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('./data3.txt').toString().split('\n');

var t = parseInt(input[0]);
var i=1;

while(t>0){
  var n = parseInt(input[i]);
  var arr = [];
  var cnt = 0;
  var start = 0;
  for(var j=i+1;j<=n+i;j++){
    arr.push(input[j].split(' ').map(function(el){return parseInt(el)}));
  }
  arr.sort();
  for(var j=0;j<arr.length;j++){
    if(start>arr[j][0]) continue;
    else{
      start = arr[j][1];
      cnt++;
    }
  }
  i = i + n+1;
  t--;
  console.log(cnt);
}