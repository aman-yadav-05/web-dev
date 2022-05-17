console.log("java script is connected.")

// object literal
let employee = {
    gender: true,
    slogan: function () {
        console.log(`Hello everyone, I am ${this.name}.`);
    }
}

//creating object for literal
let aman = Object.create(employee);
aman.name = "Aman";
aman.gender = true;
aman.slogan();
// console.log(aman);

let garima = Object.create(employee);
garima.name = "Garima";
garima.gender = false;
garima.slogan();
// console.log(garima);


//by constructor
function food(Foodname, quantity, ingredients) {
    this.Foodname = Foodname;
    this.quantity = quantity;
    this.ingredients = ingredients;
}
cake.prototype.info=function(){
   return `name of food is ${this.Foodname}, quantity:${this.quantity}`;
}
//creating an object from this function
let f1=new food(`pizza`,2,`bread,cheese,olive`)
console.log(f1)
// f1.info();

//let inherit a food called cake from food.

function cake(Foodname,quantity,ingredients,colours,size){
    food.call(this,Foodname,quantity,ingredients);
    this.colours=colours;
    this.size=size;
}

let c1= new cake(`chocolate cake`,2,`eggs,bread,cream,decoration`,`black`,`medium`);
c1.info();
cake.prototype.constructor=cake;
console.log(c1)