let number1 = 57;
let number2 = 36;
let operate = "+";

function calculate(num1, num2, oper) {
  switch (oper) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
  }
}

console.log(calculate(number1, number2, operate));
