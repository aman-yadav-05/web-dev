console.log('javaScript is linked with html')
let regular=/aman/; //this is a regular expression
let global=/aman/g;
let insensitive=/aman/i;

let string=`this is to aman check all the function and their working with word AmAn and aman`;

let exec=regular.exec(string);
let globalExec=global.exec(string);
console.log(exec.index)
console.log(globalExec.input)

let insense=insensitive.exec(string);
console.log(insense)

let result=insensitive.test(string);
console.log(result)

let match=string.match(global);
console.log(match)

let replace=string.replace(global,'AMAN');
console.log(replace)

let search=string.search(global)
console.log(search)