/**
 * Classificação
 * Subpeso: 16 - 19
 * Peso ideal: 19 - 24
 * Sobrepeso: 25 - 29
 * Obesidade GI: 30 - 34
 * Obesidade GII: 35 - 39
 * Obesidade GIII: > 40
 */

const name = "Carlos";
const weigth = 84;
const height = 1.88;

function calculateIMC(weigth, height) {
  return weigth / (height * height);
}

function classifyIMC(imc) {
  if (imc < 19) {
    return "subpeso";
  }else if (imc >= 19 && imc < 24) {
    return "peso ideal";
  }else if (imc >= 24 && imc < 29) {
    return "sobrepeso";
  }else if (imc >= 29 && imc < 34) {
    return "obesidade grau I";
  }else if (imc >= 34 && imc < 39) {
    return "obesidade grau II";
  }else {
    return "obesidade grau III";
  }
}

var imc = calculateIMC(weigth, height);
var result = classifyIMC(imc);

console.log(`O IMC foi de ${imc.toFixed(2)}: ${name} está com ${result}`);
