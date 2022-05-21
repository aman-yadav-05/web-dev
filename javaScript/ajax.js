console.log("javaScript connected!");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonCLickHandler)

function buttonCLickHandler() {
    console.log("you have clicked the fetchbtn")
    //instantiate(create) an xhr object
    let xhr = new XMLHttpRequest();

    //open the object here true is for asynchronous; get-> getting the data post-> posting the data  if we used false then the last conosle that is in line 32 will be executed last instead of earlietr
    //USE THIS FOR GET request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //USE THIS FOR POST request
    xhr.open('POST', '	https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type','application/json');

    //onload and progress can be used for spinners for giving the feel of loading something for the user.
    //what to do on progress its up to you whether youuse or not
    xhr.onprogress = function () {
        console.log("on progress")
    }

    //what to do when response is ready , we can also check status in onload if file is not found or found
    xhr.onload = function () {
        //checking status 
        if (this.status === 200) {   //200 is for resoponse ok in http status
            console.log(this.responseText)
        } else {
            console.error("some error occured")
        }
    }

    //we need to send the request also. 
     params=`{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log("we are done.")






}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click',popHandler);

function popHandler(){
    console.log("you have clicked the pop button")

    //instantiate the xhr object
    let xhr=new XMLHttpRequest();

    //open the object 
    xhr.open('GET','	https://dummy.restapiexample.com/api/v1/employees',true);

    xhr.onload=function(){
        if (this.status === 200) {
            let obj=JSON.parse(this.responseText)
            console.log(obj)
        } else {
            console.error("some error occured")
        }
    }

    xhr.send();
    console.log("we are done")
}