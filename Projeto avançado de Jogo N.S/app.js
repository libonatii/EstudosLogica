// exibe texto na tela
textoNaTela("h1", 'Número Secreto');
textoNaTela("p", 'Escolha um número de 1 a 55!');

// Gera o número secreto uma vez
let numeroSecreto = gerarNumeroRandom(); 

// Variável para contar o número de tentativas
let tentativas = 0; 



// função com parâmetros para aparecer texto na tela
function textoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

// função que verifica chute 
function verificarChute() {
    console.log('O botão chute foi clicado!');
    let chute = parseInt(document.querySelector('input').value);
    // Incrementa o contador de tentativas
    tentativas++; 
    limpar();
    

    if (chute > numeroSecreto) {
        alert('Hmm, acho que você chutou um pouco alto demais.');
    } else if (chute < numeroSecreto) {
        alert('Chuta um pouco mais alto.');
    } else if (chute == numeroSecreto) {
        let mensagemFinal = `Parabéns, você achou o número secreto com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}. :)`;
        textoNaTela('h1', 'Você acertou!');
        textoNaTela('p', mensagemFinal);
        alert('EITA NOISSS!!!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        reiniciarJogo();

    }
}


// função que limpa chute errado
function limpar() {
    chute = document.querySelector('input');
    chute.value = '';
}
// função que gera número aleatório
function gerarNumeroRandom() {
    return parseInt(Math.random() * 55 + 1);
}

function reiniciarJogo() {

}

// Aqui você deve ligar a função `verificarChute` ao evento de clique do botão
document.querySelector('button').addEventListener('click', verificarChute);
