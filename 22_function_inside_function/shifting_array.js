var arr = [2,3,8,5,9,1];
var i, j = 2;


console.log(arr.toString());

for (i=0; i+j < arr.length; i++){
    arr[i+j] = arr[i];
    console.log(i + " - " + arr[i]);
}

console.log(arr.toString());
