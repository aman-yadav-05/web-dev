console.log("practice inheritance.js is connected with html.");

class Employee{
    constructor(name,dob,address){
        this.name=name;
        this.dob=dob;
        this.address=address;
    }
    details(){
        return `Name of employee is ${this.name}, whose date of birth is ${this.dob} & lives in ${this.address}.`;
    }
    introduction(){
        return `Hello, I am ${this.name}. I'm looking forward to work with you.`;
    }
    eligibilityYear(){
        return 2022-this.dob;
    }
    static sum(a,b){return a+b};
}

class analyst extends Employee{
    constructor(name,dob,address,language,dept){
        super(name,dob,address);
        this.language=language;
        this.dept=dept;
    }
    details2(){
        return `He/She is having prior knowledge in ${this.language}. Working with ${this.dept}.`
    }

}

// let's make an employee class's object 
let e1= new Employee("Aman",2002,"janjgir");
document.write(e1.details());
console.log(Employee.sum(239,23542));
document.write(e1.introduction())

let p1= new analyst("Garima",2000,"Raiput","Java","Backends Dev.");
// let employeeList = document.querySelector('ul');
// employeeList.appendChild(p1.details());
document.write(p1.details());
document.write(p1.details2());
