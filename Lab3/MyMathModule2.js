class MyMathModule {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return b !== 0 ? a / b : 'Blad: dzielenie przez zero';
  }

  power(a, b) {
    return Math.pow(a, b);
  }
}

module.exports = MyMathModule;
