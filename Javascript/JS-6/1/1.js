class Employee {
    constructor(name, age, basic) {
        this.name = name,
            this.age = age,
            this.basic = basic;
    }
    getSalary() {
        let hra = 10 * this.basic;
        let da = 10 * this.basic;
        let salary = hra + da + this.basic;
        return salary;
    }
}
let emp1=new Employee("Sai",35,1000);
console.log("THe Employee 1 Salary is :",emp1.getSalary());
let emp2=new Employee("Revi",39,2000);
console.log("THe Employee 2 Salary is :",emp2.getSalary());
let emp3=new Employee("Sri",37,1500);
console.log("THe Employee 3 Salary is :",emp3.getSalary());
let emp4=new Employee("Vishal",32,1600);
console.log("THe Employee 4 Salary is :",emp4.getSalary());
let emp5=new Employee("Anil",40,1700);
console.log("THe Employee 5 Salary is :",emp5.getSalary());