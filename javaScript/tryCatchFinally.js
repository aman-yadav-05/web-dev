console.log("javaSCript is connected. to html")
try {
    console.log('we use try- catch block to ensure that code runs smoothly even after getting an error the error which will be caught will be outputed as text form not as in error form.')
    Animation(); //this is an error 
    
} catch (error) {
    console.log("this is error caught by try-catch block.");
    // we can also check the type and message of error 
    console.log(error.name)
    console.log(error.message)
}finally{
    console.log("In the finally block the code will always run whether their is an error caught by catch block or not. ")
}