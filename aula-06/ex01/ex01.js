// 1 - Crie um programa que dado um número imprima a sua tabuada.

let multTable = [];

function toCalc(factor) {
    let produto;

    for (let i = 1; i <= 10; i++) {
        produto = factor * i;
        multTable.push(produto);
    }
}

function showMultipliTable(factor) {
    toCalc(factor);
    
    for (let i in multTable) {
        console.log(`${factor} X ${Number(i) + 1} = ${multTable[i]}`)
    }
}

function main(factor) {
    showMultipliTable(factor);
}

main(6);