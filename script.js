var displaynumb = "";
var numero = "";
var fatores= [undefined,undefined,undefined];
var resultado = undefined;


function pressione(num) {
    numero = numero.concat(num.innerHTML);
    mostrard(num.innerHTML);
}


function pressoperador(op) {
   
  if (fatores[1]==undefined) {
    fatores[0]=numero;
    fatores[1]=op.innerHTML;
    mostrard(op.innerHTML);
    numero="";
  }
    

    
}


function pressresultado()  { 

if(fatores[0] != undefined && fatores[1] != undefined && numero!= "") {
    fatores[2]=numero;
 var salvarresult;

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

salvarresult = resultado;
limpard()
mostrard(resultado);  
clearmemory()
numero = resultado.toString();

}

}

    




function clearmemory() {
    fatores= [undefined,undefined,undefined];
    resultado = undefined;
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