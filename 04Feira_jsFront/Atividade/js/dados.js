var estados = [ 'SP', 'AC', 'RJ', 'BA', 'CE', 'MG', 'GO', 'SC', 'SE', 'TO', 'RR',
'RO', 'RS', 'RN', 'PI', 'PE', 'PR', 'PB', 'PA', 'MT', 'MS', 'MA',
'ES', 'DF', 'AM', 'AP', 'AL' 
];

//Cria uma variaveis para guardar o id do botao e select
var botao = document.getElementById('add');
var criarSelect = document.getElementById('slcEst');

//função para listar os nomes dos estados
const criarEstados = function(){
    let nomeEstados;
    let criarOptions = document.createElement('option');

    estados.forEach(function(item){
        criarOptions = document.createElement('option');
        criarSelect.appendChild(criarOptions);
        nomeEstados = document.createTextNode(item);
        criarOptions.appendChild(nomeEstados);
       
    });
};

//quando o botao é clicado adicionado os nomes dos estados no select 
botao.addEventListener('click', function(){criarEstados();});