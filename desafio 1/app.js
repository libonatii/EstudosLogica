alert('Boa noite!');
let escolha1 = sábado;
let escolha2 = domingo;
let digitar = prompt('Que dia da semana é hoje?');

// condição para final de semana
if ((digitar == escolha1) || (digitar == escolha2)) {
    console.log('Bom final de semana!')
} else {
    alert('Boa semana!')
}


