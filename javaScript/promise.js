console.log("promise javascript is successfully connected!");
// promises can be used instead of callback function 

// the below code is from callBackFunction.js 

const subjects = [
    { name: "computer system architecture", teacher: "pushplata pujari" },
    { name: "design and analysis of algorithm", teacher: "abhisek patel" }
]

function addsub(subject) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            subjects.push(subject);
            // callback();
            error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
            console.log("subject is added.")
        }, 5000);
    })
}

function getList() {
    setTimeout(() => {
        let string = "";
        subjects.forEach(function (subject) {
            string += `<li>${subject.name} taught by ${subject.teacher}.</li>`;
        })
        document.getElementById("list").innerHTML = string;
        console.log("student have been fetched")
    }, 1000);
}

let newSubject = { name: "javaScript", teacher: "NA" };
let newSubject2 = { name: "partial diffrential equation", teacher: "ds singh" };
addsub(newSubject);
addsub(newSubject2).then(getList).catch(function () {
    conosle.log("some error occured.")
});


// the function inside the then is resolve function and the function inside the catch is reject function

// then(resolve) , catch(reject )
