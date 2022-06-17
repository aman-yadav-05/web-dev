console.log("fetch api javascript is connected.");

function getdata() {
    url='ajaxRevision.json'
    fetch(url).then(response=>response.json()).then(data=>console.log(data))
};

getdata();

function postData(){
    url='https://dummy.restapiexample.com/api/v1/create';
    data=`	{"name":"test","salary":"123","age":"23"}`;
    parameter={
        method:'post',
        Headers:{
            'Content-type':'application/json'
        },
        body:data
    }
    fetch(url,parameter).then(response=>response.json()).then(data=>console.log(data));
}

postData()