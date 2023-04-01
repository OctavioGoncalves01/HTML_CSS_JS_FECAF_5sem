/*****************************************************************
 * Objetivo: Criar funções para realizar calculos matematicos
 * Data: 15/02/23
 * Autor: Octavio Gonçalves
 * Versão 1.0 
 *****************************************************************/


//Funcao para realizar os calculos
function calcular(tipoCalculo){
    //Recebeo argumento e converte para maiusculo (toUpperCase())
    let operacao = tipoCalculo.toUpperCase();
    
    //Recebe os valores digitados nas caixas de txt do html
    //  (getElementById - pega o elemento pelo Id Atribuido)
    let number01 = document.getElementById("valor1").value;
    let number02 = document.getElementById("valor2").value;
    let resultado;
    let divResultado = document.getElementById('resultado');

    if(operacao == 'SOMAR')
        resultado = Number(number01) + Number(number02);
    else if(operacao == 'SUBTRAIR')
        resultado = Number(number01) - Number(number02);
    else if(operacao == 'MULTIPLICAR')
        resultado = Number(number01) * Number(number02);
    else if(operacao == 'DIVIDIR')
        resultado = Number(number01) / Number(number02);
    
//    alert(resultado);

    // .toFixed(x) permite limitar as casas decimais
    divResultado.innerText = resultado.toFixed(2);
}


//Para limpar todos os valores
function limpar(){
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '';
}
