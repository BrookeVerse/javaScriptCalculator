//querySeclectors are collecting data for values of each variable
const numbers = document.querySelectorAll(".calcuArea__number");
const display = document.querySelector(".calcuArea__display");
const clearButton = document.querySelector(".calcuArea__clear");
const equalsButton = document.querySelector(".calcuArea__equals");
const operators = document.querySelectorAll(".calcuArea__operator");
//These selectors are housing the values from the eventListeners and results of functions
let firstNumber = "";
let secondNumber = "";
let firstOperator = "";
let totalOutput = "";
let resultSum = "";

/*This function is being triggered by eventListeners to collect the value of when a button is clicked and storing it in seperate values
It is also being controlled by an If statement that will change the variable values are being stored
Then changing the display so the user can see what they are doing.*/
const handleNumberPress = (event) => {
  let inputtedNumber = event.target.value;
  if (firstOperator === "") {
    firstNumber += inputtedNumber.toString();
    totalOutput = firstNumber;
    display.textContent = totalOutput;
  } else {
    secondNumber += inputtedNumber.toString();
    totalOutput = firstNumber + " " + firstOperator + " " + secondNumber;
    display.textContent = totalOutput;
  }
};

//This is handling when the eventListener for a operator button is clicked collecting the value and updating the display
const handleOperatorPress = (event) => {
  firstOperator = event.target.value;
  totalOutput = firstNumber + " " + firstOperator;
  display.textContent = totalOutput;
};

//This is the event listener for when a number button is clicked and triggering the handleNumberPress function
numbers.forEach((number) => {
  number.addEventListener("click", handleNumberPress);
});

//this will be the event listener for operator buttons is clicked and triggering the handleOperator function
operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorPress);
});

//This will listen to the click of the clearButton and fun the function to clear all stored values and reset the display
clearButton.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  firstOperator = "";
  totalArray = "";
});

// This function changes the display to show all values that have been collected by the fucntions above
const handleOutput = () => {
  display.textContent = firstNumber + " " + firstOperator + " " + secondNumber;
};

//This is a simple addition function
let simpleAddition = (a, b) => {
  return a + b;
};
//This is a simple subtraction function
const simpleSubtract = (a, b) => {
  return a - b;
};
//This is a simple divide function
const simpleDivision = (a, b) => {
  return a / b;
};
//This is a simple multiplication function
const simpleMultiply = (a, b) => {
  return a * b;
};

//This is a simple percentage function
const simplePercentage = (a, b) => {
  return (a / 100) * b;
};

//This switch case will register what operator has been clicked and what equation function to call upon
let inputOperator = () => {
  switch (firstOperator) {
    case "+":
      resultSum = simpleAddition(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      firstNumber = "";
      secondNumber = "";
      firstOperator = "";
      break;
    case "-":
      resultSum = simpleSubtract(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      firstNumber = "";
      secondNumber = "";
      firstOperator = "";
      break;
    case "/":
      resultSum = simpleDivision(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      firstNumber = "";
      secondNumber = "";
      firstOperator = "";
      break;
    case "x":
      resultSum = simpleMultiply(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      firstNumber = "";
      secondNumber = "";
      firstOperator = "";
      break;
    case "%":
      resultSum = simplePercentage(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      firstNumber = "";
      secondNumber = "";
      firstOperator = "";
  }
  //This will change the display to the result of the equation functions that have been called by the operator click
  totalOutput = resultSum;
  display.textContent = totalOutput;
  //This if statement will allow you to do another equation with the results of the first.
  if (resultSum !== null) {
    handleOperatorPress;
    firstNumber = resultSum;
    handleNumberPress;
  }
};

//This equals eventListener will triger the switch case to run through what operator has been used and what function to call
equalsButton.addEventListener("click", inputOperator);
