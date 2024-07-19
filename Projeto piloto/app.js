alert( 'Olá, mundo. Seja bem-vindo ao meu joguinho..');
let numeroSecreto = 52;
let chute 


// condição de erro e acerto
if (chute == numeroSecreto) {
console.log('Ta fazendo o que aqui, Gabriel? Achou que ia ganhar britney? Mas parabens.');
    alert('Parabéns, você acertou o número secreto ${numeroSecreto}!')
} else {
    alert('Tu errou meu nobre kkkkk')
}


//repetição para continuar o jogo
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 55.');
    
// condição pra diquinhas
    if(chute > numeroSecreto) {
        alert('Hmmm, tu errou! O número secreto é um pouco menor que esse aí! ${chute}')    
}   else {
        alert('Tenta de novo, o número secreto é maior que isso. ${chute}')
}

}   