var displaynumb = "";
var numero = "";
var fatores= [undefined,undefined,undefined];
var resultado = undefined;


function pressione(num) {
    numero = numero.concat(num.innerHTML);
    mostrard(num.innerHTML);
}


function pressoperador(op) {
   
  
    fatores[0]=numero;
    fatores[1]=op.innerHTML;
    mostrard(op.innerHTML);
    numero="";

    
}


function pressresultado()  { 
fatores[2]=numero;
switch (fatores[1]) {
    case"+":
        resultado = Number(fatores[0]) + Number(fatores[2]);
        break;
case"-":
resultado = Number(fatores[0]) - Number(fatores[2]);
break;
case"*":
resultado = Number(fatores[0]) * Number(fatores[2]);
break;
case"/":
resultado = Number(fatores[0]) * Number(fatores[2]);
break;




}


limpard()
mostrard(resultado);   



}

    




function clearmemory() {
    numero = "";
    
}


function limpard() {
    displaynumb="";
    var tela = document.getElementById("displaycont");
    tela.value = displaynumb;
    
}


function  limparg() {
    clearmemory()   
    limpard()
}

function mostrard(conteudo) {
    displaynumb = displaynumb.concat(conteudo);
    var tela = document.getElementById("displaycont");
    tela.value = displaynumb; 
}