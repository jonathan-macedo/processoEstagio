// Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


let nome = 'Wilson';
let resultado = '';

for (let i = nome.length - 1; i >= 0; i--) {
  resultado += nome[i];
}

console.log(resultado);
