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

//This is storing input click values in firstNumber.
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    firstNumber.push(number.value);
    display.textContent = firstNumber.join("");
    return firstNumber;
  });
});
console.log(firstNumber);

//add event listener for each number that stores the value in the first number
//This is for my second Number might need an if statement.
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    secondNumber.push(number.value);
    display.textContent = firstNumber.join("");
    return secondNumber;
  });
});

//this is going to clear the display and then allow new input
clearButton.addEventListener("click", (event) => {
  display.textContent = "0";
  firstNumber = [];
  secondNumber = [];
  firstOperator = [];
});

//this will be the event listener for operators
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstOperator.push(operator.value);
    display.textContent = firstOperator.join("");
    return firstOperator;
  });
});

//big array with three small arrays inside, these are not arrays but index (items in the array).
// indexs will be firstNumber and secondNumber and the operator this will call a functions
//will run through an if statement.
