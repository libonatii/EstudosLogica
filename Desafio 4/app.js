let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificaConsole() {
    console.log('O botão Console foi clicado!');
}

function verificaAlert() {
    alert('Eu amo JS!');
}
    
function verificaPrompt() {
    let cidade = prompt('Em qual cidade do Brasil você mora?');
    alert(`Estive no ${cidade} e lembrei de você!`);
}

function verificaSoma() {
    alert('Vou fazer a soma dos dois números que você disser');
    alert('Vamos lá?');
    let soma1 = parseInt(prompt('Escreva o primeiro número'));
    let soma2 = parseInt(prompt('Escreva agora o segundo'));
    let total = soma1 + soma2; 
    alert(`A soma dos dois números que você indicou é ${total}!`)
}