/* 
    3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, proço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta com juros de 10%; 
*/
const state = {
    values: {
        precoEtiqueta: 100,
        condPagamento: 4,
        parcelas: 3,
    }
}

function execOperaçao1(desconto) {
    let descontoAplicado = state.values.precoEtiqueta / 100 * desconto;
    let total = state.values.precoEtiqueta - descontoAplicado;
    console.log(`Valor total:${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
}

function execOperaçao2(desconto) {
    let descontoAplicado = state.values.precoEtiqueta / 100 * desconto;
    let total = state.values.precoEtiqueta - descontoAplicado;
    console.log(`Valor total:${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
} 

function execOperaçao3() {
    let total = state.values.precoEtiqueta;
    let valorParcela = total / state.values.parcelas;
    console.log(`Valor total:${state.values.precoEtiqueta.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}, dividido em ${state.values.parcelas} parcelas de ${valorParcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
} 

function execOperaçao4(juros) {
    let jurosAplicado = state.values.precoEtiqueta / 100 * juros;
    let total = state.values.precoEtiqueta + jurosAplicado;
    let valorParcela = total / state.values.parcelas;
    console.log(`Valor total:${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} divido em ${state.values.parcelas} parcelas de ${valorParcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
}

function defineOperacao() {
    switch (state.values.condPagamento) {
        case 1:
            execOperaçao1(10);
            break;
        case 2:
            execOperaçao2(15);
            break;
        case 3:
            execOperaçao3();
            break;
        default:
            execOperaçao4(10);
    }
}

function main() {
    defineOperacao();
}

main()

