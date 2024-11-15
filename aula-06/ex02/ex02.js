// 2 - Escreva um programa que seja capaz de percorrer uma lista de número e imprima cada número par encontrado.

let numbers = [];
let isEven = [];

for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}

for (let i in numbers) {
    if (numbers[i] % 2 === 0) {
        isEven.push(numbers[i]);
    }
}

for (let i in isEven) {
    console.log(isEven[i]);
}