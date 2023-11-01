// Seleciona os botões e as divs de personagem pelo ID
const tonyChopperButton = document.getElementById('tonyChopper');
const roronoaZoroButton = document.getElementById('roronoaZoro');
const luffyButton = document.getElementById('luffy');
const namiButton = document.getElementById('nami');
const sanjiButton = document.getElementById('sanji');

const tonyChopperDiv = document.getElementById('tonyChopperDiv');
const roronoaZoroDiv = document.getElementById('roronoaZoroDiv');
const luffyDiv = document.getElementById('luffyDiv');
const namiDiv = document.getElementById('namiDiv');
const sanjiDiv = document.getElementById('sanjiDiv');



// Adiciona ouvintes de evento de clique a cada botão
tonyChopperButton.addEventListener('click', () => {
    exibirPersonagem(tonyChopperDiv);
    adicionarAtivo(tonyChopperButton);
});

roronoaZoroButton.addEventListener('click', () => {
    exibirPersonagem(roronoaZoroDiv);
    adicionarAtivo(roronoaZoroButton);
});

luffyButton.addEventListener('click', () => {
    exibirPersonagem(luffyDiv);
    adicionarAtivo(luffyButton);

});

namiButton.addEventListener('click', () => {
    exibirPersonagem(namiDiv);
    adicionarAtivo(namiButton);
});

sanjiButton.addEventListener('click', () => {
    exibirPersonagem(sanjiDiv);
    adicionarAtivo(sanjiButton);
});

// Função para exibir uma div de personagem e ocultar as outras
function exibirPersonagem(div) {
    const todasDivsPersonagem = document.querySelectorAll('.personagem');
    
    todasDivsPersonagem.forEach(divPersonagem => {
        if (divPersonagem === div) {
            divPersonagem.style.display = 'block';
        } else {
            divPersonagem.style.display = 'none';
        }
    });
}
function adicionarAtivo(botao) {
    // Remove a classe ativo de todos os botões
    const botoes = document.querySelectorAll('.botoes .botao');
    botoes.forEach(botao => {
      botao.classList.remove('focus');
    });
  
    // Adiciona a classe ativo ao botão clicado
    botao.classList.add('focus');
  }
exibirPersonagem(luffyDiv);
adicionarAtivo(luffyButton);
