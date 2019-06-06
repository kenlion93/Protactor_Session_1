import { Person } from "./Person";


class Employee {
    salary:number
    constructor(salary:number){
        this.salary = salary
    }

    displayEmployeeInformation(){
        let p = new Person("Jason", "Le", 26)
        p.displayInformation()
        console.log ("Salary is"+this.salary)
    }

}

let em = new Employee(2000)
em.displayEmployeeInformation()