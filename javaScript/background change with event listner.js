console.log("javaScript is connected.")

document.querySelector('body'),addEventListener('mouseover',function(e){
    
    a=0;
    b=255;
    // let rand=a+(b-a)*Math.round(Math.random());use round outside the whole equation.
    let rand=Math.round(a+(b-a)*Math.random());
    console.log('the random number between 10 and 20 is '+rand);
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${rand})`
})