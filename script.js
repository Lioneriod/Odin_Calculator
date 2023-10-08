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
  comma: document.querySelector(".comma"),
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

// Function to perform operations
function operate(a, op, b) {
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
      return NaN;
  }
}

// Function to be repeated to update the calculator display
function updateDisplay(value) {
  document.querySelector(".result").innerHTML = value;
}

function calculator() {
  for (let operatorButton of [
    buttons.adder,
    buttons.subtracter,
    buttons.multiplier,
    buttons.divider,
  ]) {
    operatorButton.addEventListener("click", () => {
      if (firstNumber !== "") {
        operator = operatorButton.textContent;
      }
    });
  }
  // Event listener for the equals (=) button
  buttons.equaler.addEventListener("click", () => {
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
      firstNumber = String(
        operate(parseFloat(firstNumber), operator, parseFloat(secondNumber))
      );
      operator = "";
      secondNumber = "";
      updateDisplay(firstNumber);
    }
  });
  // Event listener for the point (.) button
  buttons.point.addEventListener("click", () => {
    if (operator === "") {
      if (!firstNumber.includes(".") && firstNumber !== "") {
        firstNumber += ".";
        updateDisplay(firstNumber);
      }
    } else {
      if (!secondNumber.includes(".") && secondNumber !== "") {
        secondNumber += ".";
        updateDisplay(secondNumber);
      }
    }
  });
  // Event listeners for number buttons
  for (let button of Object.values(buttons)) {
    if (button.classList.contains("number")) {
      button.addEventListener("click", () => {
        if (operator === "") {
          firstNumber += button.textContent;
          updateDisplay(firstNumber);
        } else {
          secondNumber += button.textContent;
          updateDisplay(secondNumber);
        }
      });
    }
  }
  // Event listener for the CE button
  buttons.CE.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay("0");
  });
  // Event listener for the smile button
  buttons.smile.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay("=)");
  });
}

calculator();
