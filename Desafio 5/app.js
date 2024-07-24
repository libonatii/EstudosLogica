function Saudacoes() {
    alert('Olá, mundo.');
    console.log('Olá, mundo.');
}

function exibicaoNome(nome) {
    alert('Exibirei o nome do criador do código no console.');
    console.log(`Olá, ${nome}!`);
}

function mostrarNumero(numero) {
    let resultado = numero * 2;
    console.log(`O dobro de ${numero} é ${resultado}.`);
}

function mostrarMedia(media) {
    let valor1 = parseInt (prompt('Diga 1 número.'));
    let valor2 = parseInt (prompt('Diga outro número.'));
    let valor3 = parseInt (prompt('Diga mais outro número.'));
    let resultadoMedia = valor1 + valor2 + valor3 / 3;
    console.log(`A média entre esses 3 números é ${resultadoMedia}!`);
}

