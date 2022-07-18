"use strict";

const inputsRadio = document.getElementsByName("number");
console.log(inputsRadio);
const divNumbers = document.getElementsByClassName("form__number");
console.log(divNumbers);
const labels = document.getElementsByClassName("form__label");
console.log(labels);
const cardRating = document.querySelector(".rating");
console.log(cardRating);
const cardResult = document.querySelector(".result");
console.log(cardResult);
const form = document.querySelector(".form");
console.log(form);
const displayValue = document.querySelector(".result__num");
console.log(displayValue);

let numInput;
let currentValue;

const indexBtnChecked = function () {
  let indexBtn;
  inputsRadio.forEach((input, index) => {
    if (input.checked) {
      console.log(index);
      indexBtn = index;
    }
  });
  return indexBtn;
};

const isChecked = function () {
  let check;

  inputsRadio.forEach((input) => {
    console.log("Function isChecked");
    if (input.parentElement.classList.contains("bg--orange")) {
      console.log(input);

      check = true;
    }
  });
  return check ? true : false;
};

const removeClass = function () {
  console.log("remove");
  inputsRadio.item(numInput).parentElement.classList.toggle("bg--orange");
  labels.item(numInput).classList.toggle("co--white");
};

const addClass = function () {
  numInput = indexBtnChecked();
  let index = indexBtnChecked();
  currentValue = inputsRadio.item(index).value;
  console.log(`Value of the current input is ${currentValue}`);
  inputsRadio.item(index).parentElement.classList.add("bg--orange");
  labels.item(index).classList.add("co--white");
};

const addColor = function () {
  if (isChecked()) {
    removeClass();
    addClass();
  } else {
    addClass();
  }
};

inputsRadio.forEach((input) => {
  input.addEventListener("change", addColor);
});

const writeNumber = function () {
  displayValue.textContent = currentValue;
  return currentValue;
};

// const printDiv = function (num) {
//   console.log(num);
// };
form.addEventListener("submit", () => {
  cardRating.classList.add("hidden");
  writeNumber();
  cardResult.classList.remove("hidden");
});
