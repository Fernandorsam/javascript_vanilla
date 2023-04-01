const { gets, print } = require("./script");

const num = gets();
let maiorValorPar = null;
let menorValorImpar = null; 


for (let index = 0; index < num; index++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if ( maiorValorPar === null ||  numero > maiorValorPar) {
         maiorValorPar = numero;
    }
  } else {
    if ( menorValorImpar === null || numero < menorValorImpar) {
         menorValorImpar = numero;
    }
  }
}
print(maiorValorPar);
print(menorValorImpar);
