// referencja do obiektu export 
const currency1 = require('./currency1');

console.log('--- Wersja 1: currency1.js ---');
console.log(`50 USD to ${currency1.toPLN(50, 'USD')} PLN`);
console.log(`20 EUR to ${currency1.toPLN(20, 'EUR')} PLN`);
console.log(`10 GBP to ${currency1.toPLN(10, 'GBP')} PLN`);
console.log(`15 CAD to ${currency1.toPLN(15, 'CAD')} PLN`);
console.log(`25 CHF to ${currency1.toPLN(25, 'CHF')} PLN`);

// podejscie obiektowe  
const Currency = require('./currency2');
const currency2 = new Currency();

console.log('\n--- Wersja 2: currency2.js ---');
console.log(`50 USD to ${currency2.toPLN(50, 'USD')} PLN`);
console.log(`20 EUR to ${currency2.toPLN(20, 'EUR')} PLN`);
console.log(`10 GBP to ${currency2.toPLN(10, 'GBP')} PLN`);
console.log(`15 CAD to ${currency2.toPLN(15, 'CAD')} PLN`);
console.log(`25 CHF to ${currency2.toPLN(25, 'CHF')} PLN`);
