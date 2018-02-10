// copy array

var arr = [1,2];
//var arr2 = arr;
var arr2 = Object.assign([], arr);
arr.push(3);
console.log(arr)
