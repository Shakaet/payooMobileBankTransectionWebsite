

function getInputFieldValueById(value){

    let result=document.getElementById(value).value

    let result_int=Number(result)

    return result_int
}

function getTextFieldValueById(value){

    let result=document.getElementById(value).innerText

    let result_int=Number(result)

    return result_int
}

function show(id){
  // all hides
    document.getElementById("add_i").classList.add("hidden")
    document.getElementById("cash_i").classList.add("hidden")
    document.getElementById("tran_i").classList.add("hidden")
    // open which i call
    document.getElementById(id).classList.remove("hidden")
}