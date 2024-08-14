// função com parâmetros para aparecer texto na tela
function textoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

textoNaTela("h1", 'Número Secreto');
textoNaTela("p", 'Escolha um número de 1 a 55!');

let numeroSecreto = gerarNumeroRandom(); // Gera o número secreto uma vez

// função que verifica chute 
function verificarChute() {
    console.log('O botão chute foi clicado!');
    let chute = document.querySelector('input').value;

    if (chute > numeroSecreto) {
        alert('Hmm, acho que você chutou um pouco alto demais.');
    } else if (chute < numeroSecreto) {
        alert('Chuta um pouco mais alto.');
    } else if (chute == numeroSecreto) {
        textoNaTela('h1', 'Você acertou!');
        textoNaTela('p', 'Parabéns, você achou o número secreto. :)');
        alert('EITA NOISSS!!!');
    }
}

// função que gera número aleatório
function gerarNumeroRandom() {
    return parseInt(Math.random() * 55 + 1);
}

// Aqui você deve ligar a função `verificarChute` ao evento de clique do botão
document.querySelector('button').addEventListener('click', verificarChute);
