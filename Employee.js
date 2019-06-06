"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    Employee.prototype.displayEmployeeInformation = function () {
        var p = new Person_1.Person("Jason", "Le", 26);
        p.displayInformation();
        console.log("Salary is" + this.salary);
    };
    return Employee;
}());
var em = new Employee(2000);
em.displayEmployeeInformation();
