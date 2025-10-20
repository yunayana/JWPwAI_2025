const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const math1 = require('./MyMathModule1');

const MyMathModule = require('./MyMathModule2');
const math2 = new MyMathModule();

console.log("=== Kalkulator matematyczny ===");
rl.question("Podaj pierwsza liczbe: ", (a) => {
  rl.question("Podaj druga liczbe: ", (b) => {
    a = parseFloat(a);
    b = parseFloat(b);

    console.log("\n--- Wersja 1: myMathModule1 ---");
    console.log(`${a} + ${b} = ${math1.add(a, b)}`);
    console.log(`${a} - ${b} = ${math1.subtract(a, b)}`);
    console.log(`${a} * ${b} = ${math1.multiply(a, b)}`);
    console.log(`${a} / ${b} = ${math1.divide(a, b)}`);
    console.log(`${a} ^ ${b} = ${math1.power(a, b)}`);

    console.log("\n--- Wersja 2: myMathModule2 ---");
    console.log(`${a} + ${b} = ${math2.add(a, b)}`);
    console.log(`${a} - ${b} = ${math2.subtract(a, b)}`);
    console.log(`${a} * ${b} = ${math2.multiply(a, b)}`);
    console.log(`${a} / ${b} = ${math2.divide(a, b)}`);
    console.log(`${a} ^ ${b} = ${math2.power(a, b)}`);

    rl.close();
  });
});

rl.on("close", function() {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
