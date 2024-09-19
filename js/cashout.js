

document.getElementById("btn-del-money").addEventListener("click",function(event){

    event.preventDefault()
    
    let available=getTextFieldValueById("Available")
    let input_text=getInputFieldValueById("text-del")
    let input_pin=getInputFieldValueById("pin-del")

    
    if(isNaN(input_text)){

        alert("it is not a number")

        return;
    }


    if(input_pin===1234){

        if(available>=input_text){
            let min=available-input_text
            document.getElementById('Available').innerText=min


            // create element

            let div=document.createElement("div")
               div.classList.add('bg-yellow-300')
            div.innerHTML =` 
                  <h2> Cash Out  </h2>
                  <p> Cashout :${input_text} Balanced= ${min}  </p>       
            
            `

            document.getElementById("transection-his").appendChild(div)

        }
        else{

            alert ("you cant cashout money")
        }

       

    }
    

})