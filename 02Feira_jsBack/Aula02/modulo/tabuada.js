/*************************************************
 * Objetivo: Realizar o calculo de uma tabuada
 * Autor: Eu (Octavio)
 * Data: 07/03/2023
 * Versão: 1.0
 * 
 *************************************************/

//Gerar a tabuada de um numero (tipo de Função de callback)
const calcularTabuada = function(numeroTabuada){

    //Entradas
    let tabuada = numeroTabuada;
    let status;
    let cont= 0;

    //Processamento
    if(tabuada == ""){
        status = false;
    }else if(isNaN(tabuada)){
        status = false;
    }else if(tabuada == 0){
        status = false;
    }else if(tabuada == null){
        status = false;
    }else{
        //While
        while(cont <= 10){
            resultado = tabuada * cont;
            console.log(tabuada + "X" + cont + " = " + resultado);
            cont+=1;
        }
        status = true;
    }

    //Saidas
    return status;

};

//Para acessar uma função em outra arquivo, é necessario fazer o exports da função
module.exports = {
    calcularTabuada
};

//