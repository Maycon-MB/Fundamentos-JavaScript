/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância de KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

const precoCombustivel = 5.25;
let gastoKm = 10;
let distanciaViagem = 45;

calculoGasto = (distanciaViagem / gastoKm) * precoCombustivel

console.log(calculoGasto.toFixed(2));
/* toFixed serve para reduzir as casas decimais */