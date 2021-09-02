var co =0;
var masterValor = document.getElementById("meter-value");
var contar = function(){
    masterValor.value = co;
    co++;
    if (co ===100){
        clearInterval(intervalo);
    }
}

function  cargarMaster(){
   var intervalo = setInterval(contar, 30);  
}

function onclickBtnForm(){
    const inputName = document.getElementById("in");
    const inputCountry = document.getElementById("inn");
    const inputEmail = document.getElementById("ice");
    const inputDate = document.getElementById("idd");
    
    document.getElementById("title-saludo").innerText = `Hola ${inputName.value} un placer conocerte!`;
    cargarMaster();
}



