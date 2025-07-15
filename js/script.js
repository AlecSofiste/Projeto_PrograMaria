document.getElementById("sendButton").addEventListener("click", validaForm)

function validaForm(){

    if(document.getElementById("userName").value != "" &&
       document.getElementById("userEmail").value != "" &&
       document.getElementById("userTelefone").value != "")
    {
        alert("Prontinho! Você receberá as novidades por e-mail.")
    }else{
        alert("Por favor, preencha os campos nome e email!")
    }
}