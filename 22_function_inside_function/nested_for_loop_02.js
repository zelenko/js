var count = 0;
for(i=0; i<3; i++){
    for(j=3; j>0; j--){
        ++count;
        console.log("i: " + i +"; " + "j: "+ j + " count: "+ count);
    }
}

console.log(++count);