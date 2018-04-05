// https://www.w3schools.com/charsets/ref_html_utf8.asp

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
function get(){
    // var obj = {a: "Hello", b: "World3",};  // json format optional

    // create variable
    var obj = ""
    for (var i = 0; i <= 1120; i++){

      // create new line
      var line = "line\t" + i + "\t" + String.fromCharCode(i) + "\t" + "\n";

      // add new line
      obj = obj + line;
    }
    //var d = new Date();
    //var n = d.getTime();

	//download("hello4_" + n + ".txt", obj); // optionally can use: JSON.stringify(obj)
    download("output.txt", obj); // optionally can use: JSON.stringify(obj)
}
