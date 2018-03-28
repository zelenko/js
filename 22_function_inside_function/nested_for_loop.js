var i = 0, j = 0, count = 0;

for (;i < 3; i++){
    for (; j < 3; j++){ // Because at the end of fist loop j is 3, so will not run again.
        console.log("j: " + count);
        count++;
    }
    console.log("end of loop i: " + i)
}

console.log("result: " + count); // result: 3
