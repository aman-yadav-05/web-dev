console.log("script successfully connected.");
// lets see type conversion first

function displayTime() {
    time = new Date();
    // console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);

let digit = 78;
console.log(digit, typeof digit);

// let's convert the above number into a string
digit=String(digit);
console.log(digit,typeof digit);

// also we can change the date object into a string let's see 
let date= new Date();
console.log(date,typeof date);

date=String(date);
console.log(date,typeof date);

// now let's convert string into number using number()
let str="23544543";
console.log(str, typeof str);

str=Number(str);
console.log(str,typeof str);

// we can also do the same thing by toString function
// if we try to convert any other string other than number inside it or try to convert array it will give error NAN (not a number)
digit=234.542;
// we can also use tofixed function to get a fixed decimal values
console.log(digit.toFixed(2));


// now let's understand what is coercion.
let mystr='234'
let num=32;
// this wont give outpt as 266;
// instead it will concatenate both and treat num as string 
console.log(mystr+num)