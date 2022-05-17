console.log('javaScript is connected.');


// get element by id help to targett any element by it id name 

let a = document.getElementById('item1');
a.style.color = 'red';
a.innerText='<b>item no 1 is a laptop</b>' //in this we can clearly see that the b tags wont work here as we are not using the innerHTML so it willl change the text as it is.

a.innerHTML = '<b> just changed the innerhtml with the help of javaScript </b>';
//here we changed the innerhtml so we can use htmls tags also inside the ''


//in the below example we have changed the style of the element whose id is item2.
let b=document.getElementById('item2');
b.style.borderColor='purple';
b.style.borderWidth='1px';
b.innerHTML='<i>we have changed its innerhtml</i>';
b.style.borderStyle='solid';
b.style.border='2px solid grey'; //shorthand property for border
b.style.display='inline';

// we can also use the shorthand property for the border as mentioned above


// a = a.parentNode; //this will give the parent node of the selected element
// let b = document.getElementsByClassName('items');
// b = b.childNodes;
// b.style.color='brown';
a.className;

// now lets see how document.getElementsByClassName works 
let doc=document.getElementsByClassName('dummy');
doc[0].style.color='yellow';

let x=document.getElementsByClassName('item');
x[2].style.color='blue';
// as getElementsByClassName gets all the element having same classs therefore we need to specify in which element we are trying to make a change just like array indexing

//all the above selectors where the single element selectors. 
//below will be for multiple element selector

// query selector all 
var q=document.querySelectorAll('.item');
q[3].style.color='red';

// accessign elements by tagname 
let tag=document.getElementsByTagName('div');
console.log(tag)
// now if we want to change all the div with same properties we can use a for loopp 
for (let index = 0; index <tag.length; index++) {
    const element =tag[index];
    element.style.fontSize='20px';
}
// above for loop will applied in all the div present in the dom
// tag[1].style.textDecoration='underline';

console.log(doc);
console.log(a);
console.log(b);
// console.log(c);

