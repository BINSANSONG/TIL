var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var input = fs.readFileSync('./data4.txt').toString().split('\n');

var t = parseInt(input[0]);
var i = 1;
while(t>0){
  var cond = input[i].split(' ').map(function(el){return parseInt(el)});
  var holidays = cond[1];
  
  var infos = [];
  for(var j=i+1;j<=i+cond[0];j++){
    var info = input[j].split(' ').map(function(el){return parseInt(el)});
    infos.push(info);
  }
  i=i+cond[0]+1;
}