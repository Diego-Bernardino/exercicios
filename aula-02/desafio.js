const valorGasolina = 6.07;
const valorEtanol = 4.04;
let kmPorLitro = 12;
let tipoCombustivel = 'Etanol';
let gastoMedioKm = tipoCombustivel === 'Gasolina' ? valorGasolina / kmPorLitro : valorEtanol / kmPorLitro;
let distanciakm = 112;

let totalGasto = distanciakm * gastoMedioKm;
console.log(`Será gasto nessa viagem ${totalGasto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' })} reais.`);