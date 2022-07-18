"use strict";

const inputsRadio = document.getElementsByName("number");
console.log(inputsRadio);
const divNumbers = document.getElementsByClassName("form__number");
console.log(divNumbers);
const labels = document.getElementsByClassName("form__label");
console.log(labels);

let numInput;

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

// const printDiv = function (num) {
//   console.log(num);
// };
