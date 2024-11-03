function imprimeNome(name) {
    console.log(`Nome:${name}`);
}

function verificaIdade(age) {
    if (age >= 18) {
        console.log('Maior de idade.');
    } else {
        console.log('Menor de idade.');
    }
}

function main() {
    imprimeNome('Diego');
    verificaIdade(23);
}

main()