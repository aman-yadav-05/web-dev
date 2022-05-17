console.log("connected!");

let a="aman";

let z = document.links;
console.log(z);
Array.from(z).forEach(function(element) {
    if (String(element.href).includes(a)) {
        console.log(element.href);
    }
})
// Array.from(z).forEach(function(element){
//     if (String(element).includes(b)){
//         console.log(element); // also we can do console.log(element.href)
//     };
// });