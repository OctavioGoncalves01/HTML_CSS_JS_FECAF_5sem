//Importe dos arquivos e funções
var readline = require("readline");
var matetematica = require("./modulo/tabuada.js");

        //nome das funções que vão ser usadas
//const {calcularTabuada} = require("./modulo/tabuada.js");

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

//função de callback
entradaDados.question("Digite uma tabuada: ", function(numero){
    let tabuada = numero;
    matetematica.calcularTabuada(tabuada);

});
