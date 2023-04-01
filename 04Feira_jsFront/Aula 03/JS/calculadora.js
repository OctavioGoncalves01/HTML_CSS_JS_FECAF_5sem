/**************************************************************
 * Objetivo: Criar funções para realizar calculos matemáticos
 * Data: 15/02/2023
 * Autor: Octavio
 * Versão: 1.0
 **************************************************************/

//Função para realizar os calculos Matemáticos
//Modelo 01 de criação de função (Tradicional)
// function calcular(tipoCalculo){
//     //Recebe o argumento e converte para MAIUSCULO (toUpperCase())
//     let operacao = tipoCalculo.toUpperCase();
//     //Recebe os valores digitados nas caixas de texto no html 
//     //    (getElementById - pega o elemento pélo ID atribuido)
//     let numero1 = document.getElementById('valor1').value; 
//     let numero2 = document.getElementById('valor2').value;
//     let divResultado = document.getElementById('resultado'); 
//     let resultado;
//     let status = true;
//     let msgErro;
    
//     //Exemplo utilizando if
//     // if(operacao == 'SOMAR')
//     //     resultado = Number(numero1) + Number(numero2);
//     // else if(operacao == 'SUBTRAIR')
//     //     resultado = Number(numero1) - Number(numero2);
//     // else if(operacao == 'MULTIPLICAR')
//     //     resultado = Number(numero1) * Number(numero2);
//     // else if(operacao == 'DIVIDIR')
//     //     resultado = Number(numero1) / Number(numero2);


//     //Validação para tratar a entrada de caracteres inválido
//     // isNaN() - é uma função que valida se a variavel tem valor numerico ou não
//     if(isNaN(numero1) || isNaN(numero2)){
//         status =false
//         msgErro = "ERRO: Entrada de valores inválida, não é possível letras.\n :-("
    
//     }else{

//         //Exemplo utilizando o Switch
//         switch (operacao) {
//             case "SOMAR":
//                 resultado = Number(numero1) + Number(numero2);
//                 break;
//             case "SUBTRAIR":
//                 resultado = Number(numero1) - Number(numero2);
//                 break;
//             case "MULTIPLICAR":
//                 resultado = Number(numero1) * Number(numero2);
//                 break;
//             case "DIVIDIR":

//             //Tratamento de erro para divisão por ZERO
//                 if (Number(numero2) == 0){
//                     status = false;
//                     msgErro = "ERRO: Não é possível realizar uma divisão por ZERO. \n :-(";

                
//                 }else{
//                     resultado = Number(numero1) / Number(numero2);
//                 }
//                 break;
//             default:

//                 break;
//         }   
//     }


//     if (status){
//         // oFixed(2) - permite limitar a qtde de casas decimais    
//         divResultado.innerText = resultado.toFixed(2);


//         //Altera a cor e o tamanho da letra utilizando o css
//         divResultado.style.color = "yellow";
//         divResultado.style.fontSize = '4em';
//     }else{
//         divResultado.innerText = msgErro;
//         divResultado.style.color = "red";
//         divResultado.style.fontSize = '2em';
//     }
    

// }


//Modelo 02 de criação de função (Callback)
const calcular = function(tipoCalculo){
       //Recebe o argumento e converte para MAIUSCULO (toUpperCase())
        let operacao = tipoCalculo.toUpperCase();
        //Recebe os valores digitados nas caixas de texto no html 
        //    (getElementById - pega o elemento pélo ID atribuido)
        let numero1 = document.getElementById('valor1').value; 
        let numero2 = document.getElementById('valor2').value;
        let divResultado = document.getElementById('resultado'); 
        let resultado;
        let status = true;
        let msgErro;
        
        //Exemplo utilizando if
        // if(operacao == 'SOMAR')
        //     resultado = Number(numero1) + Number(numero2);
        // else if(operacao == 'SUBTRAIR')
        //     resultado = Number(numero1) - Number(numero2);
        // else if(operacao == 'MULTIPLICAR')
        //     resultado = Number(numero1) * Number(numero2);
        // else if(operacao == 'DIVIDIR')
        //     resultado = Number(numero1) / Number(numero2);
    
    
        //Validação para tratar a entrada de caracteres inválido
        // isNaN() - é uma função que valida se a variavel tem valor numerico ou não
        if(isNaN(numero1) || isNaN(numero2)){
            status =false
            msgErro = "ERRO: Entrada de valores inválida, não é possível letras.\n :-("
        
        }else{
    
            //Exemplo utilizando o Switch
            switch (operacao) {
                case "SOMAR":
                    resultado = SOMAR(numero1, numero2);
                    break;
                case "SUBTRAIR":
                    resultado = SUBTRAIR(numero1, numero2);
                    break;
                case "MULTIPLICAR":
                    resultado = MULTIPLICAR(numero1, numero2);
                    break;
                case "DIVIDIR":
    
                //Tratamento de erro para divisão por ZERO
                    if (Number(numero2) == 0){
                        status = false;
                        msgErro = "ERRO: Não é possível realizar uma divisão por ZERO. \n :-(";
    
                    
                    }else{
                        resultado = DIVIDIR(numero1, numero2);
                    }
                    break;
                default:
    
                    break;
            }   
        }
    
    
        if (status){
            // oFixed(2) - permite limitar a qtde de casas decimais    
            divResultado.innerText = resultado.toFixed(2);
    
    
            //Altera a cor e o tamanho da letra utilizando o css
            divResultado.style.color = "yellow";
            divResultado.style.fontSize = '4em';
        }else{
            divResultado.innerText = msgErro;
            divResultado.style.color = "red";
            divResultado.style.fontSize = '2em';
        }
        
    

} 


//Função para limpar todos os valores
function limpar(){
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '';

}


//Modelo 03 de criação de função (Arrow Function)
const SOMAR           = (valor1, valor2) => Number(valor1) + Number(valor2);
const SUBTRAIR        = (valor1, valor2) => Number(valor1) - Number(valor2);
const MULTIPLICAR     = (valor1, valor2) => Number(valor1) * Number(valor2);
const DIVIDIR         = (valor1, valor2) => Number(valor1) / Number(valor2);











