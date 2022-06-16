console.log("callback function practice. connnected.");

// the function without a name is known as anonymous function
setTimeout(() => {
    console.log("we are inside the setTimeout and is ran after 2 sec.")
}, 2000);

let func1=function(){
    console.log("we are in the func1.")
}

setTimeout(func1, 1000);