

document.getElementById("btn-transfer-money").addEventListener("click",function(event){


    event.preventDefault()
    
    let available=getTextFieldValueById("Available")
    let input_text=getInputFieldValueById("text-transfer")
    let input_pin=getInputFieldValueById("pin-transfer")

    if(isNaN(input_text)){

        alert("it is not a number")

        return;
    }


   if(input_pin === 1234){

    if(available>=input_text){

        let transfer = available-input_text

        document.getElementById("Available").innerText=transfer


        let div=document.createElement("div")

        div.classList.add("bg-yellow-300")
        div.innerHTML=`
                       <h2>Transfer Money</h2>
                       <p> Transfer Money = ${input_text} , Available Balaced :${transfer}
                       
                       
                       `
                       document.getElementById("transection-his").appendChild(div)
    }
    else{
        alert("you do not have sufficient Balanced")
       }

   }
   




})