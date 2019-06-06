console.log("Hello world!!!");
console.log();
//let sum = Fristnum + Secondnum
//console.log("Sum of 2 number:"+ sum)
function sumTownumber(a, b) {
    var sum = a + b;
    return sum;
}
console.log("Sum of 2 number:" + sumTownumber(5, 6));
console.log();
function evenNumber(a) {
    var number = a % 2;
    if (number == 0) {
        console.log(a + " is even number");
    }
    else
        console.log(a + " is odd number");
}
evenNumber(5);
console.log();
function countEvennumber(a) {
    var count = 0;
    for (var index = 1; index <= a; index++) {
        if (index % 2 == 0) {
            count++;
        }
    }
    console.log("From 1 to " + a + " have " + count + " even number");
}
countEvennumber(10);
console.log();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.displayInformation = function () {
        console.log("My name " + this.firstName + " " + this.lastName + " and I'm " + this.age + "year old");
    };
    return Person;
}());
var MrA = new Person("A", "B", 8);
MrA.displayInformation();
