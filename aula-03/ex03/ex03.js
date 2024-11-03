/* 
    3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, proço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta com juros de 10%; 
*/

let precoEtiqueta = 100;
let condPagamento = 2;
let parcelas = 0;

if (condPagamento === 1) {
    let desconto = 10;
    let descontoAplicado = precoEtiqueta / 100 * desconto;
    let total = precoEtiqueta - descontoAplicado;
    console.log(`Valor total:${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
} else if (condPagamento === 2) {
    let desconto = 15;
    let descontoAplicado = precoEtiqueta / 100 * desconto;
    let total = precoEtiqueta - descontoAplicado;
    console.log(`Valor total:${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
} else if (condPagamento === 3) {
    let total = precoEtiqueta;
    let valorParcela = total / parcelas;
    console.log(`Valor total:${precoEtiqueta.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}, dividido em ${parcelas} parcelas de ${valorParcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
} else {
    let juros = 10;
    let jurosAplicado = precoEtiqueta / 100 * juros;
    let total = precoEtiqueta + jurosAplicado;
    let valorParcela = total / parcelas;
    console.log(`Valor total:${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} divido em ${parcelas} parcelas de ${valorParcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
}

