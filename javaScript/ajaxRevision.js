console.log("ajax revision javaScript is connected.");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', clickHandler);

function clickHandler() {
    console.log("fetchBtn clicked!")

    const xhr = new XMLHttpRequest();
    xhr.open('Get', 'ajaxRevision.json', true);
    xhr.onprogress = function () {
        console.log("Request On Progress")
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let str = "";
            let list = document.getElementById("list");
            for (key in obj) {
                str += `<li>${obj[key].name}</li>
                        <ul>
                        <li>Passanger Capacity:${obj[key].capacity}</li>
                        
                        </ul>`;
            }
            list.innerHTML = str;
        } else {
            console.error("some error occured!")
        }
        console.log("fetching done..")
    }
    xhr.send();
}


// post data failed 
// let send = document.getElementById('send');
// send.addEventListener('click', sendClick);

// function sendClick() {
//     console.log("send button clicked.");

//     const shr = new XMLHttpRequest();
//     shr.open('post', 'ajaxRevision.json', true);
//     shr.getResponseHeader('Content-type', 'application/json; charset=utf-8');
//     shr.onprogress = function () { console.log("sending data is on progress."); }
//     shr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText)
//             console.log("data sent.")
//         } else {
//             console.error("some errror occured")
//         }

//     }

//     let param = `{"name":"Aman Airways","capacity":41564}`;
//     shr.send(param);
// }