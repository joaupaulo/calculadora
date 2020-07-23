var displaynumb = "";
var numero = "";
var fatores= [undefined,undefined,undefined];
var resultado = undefined;
function pressione(num) {
    numero = numero.concat(num.innerHTML);
    mostrardisplay(num.innerHTML)
}


function limparmemoria() {
    numero = ""
    console.log(numero);
}

function mostrardisplay(conteudo) {
    displaynumb = displaynumb.concat(conteudo);
    var tela = document.getElementById('displaycont');
tela.value = displaynumb

}

function limpardisplay() {
    var displaynumb=""
    var tela = document.getElementById('displaycont');
tela.value = displaynumb

    
}



function limpartd() {
    limparmemoria()
    limpardisplay()
}


function presseioneop(op) {
  fatores[0] = numero
  fatores[1]=op.innerHTML
  mostrardisplay(op.innerHTML)
  numeros=""
}


function pressresult() {
    termos[2] = numeros;
     resultado = number(termos[0]) + number(termos[2]);
     limpardisplay()
     mostrardisplay(resultado)
    
}