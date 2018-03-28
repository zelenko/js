

function abc(a){
    return (function(y){
        return y+1;
    })(++a) + a; // First "a" is incremented, so the second reference of "a" is updated.
}


console.log( abc(2) );
