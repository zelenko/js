npm install --save bootstrap@3

npm install -g @angular/cli


ng serve --open



js = just in time compiled
======================================
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var myCar = function(){
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
  this.turboType = "twin";
};

myCar.nickname = 'Ford';

===================
1 - answer = "alpha"
2 - answer = "beta"
3 - answer = "gamma"
4 - answer = "delta"


switch (val) {
 case 1:
 answer = "alpha";
 break;
 case 2:
 answer = "beta";
 break;
 case 3:
 answer = "gamma";
 break;
 case 4:
 answer = "delta";
 break;
 }

switch (val) {
 case 1:
 case 2:
 case 3:
 answer = "Low";
 break;
 case 4:
 case 5:
 case 6:
 answer = "Mid";
 break;
 case 7:
 case 8:
 case 4:
 answer = "High";
 }

1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

===========
if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
switch (val) {
 case "bob":
 answer = "Marley";
 brake;

 case 42:
  answer = "The Answer";
  brake;

  case 1:
   answer = "There is no #1";
   brake;

   case 99:
    answer = "Missed me by this much!";
    brake;

    case 7:
     answer = "Ate Nine";
 }

======== q 106 ============
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'

switch (card) {
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
 count++;

 break;
 case 7:
 case 8:
 case 9:

 break;
 case 10:
 case 'J':
 case 'Q':
 case 'K':
 case 'A':
 count--;

}

if (count > 0) return count + " Bet";
return count + " Hold";
================================


<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. "></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera. ">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
=====================
$("button").addClass('animated');
    $(".btn").addClass('shake');
    $("#target1").addClass('btn-primary');


$("#target1").css("color", "blue");
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

  });
</script>


$("#target1").prop("disabled", true);

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target1").remove();
    $("#target2").appendTo("#right-well");
    $("#target2").clone().appendTo("#right-well");
    $("#target1").parent().css("background-color", "red")
    $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red")
     $("#right-well").children().css("color", "orange")
     $(".target:nth-child(3)").addClass("animated bounce");

  });
</script>



var gloveBoxContents = ourStorage.car.inside["glove box"]; // Change this line

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

// profile-lookup
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var output = "";
  var propFound = false;
  for (var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName == firstName){
        output = contacts[i].firstName;

        if (contacts[i].hasOwnProperty(prop)){
        //if (contacts[i].prop != ""){
          // do
          propFound = true;
          return contacts[i][prop];
        }
      }
    }

  if (propFound == true && output != ''){
    return output;
  }

  if (output == ''){
    return "No such contact";
  }

  if (propFound == false){
    return "No such property";
  }

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");



===============
Math.floor(Math.random() * 20);

============================

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;


// Only change code below this line.

var expression = /and/gi;  // Change this Line

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;

var expression = /\d+/g;  // for digits

\s to find whitespace in a string.
The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).
===========================

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(6, 3, 1);
{
  wheels: 6,
  seats: 3,
  engines: 1
}

==============================

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  var gear;

  this.getGear = function() {
    return gear;
  };

  this.setGear = function(change) {
    gear = change;
  };

};

var myCar = new Car();

var myBike = new Bike();


=========================
var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(val){
  return val + 3;
});


================
// GET TOTAL OF ALL ITEMS IN ARRAY
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal += currentVal;
}, 0);

// Filter array
var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val) {
  return val < 6;
});


///////// sorting from largest to smallest

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a, b) {
  return b - a;
});



=================== reverse array

function reverseString(str) {
  var array1 = str.split('');

  var reversed = array1.reverse();
  str = reversed.join("");
  return str;
}

reverseString("hello");


// factorial

function factorialize(num) {
  var j = 1;
  for (var i = 1; i <= num; i++) {
    j*= i;
  }

  return j;
}

factorialize(5);


///////////// split array; source = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(0, 3));
// expected output: Array ["bison", "camel", "duck", "elephant"]


================
        reg exp:
