var d= new Date();
var t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

var csvData = '"test: 123, time:'+t+'"\n';

var fs = require('fs');
//fs.writeFile("tempN.csv", csvData, 'utf8', function (err) {
fs.appendFile("tempN.csv", csvData, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while saving CSV.");
        return console.log(err);
    }

    console.log("CSV file has been saved.");
});

