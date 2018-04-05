
var x = document.getElementById("geoLocationId");

//Gets the viewers latitude and longitude
function getLocation() {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML="Geolocation is not supported by this browser.";
	}
}


//Displays Location in HTML
function showPosition (position){
  console.log(position);
  x.innerHTML="Latittude: " + position.coords.latitude + "<br>Longitude: "+ position.coords.longitude;
}


function getTemp(lat,lon){
	// http://api.wunderground.com/api/43e282725b9ebc9f/conditions/q/34.857025,-82.4018806.json

	$.ajax({
		url : "http://api.wunderground.com/api/43e282725b9ebc9f/conditions/q/"+ lat +","+ lon +".json",
		dataType : "jsonp",
		success : function(parsed_json) {
			// var location = parsed_json['current_observation']['city'];
			var temp_f = parsed_json['current_observation']['temp_f'];
			console.log("Result: "+ parsed_json);
			alert("Current temperature is: " + temp_f); 
		}
	});
};

// Get temperature for your location
// API: http://api.wunderground.com/weather/api/d/docs?d=resources/code-samples&MR=1
function getTemp2(){
      $.ajax({
      //url : "http://api.wunderground.com/api/43e282725b9ebc9f/geolookup/conditions/q/IA/Cedar_Rapids.json",
      url : "https://api.wunderground.com/api/43e282725b9ebc9f/geolookup/conditions/q/34.857025,-82.4018806.json",
      dataType : "jsonp",
      success : function(parsed_json) {
		  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  $("#test").html("Current temperature in " + location + " is: " + temp_f);
      }
      });
    };

// Display random quote
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r); 
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      $("#quote").html("quote: " + currentQuote + "<br>Author: " + r.author);
    }
  });
}


  

//weather underground API 
//https://www.wunderground.com/weather/api/d/docs?d=index
//     //Combines the url with the geolocation of the viewer (atleast it is suppose too)
// jQuery(document).ready(function($) {
//   $.ajax({

//   url : "http://api.wunderground.com/api/43e282725b9ebc9f/forecast/q/"+position.coords.latitude+","+position.coords.longitude+".json",
//   dataType : "jsonp",
//   success : function(parsed_json) {
//   var location = parsed_json['location']['city'];
//   var temp_f = parsed_json['current_observation']['temp_f'];
//   alert();
//   }
//   });
// });
//this could give me the website
// "http://api.wunderground.com/api/43e282725b9ebc9f/geolookup/forecast/q/"+ location +"/"+ city