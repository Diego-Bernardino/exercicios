/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
    Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

const gasoline = 6.07;
const ethanol = 4.04;
const diesel = 5.94;

class Car {
    constructor(carBrand, color, fuelConsumptionKm) {
        this.carBrand = carBrand;
        this.color = color;
        this.fuelConsumptionKm = 1 / fuelConsumptionKm;
    }

    toCalcRouteExpanse(distanceKm, typeOfCombustible) {
        const total = distanceKm * this.fuelConsumptionKm * typeOfCombustible;
        console.log(`${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
    }
}

const uno2020 = new Car('Fiat', 'Red', 13.2);

uno2020.toCalcRouteExpanse(250, gasoline);
