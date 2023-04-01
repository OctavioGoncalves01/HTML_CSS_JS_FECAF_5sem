/***************************************************************
 * Objetivo: criar funções para realizar calculos matemáticos 
 * Data: 15/03/2023
 * Autor: Lucas & Octavio
 *Versão: 1.1
 ***************************************************************/

var numero1;
var conta;

const limpar = function()
{
    document.getElementById('valor').value = "";
    document.getElementById('resultado').innerText = ""; 
};

const validar = function(numero)
{
    let status;
    if(isNaN(numero))
        status = false;
    return status;    
};

const SOMAR       = (valor1, valor2) => Number(valor1) + Number (valor2);
const SUBTRAIR    = (valor1, valor2) => Number(valor1) - Number (valor2);
const MULTIPLICAR = (valor1, valor2) => Number(valor1) * Number (valor2);
const DIVIDIR     = (valor1, valor2) => Number(valor1) / Number (valor2);

const calcular = function(tipoCalculo)
{
    let operacao = tipoCalculo.toUpperCase();
    numero1 = document.getElementById("valor").value;
    let status = true;

    if(isNaN(numero1))
    {
        status = false;
    }else
    {
        switch (operacao)
        {
            case "SOMAR":
                limpar();
                conta = operacao;
                break;
            case "SUBTRAIR":
                limpar();
                conta = operacao; 
                break;
            case "MULTIPLICAR":
                limpar();
                conta = operacao; 
                break;
            case "DIVIDIR":
                limpar();
                conta = operacao; 
                break;
            default:
                break;
        }
    }
    return status;
};

const resultadoConta = function()
{
    let resposta = document.getElementById("resultado");
    let resultado;
    operacao = conta;
    numero2 = document.getElementById("valor").value;
    let status = true;

    if(isNaN(numero1) || isNaN(numero2))
    {
        status = false;
        msgErro = "Erro: Entrada de valores inválidos."
    }else
    {
        switch (operacao)
        {
            case "SOMAR":
                resultado = SOMAR (numero1, numero2)
                break;
            case "SUBTRAIR":
                resultado = SUBTRAIR (numero1, numero2)      
                break;
            case "MULTIPLICAR":
                resultado = MULTIPLICAR (numero1, numero2)     
                break;
            case "DIVIDIR":
//              Tratamento de erro para a divisão por zero
                if(Number (numero2) == 0)
                {
                    status = false;
                    msgErro = "Erro: não é possivel realizar uma divisão por 0"
                }else
                    resultado = DIVIDIR (numero1, numero2)       
            
                break;
            default:
                break;
        }
    }

    if(status)
    {
        resposta.innerText = resultado.toFixed(2);
        resposta.style.color = "white";
        resposta.style.fontSize = "2em";
    }
    else
    {
        resposta.innerText = msgErro;
        resposta.style.color = "red";
    }
    
};