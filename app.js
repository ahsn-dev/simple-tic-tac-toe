"use strict";

const mainContainer = document.querySelector("div.main-container");
let cells = document
  .querySelectorAll("div.cell")
  .forEach((cell) => cell.addEventListener("click", handleClick));

let array = ["", "", "", "", "", "", "", "", ""];

let state = true;
let counter = 0;

function reRender() {
  // way1
  // document.querySelector("body").innerHTML = `<div class="main-container">
  //   <div id="0" class="cell"></div>
  //   <div id="1" class="cell"></div>
  //   <div id="2" class="cell"></div>
  //   <div id="3" class="cell"></div>
  //   <div id="4" class="cell"></div>
  //   <div id="5" class="cell"></div>
  //   <div id="6" class="cell"></div>
  //   <div id="7" class="cell"></div>
  //   <div id="8" class="cell"></div>
  // </div>`;

  // way2
  window.location.reload();
}

function handleClick(click) {
  if (counter <= 9) {
    if (state) {
      let id = click.target.getAttribute("id");
      array[id] = "circle";
      let div = document.createElement("div");
      div.classList.add("circle");
      click.target.appendChild(div);
      state = false;
      counter++;
    } else {
      let id = click.target.getAttribute("id");
      array[id] = "cross";
      let div = document.createElement("div");
      div.classList.add("cross");
      click.target.appendChild(div);
      state = true;
      counter++;
    }
  }
  let x = handleWin();
  if (x) {
    setTimeout(() => {
      alert(`${x} win`);
      reRender();
    }, 1000);
  } else if (counter >= 9 && !x) {
    setTimeout(() => {
      alert("draw");
      reRender();
    }, 1000);
  }
}

let winSituation = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleWin() {
  let winner;
  for (let i = 0; i <= 7; i++) {
    const win = winSituation[i];
    let a = array[win[0]];
    let b = array[win[1]];
    let c = array[win[2]];

    if (a === "" || b === "" || c === "") continue;
    if (a === b && b === c) {
      winner = true;
      return a;
    }
  }
}
