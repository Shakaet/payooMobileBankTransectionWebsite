// console.log("login")


//step1: add event
document.getElementById("btn").addEventListener("click",function(event){
    
    // step2: prevent default behavior
   event.preventDefault();  // eta dara website reload howa ke prevent kore
   // console.log("hello")

   //get the text from input field and pin number

   let input_text=document.getElementById("text").value
   // console.log(input_text)

   let input_pin=document.getElementById("pin").value
   // console.log(input_pin)

   if(input_text==="0" && input_pin==="1"){

       console.log("You Are Succesfully login")

       window.location.href="./home.html"


   }
   else{
       alert("You Are give wrong number or pin")
   }



})