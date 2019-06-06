export class Person{
    firstName:string;
    lastName:string;
    age:number;
    constructor(firstName:string,lastName:string,age:number){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age=age;
    }
    displayInformation(){
        console.log("My name " + this.firstName +" "+ this.lastName+" and I'm " +this.age+ " year olds")
    }
}
let MrA = new Person("Jason", "Le", 26);
MrA.displayInformation();