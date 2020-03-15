"use strict";

var arr = [2, 4, 5, 6, 7, 4, 4];
console.log(arr);
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
