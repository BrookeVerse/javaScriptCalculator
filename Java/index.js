//Need collect all the numbers to create an event with them
//const inputNumbers = document.querySelectorAll(".calcuArea__number");
//console.log(inputNumbers);

const numbers = document.querySelectorAll(".calcuArea__number");
const display = document.querySelector(".calcuArea__display");
const clearButton = document.querySelector(".calcuArea__clear");
const operators = document.querySelectorAll(".calcuArea__operator");
let firstNumber = [];
let secondNumber = [];
let firstOperator = [];
let totalArray = [];
//This is storing input click values in firstNumber.
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("operators", operators);
    console.log("totalArray", totalArray);
    if (!totalArray.includes(operators)) {
      console.log("is getting here");
      firstNumber.push(number.value);
      totalArray.push(number.value);
      display.textContent = totalArray.join("");
    } else {
      console.log("log is getting here!");
      secondNumber.push(number.value);
      totalArray.push(number.value);
      display.textContent = totalArray.join("");
    }
  });
});
console.log(totalArray);
console.log(secondNumber);

//this is going to clear the display and then allow new input
clearButton.addEventListener("click", (event) => {
  display.textContent = "0";
  firstNumber = [];
  secondNumber = [];
  firstOperator = [];
  totalArray = [];
});

//this will be the event listener for operators
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstOperator.push(operator.value);
    totalArray.push(operator.value);
    display.textContent = totalArray.join("");
    return firstOperator;
  });
});

//big array with three small arrays inside, these are not arrays but index (items in the array).
// indexs will be firstNumber and secondNumber and the operator this will call a functions
//will run through an if statement.

//switch case that will register what operator has been clicked and what function to call

let inputOperator;
switch (totalArray.includes(firstOperator)) {
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

//simple addition function
const simpleAddition = (a, b) => {
  return parseInt(a, firstNumber) + parseInt(b, secondNumber);
};
console.log(simpleAddition(firstNumber, secondNumber));
