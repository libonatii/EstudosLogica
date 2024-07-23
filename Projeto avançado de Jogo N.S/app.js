//let titulo = document.querySelector("h1");
//titulo.innerHTML = 'Número Secreto';

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = 'Escolha um número de 1 a 55!';

function textoNaTela (tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto 
}

textoNaTela("h1", 'Número Secreto');
textoNaTela("p", 'Escolha um número de 1 a 55!');

function verificarChute () {
    console.log('O botão chute foi clicado!');
}