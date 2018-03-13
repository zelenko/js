
var i = 1;


var b = document.getElementById("note1");
b.addEventListener('input', submitForm);

function submitForm(){
        document.getElementById("note").innerHTML = "ok: " + i + " - " + b.value;
		i++;
}