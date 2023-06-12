console.log("hello world");

/// slider functionality

const sliderContainer = document.querySelector("#input-slider");

const tileInfo = document.querySelector("#tileinfo");
const slider = document.querySelector(".slider");

const maxVal = slider.getAttribute("max");
const val = (slider.value / maxVal) * 10;



slider.addEventListener("input", () => {
  handleSlider();
  console.log(val)
});

////

const container = document.getElementById("container");
const tiles = [];

function handleSlider() {
    
    const maxVal = slider.getAttribute("max");
    const val = (slider.value / maxVal) * 10;
    tileInfo.innerText = `Current tile size: ${val}`;
    
    const divNumber = Math.pow(val, 2);
    const tileNumber = (divNumber) => {
        if (Number.isInteger(Math.sqrt(divNumber))) {
            return divNumber / Math.sqrt(divNumber);
        }
        return "ERROR";
    };
    console.log(Number.isInteger(Math.sqrt(divNumber)));
    console.log(tileNumber(divNumber));
    
   
    container.style.cssText = `display: grid; grid-template-rows: repeat(${tileNumber(
        divNumber
        )}, 100px); grid-template-columns: repeat(${tileNumber(
            divNumber
            )}, 100px); justify-content: center;`;
            
    tiles.forEach((tile) => tile.remove())
    tiles.length = 0;

for (let i = 0; i < divNumber; i++) {
    if (Number.isInteger(Math.sqrt(divNumber))) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.cssText = "justify-self: 100%; align-self: 100%;";
            tile.style.cssText = "border: 1px solid black";
            // tile.innerText = 'Tile #' + Number(i + 1);
            container.appendChild(tile);
            tiles.push(tile);
            tile.addEventListener(
                "mouseover",
                () => (tile.style.cssText = "background-color: blue;")
                );
                
                    } else {
                        container.innerText = "You didn't input a square number!";
                    }
    }
            }
            
        
            
        


        const clearButton = document.createElement("button");
        clearButton.innerText = "Clear Tiles";
clearButton.style.cssText = "Margin: auto; ";
const main = document.getElementById("main");
clearButton.addEventListener(
    "click",
    () =>
    (tile.style.cssText =
        "background-color: white; border: 1px solid black;")
        );
            
main.appendChild(clearButton);

