console.log("this is to check wheather it is connected to the html file or not.")

function minMax(a, b) {
    if (a > b) {
        console.log(a + " is greater than " + b)
    } else {
        console.log(b + " is greater than " + a)
    }
}
minMax(12, 23);
minMax(24, 23);

// the above example doesn't return any value

function multiplication(a, b) {
    let product = a * b;
    return product;
}
let a;
a = multiplication(10, 23);
console.log(a);

// this can also be written as 
let b = multiplication(23, 34);
console.log(b);

let age=prompt("What is your age?");
if (age>=18) {
    console.log("You are eligible for the driving license.")
    
} else {
    console.log("You are not eligible for applying driving license.")
}