//The Collection for the data needed
const numbers = document.querySelectorAll(".calcuArea__number");
const display = document.querySelector(".calcuArea__display");
const clearButton = document.querySelector(".calcuArea__clear");
const equalsButton = document.querySelector(".calcuArea__equals");
const operators = document.querySelectorAll(".calcuArea__operator");
let firstNumber = "";
let secondNumber = "";
let firstOperator = "";
let totalOutput = "";
let resultSum = "";

//handling when a number is being clicked
const handleNumberPress = (event) => {
  let inputtedNumber = event.target.value;
  console.log(operators, typeof operators);
  if (firstOperator === "") {
    firstNumber += inputtedNumber.toString();
    totalOutput = firstNumber;
    display.textContent = totalOutput;
  } else {
    secondNumber += inputtedNumber.toString();
    totalOutput = firstNumber + firstOperator + secondNumber;
    display.textContent = totalOutput;
  }
};

//This is handling when an operator is being clicked.
const handleOperatorPress = (event) => {
  console.log(event.target.value);
  firstOperator = event.target.value;
  totalOutput = firstNumber + firstOperator;
  display.textContent = totalOutput;
};

//This is the event listener for when a number button is clicked
numbers.forEach((number) => {
  number.addEventListener("click", handleNumberPress);
});

//this is going to clear the display and then allow new input
clearButton.addEventListener("click", (event) => {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  firstOperator = "";
  totalArray = "";
});

//this will be the event listener for operators
operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorPress);
});

// function for output results

const handleOutput = () => {
  display.textContent = firstNumber + firstOperator + secondNumber;
};

//switch case that will register what operator has been clicked and what function to call

//simple addition function
let simpleAddition = (a, b) => {
  const addition = a + b;
  return addition;
};
//simple subtraction function
const simpleSubtract = (a, b) => {
  return a - b;
};
//simple divide function
const simpleDivision = (a, b) => {
  return a / b;
};
//simple multiplication function
const simpleMultiply = (a, b) => {
  return a * b;
};

let inputOperator = () => {
  switch (firstOperator) {
    case "+":
      resultSum = simpleAddition(parseInt(firstNumber), parseInt(secondNumber));

      break;
    case "-":
      resultSum = simpleSubtract(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "/":
      resultSum = simpleDivision(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "x":
      resultSum = simpleMultiply(parseInt(firstNumber), parseInt(secondNumber));
      break;
  }
  totalOutput = resultSum;
  display.textContent = totalOutput;
};

//equals to push through to my switch case
equalsButton.addEventListener("click", inputOperator);
