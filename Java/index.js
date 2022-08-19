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

//handling when a number is being clicked
const handleNumberPress = (event) => {
  let inputtedNumber = event.target.value;
  console.log(operators, typeof operators);
  if (firstOperator === "") {
    firstNumber += inputtedNumber.toString();
    totalOutput = firstNumber;
    display.textContent = totalOutput;
    console.log("is getting here.", firstNumber);
  } else {
    secondNumber += inputtedNumber.toString();
    console.log("is getting here!", secondNumber);
    totalOutput = firstNumber + firstOperator + secondNumber;
    display.textContent = totalOutput;
  }
};
//Just so I can see what is happening
console.log(firstNumber);
console.log(secondNumber);
console.log(firstOperator);

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

//equals to push through to my switch case
equalsButton.addEventListener("click", (event) => {
  inputOperator;
});
//switch case that will register what operator has been clicked and what function to call

//simple addition function
const simpleAddition = (a, b) => {
  return parseInt(a, firstNumber) + parseInt(b, secondNumber);
};
console.log(simpleAddition(firstNumber, secondNumber));

let inputOperator = () => {
  switch (operators) {
    case "+":
      simpleAddition;
      break;
    case "-":
      break;
    case "/":
      break;
    case "*":
      break;
    case "=":
      break;
  }
};
