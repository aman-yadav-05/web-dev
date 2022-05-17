console.log("javaScript is connected!")

// creating an element with js 
let create = document.createElement('li');
create.className = 'listelem';
create.id = 'last';
create.setAttribute = ('title', 'list element');

let text = document.createTextNode('this is the text node i inserted in the li with help of js.');
let unorder = document.querySelector('ul');
unorder.appendChild(create);
create.appendChild(text);

console.log(create);

//replacing
let repl = document.createElement('li');

repl.className = 'subHead';
repl.innerHTML = '<b>this is replaced </b>';

create.replaceWith(repl, document.getElementsByTagName('li'))
console.log(repl)

// we can do this with one more method 
let replace = document.createElement('h3');
replace.id = 'replace';

let textnode = document.createTextNode('this node is createTextNode and it is replaced with first child of ul i.e. this');
replace.appendChild(textnode);

let r = document.querySelector('li');
r.replaceWith(replace);



// removing
let rem = document.querySelector('ul')
// here is will be removed as it is the first child of ul 
rem.removeChild(document.querySelector('li'))


// quick quiz
let quiz = document.createElement('h1');
quiz.className = 'quiz'
quiz.innerHTML = '<b>code with harry</B'
quiz.href = 'https://www.codewithharry.com'

let parent = document.querySelector('ul.list')
parent.appendChild(quiz)

let link = document.createElement('a')
link.innerText = 'go to codeWithHarry'
link.style.fontWeight = 'bold'
link.style.textDecoration = 'none'
link.href = 'https://www.codewithharry.com'
parent.appendChild(link)