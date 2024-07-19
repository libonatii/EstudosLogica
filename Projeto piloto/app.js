alert('Olá, mundo. Seja bem-vindo ao meu joguinho.');
let numeroSecreto = parseInt(Math.random() * 55 + 1);
let chute;
let tentativas = 0;

// repetição para continuar o jogo
while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 55.'));
    tentativas++;
    
    // condição pra diquinhas
    if (chute > numeroSecreto) {
        alert(`Hmmm, tu errou! O número secreto é um pouco menor que esse aí! Chute de número ${chute}. ${tentativas} tentativas e contando.`);
    } else if (chute < numeroSecreto) {
        alert(`Tenta de novo, o número secreto é maior que isso. Chute de número ${chute}. ${tentativas} tentativas e contando.`);
    }
}

// Mensagem de parabéns
if (tentativas > 1) {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}! Você ganhou o jogo com ${tentativas} tentativas!`);
} else {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}! Você ganhou o jogo com ${tentativas} tentativa!`);
} 