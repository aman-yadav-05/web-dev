console.log("the script is attached to html");
function toggle() {
    let btn=document.getElementById('btn');
    let para=document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display='none';
    } else {
        para.style.display='block';
    }
}
let para=document.getElementById('para');
para.addEventListener('mouseover',function run() {
    console.log("mouse inside the paragraph");
});
// let para=document.getElementById('para');
para.addEventListener('mouseout',function run() {
    console.log("mouse outside the paragraph");
});