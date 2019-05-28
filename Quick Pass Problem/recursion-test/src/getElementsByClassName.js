// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var getNode = arguments[1] ? arguments[1] : document.body;

  if (getNode.classList) {
    for (var i = 0; i < getNode.classList.length; i++) {
      if (getNode.classList[i] === className) results.push(getNode);
    }
  }

  if (getNode.childNodes) {
    for (var i = 0; i < getNode.childNodes.length; i++) {
      var tmps = getElementsByClassName(className, getNode.childNodes[i]);
      if (tmps.length > 0) results.push(tmps);
    }
  }

  return results;
};
