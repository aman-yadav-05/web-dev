console.log("javaScript is connected.");

// this will change the color of the paragraph when clicked
function change() {
    let para = document.getElementById('paragraph');
    if (para.style.color != 'white') {
        para.style.color = 'white';
    } else {
        para.style.color = 'red';
    }
}

let dog = document.getElementById("dog-pic");
function bark() {
    let sound = document.getElementById("sound");
    if(sound.innerText!=""){
        sound.innerText="";
    }
    else{
        sound.innerText="wwwwwwwwoooooooooooffffffffff!";
        sound.style.fontStyle='bold';
    }
}
// let bark = function () { sound.textContent = "wooooooooof! wwwoooooooof." };
// dog.addEventListener("click",bark);