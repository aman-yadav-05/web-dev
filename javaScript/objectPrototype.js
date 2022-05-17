console.log("objectPrototype connected!")
// let obj={
//     name:"aman",
//     age:20
// }
function obj(){
    this.name="aman";
    this.age=20;
}

obj.prototype.greet=function(){
    document.write("good morning.")
}

let o1=new obj();
console.log(o1.age)
console.log(obj)
console.log(obj.prototype)
