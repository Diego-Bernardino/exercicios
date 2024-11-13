/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e pessa a José para dizer o valor do seu IMC;  
*/

class Person {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    toCalcImc() {
        return this.weight / this.height ** 2;
    }

    toClassifyImc() {
        const imc = this.toCalcImc();

        if (imc < 18.5) {
            return (`O valor do meu IMC é ${imc.toFixed(1)}, classificado como abaixo do peso.`);
        } else if (imc >= 18.5 && imc < 25) {
            return (`O valor do meu IMC é ${imc.toFixed(1)}, classificado como faixa de peso adequada.`);
        } else if (imc >= 25 && imc < 30) {
            return (`O valor do meu IMC é ${imc.toFixed(1)}, classificado como sobrepeso.`);
        } else if (imc >= 30 && imc < 40) {
            return (`O valor do meu IMC é ${imc.toFixed(1)}, classificado como obesidade.`);
        } else {
            return (`O valor do meu IMC é ${imc.toFixed(1)}, classificado como quadro grave de obesidade.`);
        }
    }
}

const jose = new Person('José', 70, 1.75);

console.log(jose.toClassifyImc());