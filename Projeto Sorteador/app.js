function sortear() {
    let qntd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    //array para armazenar os números sorteados
    for (let i = 0; i < qntd; i++) {  
        numero = obterNumero(de, ate);
        sorteados.push(numero);
        alert(numero); 
    }

    gerarSorteio(qntd, de, ate);
}

function textoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function obterNumero(min, max) {
    console.log('O botão sortear foi clicado.');
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
