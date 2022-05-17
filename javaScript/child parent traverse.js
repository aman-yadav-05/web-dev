console.log("javaScript is connected.");

// 1.childnodes-includes all the stuffs in html like commnets new line while checking the nodelist.
let no = document.querySelector('.container');
// no=no.childNodes;
// console.log(no[1]); //it will give the 2nd child of the node. as indexing start from 0
// console.log(no); //this will give all the child node list.

// no=no.children; // this will only give the elements in html no comments and text will be included.
// console.log(no[1].children[0].children)


// nodeName will return thename of the node.no. 
// no=no.children[1].children[0].nodeName;

// nodetype will returnt the type of node. 
// list of nodetype-
// 1 Element
// 2 attribute
// 3 text node 
// 8 Comment
// 9 document
// 10 docType

// no= no.nodeType;


// no=no.firstChild; // this will give the firstChild node of the container i.e. text
// no=no.firstElementChild;  we'll get div.bio because it is the first element in the contaienr

// we can also do the same for lastChild and lastElementChild

// no=no.nextElementSibling; this will return the next element after the container
no=no.nextSibling
console.log(no)


// lets add some css through JS 
let head=document.querySelector('h1');
head.style.textAlign='center';
head.style.textDecoration='underline'
head.style.color='blue'

let para=document.querySelector('p')
para.style.fontSize='18px'
let bor=document.querySelector('.bio')
bor.style.border='1px solid red'
para.style.margin='5px 10px'
para.style.textAlign='justify'

let body=document.querySelector('body')
// body.style.textAlign='center'

let list=document.querySelector('li')
for (let index = 0; index < list.length; index++) {
    let element = list[index];
    element.style.listStyle='none';
    
}
// list.style.listStyle='none'
