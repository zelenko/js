document.addEventListener("DOMContentLoaded", function(event) {
  var e = document.getElementById("myForm");
  var msg = "";
 
  // Wait for user to click the button
  e.addEventListener("change", function () {
    var myColor = this[0].value;

    if (myColor == "Blue") {
      msg = "Just like the sky!";
    } else if (myColor == "Red") {
      msg = "Quite daring!";
    } else if (myColor == "Green") {
      msg = "Like... grass?";
    } else {
	  msg = "Color: " + myColor;
	} 

    // Output message
    document.getElementById("msg").innerHTML = msg;
  }, false);
  
  
});