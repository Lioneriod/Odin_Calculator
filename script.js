function add(a, b) {
  a = a + b;
  return a;
}

function subtract(a, b) {
  a = a - b;
  return a;
}

function multiply(a, b) {
  a = a * b;
  return a;
}

function divide(a, b) {
  a = a / b;
  return a;
}

const buttons = {
  comma: document.querySelector("#comma").innerHTML,
  point: document.querySelector("#point").innerHTML,
  zero: document.querySelector("#zero").innerHTML,
  one: document.querySelector("#one").innerHTML,
  two: document.querySelector("#two").innerHTML,
  three: document.querySelector("#three").innerHTML,
  four: document.querySelector("#four").innerHTML,
  five: document.querySelector("#five").innerHTML,
  six: document.querySelector("#six").innerHTML,
  seven: document.querySelector("#seven").innerHTML,
  eight: document.querySelector("#eight").innerHTML,
  nine: document.querySelector("#nine").innerHTML,
  C: document.querySelector("#C").innerHTML,
  CE: document.querySelector("#CE").innerHTML,
  smile: document.querySelector("#smile").innerHTML,
  divider: document.querySelector("#divide").innerHTML,
  adder: document.querySelector("#add").innerHTML,
  subtracter: document.querySelector("#subtract").innerHTML,
  multiplier: document.querySelector("#multiply").innerHTML,
  equaler: document.querySelector("#equal").innerHTML,
};

function screen_control() {
  let screen_result = 0;
  document.querySelector(".result").innerHTML = screen_result;
}

screen_control();

// Plan how to tackle each problem in this exercise before doing it lol
