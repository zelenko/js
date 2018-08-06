
// Person object
function Person(age, weight) {
    this.age = age;
    this.weight = weight;
    this.getInfo = function() {
        return "I am " + this.age + " years old " +
        "and weighs " + this.weight +" kilo.";
    }
}

// Employee object
function Employee(age, weight, salary) {
    this.salary = salary;
    this.age = age;
    this.weight = weight;
    this.getInfo = function() {
        return "I am " + this.age + " years old " +
        "and weighs " + this.weight +" kilo " +
        "and earns " + this.salary + " dollar.";
    }
}

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
  // The argument, 'obj', can be of any kind
  // which method, getInfo(), to be executed depend on the object
  // that 'obj' refer to.

function showInfo(obj) {
    //document.write(obj.getInfo() + "<br>");
	console.log(obj.getInfo() + "<br>");
}

var person = new Person(50,90);
var employee = new Employee(43,80,50000);
showInfo(person);
showInfo(employee);
