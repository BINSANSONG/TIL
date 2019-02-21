var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('./data2.txt').toString().split('\n');
var t = parseInt(input[0]);
for(var i=1;i<t+1;i++){
  var pizza = input[i].split(' ');
  var small = parseInt(pizza[0]);
  var medium = parseInt(pizza[1]);
  var large = parseInt(pizza[2]);
  var people = parseInt(pizza[3]);
  var maxLarge = Math.floor(people/large);
  var flag = false;
  for(var l = maxLarge;l>=0;l--){
    if(flag) break;
    var maxMidium = Math.floor((people - (l*large))/medium);
    for(var m=maxMidium;m>=0;m--){
      if(flag) break;
      var maxSmall = Math.floor((people - (l*large) - (m*medium))/small);
      for(var s = maxSmall;s>=0;s--){
        if(flag) break;
        var totalPizza = l*large+m*medium+s*small;
        if(totalPizza===people) {
          flag = true;
          console.log(1);
        }
      }
    }
  }
  if(!flag) console.log(0);
}