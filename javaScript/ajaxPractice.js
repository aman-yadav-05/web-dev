console.log("javaScript is connected.");

//everything done but unable to append the list. 

let vegetableBtn=document.getElementById('vegetableBtn');
vegetableBtn.addEventListener('click',listner);

function listner(){
    console.log("you have clicked the vegetable button.")
    const xhr= new XMLHttpRequest();

    xhr.open('GET','vegetable.json',true);
    xhr.onload=function(){
        console.log(this.responseText)
        if (this.status===200) {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let str="";
            let vegetableList=document.getElementById('vegetableList');
            for(key in obj){
                str += `<li>${obj.name}</li>`;
            }
            vegetableList.innerHTML=str;
        } else {
            console.error("some error occured")
        }
    }
    xhr.send();
}

let fruitBtn=document.getElementById('fruitBtn');
fruitBtn.addEventListener('click',flistner);

function flistner(){
    console.log("you have clicked the fruit button.")
    const xhr= new XMLHttpRequest();

    xhr.open('GET','fruits.json',true);
    xhr.onload=function(){
        console.log(this.responseText)
        if (this.status===200) {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let fruitstr=`<li>${obj.name}</li>`;
            let fruitList=document.getElementById('fruitList');
        
            fruitList.innerHTML= fruitstr;
        } else {
            console.error("some error occured")
        }
    }
    xhr.send();
}