console.log("callfunction js is connected!")

const subjects = [
    { name: "computer system architecture", teacher: "pushplata pujari" },
    { name: "design and analysis of algorithm", teacher: "abhisek patel" }
]

function addsub(subject,callback) {
    setTimeout(() => {
        subjects.push(subject);
        callback();
        console.log("subject is added.")
    }, 5000);
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

let newSubject = { name: "javaScript", teacher: "NA" }
addsub(newSubject,getList);