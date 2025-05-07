const Display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function updateDisplay() {
  Display.value = firstNumber + operator + secondNumber;
}

function inputNumber(num) {
  if (!operator) {
    firstNumber += num;
  } else {
    secondNumber += num;
  }
  updateDisplay();
}

function inputOperator(op) {
  if (firstNumber && !operator) {
    operator = op;
    updateDisplay();
  }
}

function calculate() {
  let result;
  const a = parseFloat(firstNumber);
  const b = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
    default:
      result = "Invalid";
  }

  firstNumber = result.toString();
  operator = "";
  secondNumber = "";
  return result;
}

function clearCalc() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

inputNumber("7");
inputOperator("+");
inputNumber("5");
console.log(calculate());
