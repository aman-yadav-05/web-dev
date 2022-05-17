console.log("javaScript is connected.")

class student {
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    information() {
        return `Name:${this.name}, age:${this.age},roll no:${this.rollNo}`;
    }
}

//lets make a class of student higher grades but it will inherit the property of lower class also.
class higher extends student {
    constructor(name, age, rollNo, stream, jobs) {
        super(name, age, rollNo);
        this.stream = stream;
        this.jobs = jobs;
    }
    highinfo() {
        return `you are seeing the information of ${this.name}, who is working as ${this.jobs} and chose ${this.stream} as stream.`;
    }
    static division(a, b) { return a / b };
}

let s1 = new student("Aman", 20, 05);
let h= new higher("Garima",32,23,"mathematics","professor");

console.log(higher.division(10,5));
console.log(h.highinfo());
console.log(s1.information());