

// document.getElementById("addMoney").addEventListener("click",function(){

//     document.getElementById("add_i").classList.remove("hidden")
//     document.getElementById("cash_i").classList.add("hidden")
//     document.getElementById("tran_i").classList.add("hidden")
// })

// document.getElementById("cashOut").addEventListener("click",function(){

//     document.getElementById("cash_i").classList.remove("hidden")
//     document.getElementById("add_i").classList.add("hidden")
//     document.getElementById("tran_i").classList.add("hidden")

// })

// document.getElementById("transection").addEventListener("click",function(){

//     document.getElementById("tran_i").classList.remove("hidden")
//     document.getElementById("add_i").classList.add("hidden")
//     document.getElementById("cash_i").classList.add("hidden")

// })

document.getElementById("btn-add-money").addEventListener("click",function(event){

    event.preventDefault()
    
    let available=getTextFieldValueById("Available")
    let input_text=getInputFieldValueById("text-add")
    let input_pin=getInputFieldValueById("pin-add")

    if(isNaN(input_text)){

        alert("it is not a number")

        return;
    }


    if(input_pin===1234){

        

        let add=input_text+available
        document.getElementById('Available').innerText=add

        // create p for transection

        let p=document.createElement("p")
        p.classList.add("bg-yellow-300")
        p.innerText =` Added : ${input_text} , New Balanced = ${add} `
        console.log(p)

        //append

        document.getElementById('transection-his').appendChild(p)

    }
    else{

        alert ("you cant add money")
    }

})




