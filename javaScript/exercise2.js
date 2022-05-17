console.log("javaScript connected.");

let div = document.createElement("div");
div.className = "editablediv";
// div.placeholder='click on this to edit the note.'
div.innerHTML = "<div>click this to edit the note.</div>";
div.style.width = "550px";
div.style.height = "150px";
div.style.border = "1px solid black";
div.style.fontSize = "36px";
div.style.opacity = "0.5";
div.style.textAlign = "center";
div.style.alignItems = "center";
div.style.display = "flex";
div.style.justifyContent = "center";
document.body.appendChild(div);

let getText = document.getElementsByClassName("editablediv");
getText = addEventListener("dblclick", click);
let input = document.createElement("input");
function click() {
	input.className = "inputtext";
	input.type = "text";
	// input.innerText = '';
	div.innerHTML = "";
	input.style.width = "550px";
	input.style.height = "150px";
	input.style.border = "1px solid black";
	input.style.fontSize = "36px";
	input.style.textAlign = "start";
	input.style.alignItems = "baseline";
	input.style.display = "inline";
	input.style.opacity = "1";
	div.appendChild(input);
}

let getValue = document.getElementsByClassName("inputtext");
getValue = addEventListener("click", out);
function out() {
	let getInputValue = input.value;
	localStorage.setItem("data entered", getInputValue);
}
