// Exibe a mensagem inicial na tela
function mensagemInicial() {
    textoNaTela("h1", 'Número Secreto');
    textoNaTela("p", 'Escolha um número de 1 a 55!');
}

// Gera o número secreto uma vez
let numeroSecreto = gerarNumeroRandom(); 

// Variável para contar o número de tentativas
let tentativas = 0; 

// Função com parâmetros para aparecer texto na tela
function textoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

// Função que verifica chute 
function verificarChute() {
    console.log('O botão chute foi clicado!');
    let chute = parseInt(document.querySelector('.container__input').value);
    tentativas++; 
    limpar();
    
    if (chute > numeroSecreto) {
        alert('Hmm, acho que você chutou um pouco alto demais.');
    } else if (chute < numeroSecreto) {
        alert('Chuta um pouco mais alto.');
    } else if (chute === numeroSecreto) {
        let mensagemFinal = `Parabéns, você achou o número secreto com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}. :)`;
        textoNaTela('h1', 'Você acertou!');
        textoNaTela('p', mensagemFinal);
        alert('EITA NOISSS!!!');
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar
    }
}

// Função que limpa o chute errado
function limpar() {
    let chute = document.querySelector('.container__input');
    chute.value = '';
}

// Função que gera número aleatório
function gerarNumeroRandom() {
    return Math.floor(Math.random() * 55) + 1; // arredonda para baixo
}

// Função que reinicia o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroRandom();
    limpar();
    tentativas = 0;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão de reiniciar novamente
}

// Inicializa o jogo na primeira vez
mensagemInicial();

// Liga a função verificarChute ao botão de chute
document.querySelector('.container__botao').addEventListener('click', verificarChute);

// Liga a função reiniciarJogo ao botão de reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);
