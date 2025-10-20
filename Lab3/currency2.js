class Currency {
  constructor() {
    this.rates = {
      USD: 4.20,
      EUR: 4.50,
      GBP: 5.10,
      CAD: 3.10,
      CHF: 4.60
    };
  }

  toPLN(amount, currencyCode) {
    const rate = this.rates[currencyCode.toUpperCase()];
    if (!rate) throw new Error('Blad formatu: ' + currencyCode);
    return amount * rate;
  }
}

module.exports = Currency;
