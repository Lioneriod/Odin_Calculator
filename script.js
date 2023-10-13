// Plan how to tackle each problem in this exercise before doing it lol

// The problem: Creating a script that will save a clicked number in a variable,
// for further use in functions of different operations;

// The plan: Connect different divs with variables and events, so that each click
// will save that number in a variable. After picking the operator and the
// second number and pressing the equal operator, the first variable should be
// overwritten, showing the result;

// The Pseudocode:
// 1. User clicks, triggering and event with each possible button using the same function
// 2. The first number chosen is attributed to a var, showing up on the screen
// 3. The chosen operator is also attributed to a var, to make it possible for
// different operations
// 4. At last, the second number is attributed to a var

const buttons = {
  point: document.querySelector(".point"),
  zero: document.querySelector(".zero"),
  one: document.querySelector(".one"),
  two: document.querySelector(".two"),
  three: document.querySelector(".three"),
  four: document.querySelector(".four"),
  five: document.querySelector(".five"),
  six: document.querySelector(".six"),
  seven: document.querySelector(".seven"),
  eight: document.querySelector(".eight"),
  nine: document.querySelector(".nine"),
  C: document.querySelector(".C"),
  CE: document.querySelector(".CE"),
  smile: document.querySelector(".smile"),
  divider: document.querySelector(".divide"),
  adder: document.querySelector(".add"),
  subtracter: document.querySelector(".subtract"),
  multiplier: document.querySelector(".multiply"),
  equaler: document.querySelector(".equal"),
};

let firstNumber = "";
let operator = "";
let secondNumber = "";

const operators = [
  buttons.adder,
  buttons.subtracter,
  buttons.multiplier,
  buttons.divider,
];

const numbers = [
  buttons.zero,
  buttons.one,
  buttons.two,
  buttons.three,
  buttons.four,
  buttons.five,
  buttons.six,
  buttons.seven,
  buttons.eight,
  buttons.nine,
];

// Function to perform operations
function operate(a, op, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "ERROR";
  }
}

// Function to update the calculator display (which can be called for every change)
function updateDisplay(value) {
  document.querySelector(".result").innerHTML = value;
}

// This one is used to show the result and the next operator to be used
function updateDisplayExtra(value, value2) {
  document.querySelector(".result").innerHTML = value + ` ${value2}`;
}

// General function for all buttons
function calculator() {
  // Using for of to add operators from the const before
  for (let operatorButton of operators) {
    operatorButton.addEventListener("click", () => {
      // Let's make the second operator press be also an equal + operator
      if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
        firstNumber = operate(firstNumber, operator, secondNumber);
        operator = "";
        operator = operatorButton.textContent;
        updateDisplayExtra(firstNumber, operator);
        secondNumber = "";

        // This is the basic version for when you got at least one number pressed
      } else if (firstNumber !== "" || secondNumber !== "") {
        operator = operatorButton.textContent;
        updateDisplay(operator);
      }
    });
  }
  // Using for of to add numbers
  for (let numberButton of numbers) {
    numberButton.addEventListener("click", () => {
      // We do the first number for starting an operation
      if (secondNumber == "" && operator == "") {
        firstNumber += numberButton.textContent;
        updateDisplay(firstNumber);
        // Let's do the same for the second number, but with different rules
      } else if (firstNumber !== "" && operator !== "") {
        secondNumber += numberButton.textContent;
        updateDisplay(secondNumber);
      }
    });
  }

  //Now to get the result, we are gonna use the function operate
  buttons.equaler.addEventListener("click", () => {
    firstNumber = operate(firstNumber, operator, secondNumber);
    updateDisplay(firstNumber);
    // To do new operations, we need to clear those numbers from before
    secondNumber = "";
    operator = "";
  });
  // Now to work with floating point numbers

  //For the extra buttons
  buttons.C.addEventListener("click", () => {
    operator = "";
    secondNumber = "";
    updateDisplay(firstNumber);
  });
  buttons.CE.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay("");
  });
  buttons.smile.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay("=)");
  });
}

calculator();
