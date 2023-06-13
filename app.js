
//* slider functionality

const sliderContainer = document.querySelector("#input-slider");

const tileInfo = document.querySelector("#tileinfo");
const slider = document.querySelector(".slider");


slider.addEventListener("input", () => {
  handleSlider();
});

//* color picker

// Define a global variable to store the selected color
let selectedColor = '';

// Get the color input and selected color elements
const colorInput = document.getElementById('colorInput');

// Add an event listener to the color input
colorInput.addEventListener('input', () => {
  const color = colorInput.value;

  // Update the selected color variable
  selectedColor = color;
});

// Example usage of the selectedColor variable



//* main function

const container = document.getElementById("container");
const tiles = [];

function handleSlider() {
  const val = (slider.value); 
  tileInfo.innerText = `Current tile size: ${val}`;

  const divNumber = Math.pow(val, 2);
  const tileNumber = (divNumber) => {
    if (Number.isInteger(Math.sqrt(divNumber))) {
      return divNumber / Math.sqrt(divNumber);
    }
    return "ERROR";
  };
  
  container.style.cssText = `display: grid; grid-template-rows: repeat(${tileNumber(
    divNumber
  )}, ${720 / tileNumber(divNumber)}px); grid-template-columns: repeat(${tileNumber(
    divNumber
  )}, ${720 / tileNumber(divNumber)}px); justify-content: center; align-content: center;`;

  tiles.forEach((tile) => tile.remove());
  tiles.length = 0;

  for (let i = 0; i < divNumber; i++) {
    if (Number.isInteger(Math.sqrt(divNumber))) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.style.cssText = "justify-self: 100%; align-self: 100%;";
      tile.style.cssText = "border: 1px solid black";
      container.appendChild(tile);
      tiles.push(tile);
      tile.addEventListener(
        "mouseover",
        () => (tile.style.cssText = `background-color: ${selectedColor};`)
      );
    } else {
      container.innerText = "You didn't input a square number!";
    }
  }
  
}


//* clear button + functionality

const clearButton = document.createElement("button");
clearButton.innerText = "Clear Tiles";
clearButton.style.cssText = "Margin: auto; ";
const main = document.getElementById("main");
main.appendChild(clearButton);

clearButton.addEventListener(
    "click",
    () => {
        for (let i = 0; i < (Math.pow((slider.value), 2)); ++i) {
            (tiles[i].style.cssText = "background-color: white; border: 1px solid black;")
        }
    }
  );