i
function palindrome(str) {

var newStr = str.toLowerCase();
var newstr = newStr.replace(/\W\d*\s*\_*\,*\**\#/gi, '');
var count = Math.floor(newstr.length/2);
console.log(count);
var array1 = newstr.split('');
var half1 = array1.slice(0, count);
var half2 = array1.slice(count+1);
var reversed = half2.reverse();
var str2 = reversed.join("");
var str1 = half1.join("");

if (str1 == str2){
return true;
}
return false;
}



palindrome("eye");

// palindrdome solution
function palindrome(str) {

var newstr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
var reversed = newstr.split('').reverse().join("");
//document.getElementById("demo2").innerHTML = reversed;

return (newstr == reversed);
}

palindrome("eye");



var max_of_array = Math.max.apply(Math, array);

// longer word solution

function findLongestWord(str) {
  var words = str.split(' ');

  var wordLenghts = words.map(function(val){
    return val.length;
  });

  //return wordLenghts;
  return Math.max.apply(Math, wordLenghts)


  //return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//////////

function findLongestWord(str) {
  var words = str.split(' ');

  var wordLenghts = words.map(function(val){
    return val.length;
  });

  // return Math.max.apply(Math, wordLenghts)
  return Math.max.apply(null, wordLenghts)
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// capitalize words
function titleCase(str) {
  var words = str.split(' ');

  var wordsCap = words.map(function(val){
    return val.charAt(0).toUpperCase()  + val.substr(1).toLowerCase();
  });

  return wordsCap.join(" ");
}

titleCase("I'm a little tea pot");


// Return Largest Numbers in Arrays
function largestOfFour(arr) {

  var maxArray = [];
  for (var i = 0; i < arr.length; i++) {
    maxArray.push(Math.max.apply(null, arr[i]));
  }
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/// check if ending is the same as target

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ending = str.substr(-(target.length));

  return (ending == target);
}

confirmEnding("Bastian", "n");


// multiply string

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 1) return '';
  var output = '';
  for (var i = 0; i<num; i++){
    output += str;
  }
  return output;
}

repeatStringNumTimes("abc", 3);


/// return string specific length

function truncateString(str, num) {
  //var output = '';
  if (str.length > num){
    // truncate
    if (num < 4){
      // ... does not add to length
      return str.substr(0, num)+ "...";
    } else {
      // ... does add
      return str.substr(0, num-3)+ "...";
    }
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


//// chunky-monkey

function chunkArrayInGroups(arr, size) {

  var newArray = [];

  while (arr.length > 0){
    var tempArray = [];
    if(arr.length < size){size = arr.length;}
    for(var i=0; i<size; i++){
      tempArray.push(arr[i]);
    }
    newArray.push(tempArray);
    arr = arr.slice(size);
  }

  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// slasher-flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);


//mutations

function mutation(arr) {
  //var word = arr[0].split('');
  var array2 = arr[1].toLowerCase().split('');
  var out = 0;
  for (var i=0; i < array2.length; i++){
    out = arr[0].toLowerCase().indexOf(array2[i]);
    if(out <0) return false;

  }
  return true;
}

mutation(["hello", "hey"]);


// falsy

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isBigEnough(value) {
    return !!value;
  }

  var filtered = arr.filter(isBigEnough);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);


// another way for falsy bouncer:

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isBigEnough(value) {
    //return !!value; // this works too
    return value ? true : false;
  }

  var filtered = arr.filter(isBigEnough);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);


// remove some  values, destroyer

function destroyer(arr) {
  // Remove all the values
  arg = Array.from(arguments);
  function myFilter(value) {
    //return !!value; // this works too

    for (var i=1; i < arguments.length; i++){
      out = arg.indexOf(value);
    }
    if(out < 0) return value;
    //return (out > -1) value;
    // return value >= 10;
  }

  var filtered = arr.filter(myFilter);

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// where do I belong
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });


  var index = 0;
  //return arr;
  for (var i=0; i < arr.length; i++){
    if(arr[i] >= num){
       //index = i;
      return i;
    }
    //out = arg.indexOf(value);
  }
  return i;


  //return index;
}

getIndexToIns([70, 40, 60], 50);




// rot13 roman enqryption.   table: http://www.asciitable.com/

