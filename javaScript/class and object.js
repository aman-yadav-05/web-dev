console.log("javaScript is connected with HTML");

// object literals 

// construction function 
// function myCar(){};

//literal notation
// var myCar={};

// objects are created using object literals. A change in one instance will affect the all instance.

// following is an example of object literal . Object literal is comma separated list of name value pair inside curly braces. it encapsulate the data.
// var myCar={
//     make:'ford',
//     model: 'mustang',
//     year:2002
// };

// OBJECTS CREATED USING CONSTRUCTOR FUNCTION 
function myCar(make,model,year,price){
    this.make=make; //this.attribute_name=function args;
    this.model=model;
    this.year=year;
    this.price=price
    this.value=function(){
        console.log(`this car is ${50000-this.price} $ cheaper then the meta class`);
    }
}

// making objects 
// we can create object with new keyword 
let car1= new myCar('ford','mustang',2309,25462);
let car2= new myCar('ferrari','gt neo',3249,26429);