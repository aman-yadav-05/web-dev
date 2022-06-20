console.log("async and await js is connected to html.")
// async function return promises
async function aman(){
    console.log("inside async function aman");
    let response= await fetch(`https://api.github.com/users`);
    //await runs in background and the other piece of code is executed while getting things done just like asynchronous programming.
    console.log('before response')
    let users = await response.json();
    console.log('user resolved')
    return users;
}

console.log("before calling aman function (async)");
let a = aman();
console.log(a)
console.log("after calling aman")
a.then((data)=>{console.log(data)})
console.log("after calling aman and also after resolvind with a.then, end  of code.")