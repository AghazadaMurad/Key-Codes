"use strict";

const modalEl = document.querySelector(".keyPress");
const keysEl = document.querySelector(".keys");
const spanEl = document.querySelectorAll("span");

window.addEventListener("keyup", (event) => {
  modalEl.classList.add("hidden");
  keysEl.classList.remove("hidden");
  spanEl[0].innerText = event.key;
  spanEl[1].innerText = event.code;
  spanEl[2].innerText = event.keyCode;
  if (event.keyCode === 32) {
    spanEl[0].innerText = "Space";
  }
});
