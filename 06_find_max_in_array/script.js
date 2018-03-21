// find max number in array
// without using if or else

function main(){
	numbers = [1,24,6,7,3];
	
	f=document.getElementById("r");

	f.innerHTML = "my_max: " +
	my_max(numbers) +
	"<br> Math.max: " +
	Math.max(...numbers);
}


// returns max from array
function my_max(n){
	var out = 0;
	
	for (i=0; i < n.length; i++){
		out = (n[i] > out)?n[i]:out;
	}
	return out;
}

// run main after window loads
window.onload = main;
