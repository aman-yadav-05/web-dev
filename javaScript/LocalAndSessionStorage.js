console.log("javaScript is connected.")

//local storage are stored even after they are commented. and sessionstorage are cleared after the session ends .
localStorage.setItem('name','Aman');
localStorage.setItem('name1','Nilima');
localStorage.setItem('name2','Prerna');
localStorage.setItem('date of birth','05-09-2002');

// localStorage.setItem('key','value')
// to get item from local storage use localStorage.getItem('name')
 let getName=localStorage.getItem('name');

// we cant store array as in local storage in the form of array because this will store array as string  so we need to convert it into JSON.stringify first and at the time of retrievel we need to parse it 

let nameArray = ['aman','niilma','prerna','ebenezer','abhay']
localStorage.setItem('array',JSON.stringify(nameArray))


// lets try to retrieve it 
// let retrieve=localStorage.getItem(JSON.parse(nameArray))
let retrieve=JSON.parse(localStorage.getItem('array'))

// to clearr the local storage we have clear funcm 
localStorage.clear()
console.log(retrieve)
//  console.log(getName)
sessionStorage.setItem('name','Aman');
sessionStorage.setItem('name1','Nilima');
sessionStorage.setItem('name2','Prerna');
sessionStorage.setItem('date of birth','05-09-2002');

// all the things same as local storage 