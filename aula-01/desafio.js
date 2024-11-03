const valorCombustivel = 6.07;
let kmPorLitro = 12
let gastoMedioKm = valorCombustivel / kmPorLitro;
let distanciakm = 112;

let totalGasto = distanciakm * gastoMedioKm;
console.log(`Será gasto nessa viagem ${totalGasto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' })} reais.`);