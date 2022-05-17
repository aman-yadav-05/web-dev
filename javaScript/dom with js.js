console.log("dom with js connected!")
let a = document;

// document.all will give you all informatino about the html colletion as html is tree like .so the output will also be in hierarchy. 
a=document.forms;
// document.form will tell you about how many forms you have in your site . 
a=document.links;
// document.links this will give you all the links present in the HTMLAllCollection. 
console.log(a)