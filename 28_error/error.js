

function test(x) {
    if (x == "") return new Error('empty');
    if (isNaN(x)) return new Error('not a number');

    if (x < 5) return new Error('too low');
    if (x > 10) return new Error('too high');
    x = Number(x);
    return x;
}


var err = test(5);
if (err instanceof Error) {
    console.log(err.message);
} else {
    console.log("result:", err);
}