function rot13(str) { // LBH QVQ VG!
  var output = '';

  for (var i =0; i<str.length; i++){
    // var c = str.charCodeAt(i);
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {  // 78-103, or 65 - 90
      var newC = str.charCodeAt(i)-13;

      if(newC<65){
        // e ==69; 69-13=57;
        // 65-57=8; 90-8=82;
        // 90-(65-57)=82; // 57 is the variable
        // 90-(65-str.charCodeAt(i))=82; // 57 is the variable
        output += String.fromCharCode(91-(65-newC));
      }else{
        output += String.fromCharCode(newC);
      }

    } else {
      output += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return output;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


////////// jquery click

<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function(){
      // Only change code below this line.
      $(".message").html("Here is the message");
      // Only change code above this line.
    });
  });
</script>


<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>


///////////  get json api

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function(){
      // Only change code below this line.

      $.getJSON("/json/cats.json", function(json) {
$(".message").html(JSON.stringify(json));
});

      // Only change code above this line.
    });

  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>


////////////////  convert JSON to HTML

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";
        // Only change code below this line.

        json.forEach(function(val) {
        var keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach(function(key) {
        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
        });

        // Only change code above this line.

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
   </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>


///////////////////   render JSON On HTML

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        json.forEach(function(val) {

          html += "<div class = 'cat'>";

          // Only change code below this line.

          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

          // Only change code above this line.

          html += "</div>";

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>


////// JSON filtering on HTML

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        // Only change code below this line.

        json = json.filter(function(val) {
        return (val.id !== 1);
        });

        // Only change code above this line.

        json.forEach(function(val) {

          html += "<div class = 'cat'>"

          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

          html += "</div>"

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>


/////////////////  get Geological data, location, latitude and longiture

<script>
  // Only change code below this line.

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
  }

  // Only change code above this line.
</script>
<div id = "data">
  <h4>You are here:</h4>

</div>

/////////// sum all numbers in a range

function sumAll(arr) {
  //var large = Math.max(arr);
  //var out = arg.indexOf(large);

  if (arr[0] > arr[1]){
    var t = arr[0];
    arr[0] = arr[1];
    arr[1] = t;
  }

  for (var i = arr[0]+1; i < arr[1]; i++){
    arr.push(i);
  }

  arr.sort(function(a, b) {
    return a + b;
  });

  var out = arr.reduce(function (a, b) {
    return a + b;
  }, 0);


  return out;
}

sumAll([1, 4]);



//////////// compare arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  for (var i=0; i < arr1.length; i++){
    for (var j=0; j < arr2.length; j++){
        out = arr2.indexOf(arr1[i]);
      if (out < 0){
        //newArr.push(arr1[i]);
        if (newArr.indexOf(arr1[i]) < 0){
          newArr.push(arr1[i]);
        }


      }
    }
  }


  for (var k=0; k < arr2.length; k++){
    for (var m=0; m < arr1.length; m++){
        out = arr1.indexOf(arr2[k]);
      if (out < 0){
        if (newArr.indexOf(arr2[k]) < 0){
          newArr.push(arr2[k]);
        }
      }
    }
  }

  if (arr1.length == 0){
    newArr = arr2;
  }
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);



////////////  return roman numeral of a number

function convertToRoman(num) {

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  var values = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];

  var myMap = new Map();

  // populate map
  for (var i = 0; i < numbers.length; i++){
    myMap.set(numbers[i], values[i]);
  }

  var out = "";

  var retry = function(n) {
    // process >= 1000
    while(n>=1000){
      out += "M";
      n -= 1000;
    }
    if (n==0) return;

    // process < 1000
    for(var j = 0; j<numbers.length; j++){
      if(n < numbers[j]){
        var remainder = n -numbers[j-1];
        out += myMap.get(numbers[j-1]);

        // if there is remainder
        if(remainder > 0){
          return retry(remainder);
        }
        break;
      }
    }
  };
  retry(num);

  return out;
}

convertToRoman(1000);



/////////////// select; Wherefore art thou Complete 

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i = 0; i < collection.length; i++){
    var obj = collection[i];
    var field = Object.keys(source);
    //if (field.length > 0) return field.length;
    //if (field.length > 0) return field[1];
    if (check(obj)){
      arr.push(obj);
    }


  }

  function check(item){
    var field = Object.keys(source);
    for (var j = 0; j < field.length; j++){
      if (item.hasOwnProperty(field[j]) && item[field[j]] == source[field[j]]){
        // good
      } else {
        return false;
      }
    }
    return true;

  }

  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]


// maintain your competitive edge
