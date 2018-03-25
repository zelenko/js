//  return roman numeral of a number

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
  
  console.log(convertToRoman(1099));