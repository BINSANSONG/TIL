/* stringifyJSON.js
var stringifyJSON = function(obj) {
  var result = '';
  var isArray = Array.isArray(obj);
  var isObj = !isArray && typeof obj === 'object' && obj;
  if(isObj){
    result+='{';
    for(const key in obj){
      const element = obj[key];
      if(isUnstringifiable(element)) continue;
      result+=`"${key}":${stringifyJSON(element)},`;
    }
    result+='}';
    result=result.replace(',}','}');
    return result;
  }else if(isArray){
    result+='[';
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];
      if(isUnstringifiable(element)) continue;
      result+=`${stringifyJSON(element)},`;
    }
    result+=']';
    result=result.replace(',]',']');
    return result;
  }else{
    if(isUnstringifiable(obj)) return;
    const stringifiedElement = 
      typeof obj === 'string' 
        ? `"${obj}"` 
        : `${obj}`;
      
    result+=stringifiedElement;
    return result;
  }
};

var isUnstringifiable = (obj) => {
  return typeof obj === 'function' || typeof obj === 'undefined';
}

var obj = {
  a:'str',
  b:0,
  c:true,
  d:null,
  e:{
    eA:'EASPORTS',
    eB:10,
  },
  f:'str2',
  g:{
    gA:'gastbe',
    gb:true
  },
  h:[3,4,'a','b'],
  function:function(){},
  undefined:undefined,
}

console.log(stringifyJSON(obj));
console.log(JSON.stringify(obj));
console.log(stringifyJSON(obj)===JSON.stringify(obj));

*/
