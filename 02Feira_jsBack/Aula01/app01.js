//import da biblioteca dde entrada de dados via teclado
var readline = require('readline');

//Criacao de uma interface entre o node e o terminal
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


// entradaDados.question('Digite seu nome: \n', function(nome){
//     let nomeUsuario = nome;
//     console.log('O nome do usuario é ' + nomeUsuario);
// });

//Entrada de dados para a nota 1
entradaDados.question('Digite a nota 01: ', function(nota01){
    let valor01 = nota01;

    //Entrada de dados da nota 02
    entradaDados.question('Digite a nota 02: ', function(nota02){
        let valor02 = nota02;

        //entrada de dados nota 03
        entradaDados.question('Digite a nota 03: ', function(nota03){
            let valor03 = nota03;

            entradaDados.question('Digite o valor 04: ', function(nota04){
              let valor04 = nota04;  
              let media;

              media = (Number(valor01) + Number(valor02) + Number(valor03) + Number(valor04)) / 4; 

              console.log(Number(media.toFixed(1)))
            })
        })
    })
})