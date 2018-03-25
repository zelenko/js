var $ = function (s) { return document.getElementById(s); }

//var b = $('note1');



//updateField();
var i = 1;

function wow(myTextField){
	//var note = myTextField.value;
	i++;
	document.getElementById("note").innerHTML = "input: " + myTextField + "/" + i;
}

function updateField(){
	a = $('myForm');
	//a.addEventListener("input", wow(a.elements[1].value));
	//a.addEventListener('click', wow("clicked once"));
	a.addEventListener('input', wow(a.elements.item(1).value));
	;
}

var b = document.getElementById("note1");
//var b = document.querySelector('#note1');
b.addEventListener('input', wow("testing 1"));
//b.addEventListener('click', wow("clicked once"));
//tx.addEventListener('input', submitForm);


function submitForm(){
        document.getElementById("note").innerHTML = "ok: " + i;
		i++;
    }