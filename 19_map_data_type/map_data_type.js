

// logMapElements function
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

// declaring map
new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
  .forEach(logMapElements);

// expected output: "m[foo] = 3"
// expected output: "m[bar] = [object Object]"
// expected output: "m[baz] = undefined"


var list = new Map();

list.set(1,"one");
list.set(2,"two");
list.set(3,"three");

console.log(list
    .size);

var test = "testing";
console.log(`ok ${test} ` + list.get(3))

