//Need collect all the numbers to create an event with them
//const inputNumbers = document.querySelectorAll(".calcuArea__number");
//console.log(inputNumbers);

const numbers = document.querySelectorAll(".calcuArea__number");

let firstNumber = [];

numbers.forEach((number) => {
  number.addEventListener("Click", (event) => {
    firstNumber.push(event.target.value);
  });
});
console.log(firstNumber);

//add event listener for each number that stores the value in the first number
