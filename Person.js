"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.displayInformation = function () {
        console.log("My name " + this.firstName + " " + this.lastName + " and I'm " + this.age + " year olds");
    };
    return Person;
}());
exports.Person = Person;
var MrA = new Person("Jason", "Le", 26);
MrA.displayInformation();
