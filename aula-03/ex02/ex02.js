/* 
    2) O IMC - Indíce de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos condição:
    - Abaixo de 18.5 abaixo do peso;
    - Entre 18.5 e 25 peso normal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 Obeso; 
    - Acima de 40 obesidade Grave.
*/

let altura = 1.64;
let peso = 69;

let imc = peso / altura ** 2; // Poderia ser: peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`IMC:${imc.toFixed(1)}, Indivíduo abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC:${imc.toFixed(1)}, Indivíduo na faixa de peso adequada.`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC:${imc.toFixed(1)}, Indivíduo está acima do peso.`);
} else if (imc >= 30 && imc < 40) {
    console.log(`IMC:${imc.toFixed(1)}, Indivíduo obeso.`);
} else {
    console.log(`IMC:${imc.toFixed(1)}, Indivíduo com quadro grave de obesidade.`);
}
