console.log('hello world');

const container = document.getElementById('container');

const divNumber = 25;
const tileNumber = (divNumber) => {
    if (Number.isInteger(Math.sqrt(divNumber)))  {
        return (divNumber / Math.sqrt(divNumber))
    } return 'ERROR';
}
console.log(Number.isInteger(Math.sqrt(divNumber)));
console.log(tileNumber(divNumber))




container.style.cssText = `display: grid; grid-template-rows: repeat(${tileNumber(divNumber)}, 100px); grid-template-columns: repeat(${tileNumber(divNumber)}, 100px); justify-content: center;`

const clearButton = document.createElement('button');
clearButton.innerText = 'Clear Tiles'
clearButton.style.cssText = 'Margin: auto; '

for (let i = 0; i < (divNumber); i++) {
    if (Number.isInteger(Math.sqrt(divNumber))) {
        const tile = document.createElement('div');
        tile.classList.add('tile')
        tile.style.cssText = 'justify-self: 100%; align-self: 100%;'
        tile.style.cssText = 'border: 1px solid black'
        // tile.innerText = 'Tile #' + Number(i + 1);
        container.appendChild(tile);
        tile.addEventListener("mouseover", () => tile.style.cssText = 'background-color: blue;')
        clearButton.addEventListener('click', () => tile.style.cssText = 'background-color: white; border: 1px solid black;')

       
    } else {
        container.innerText = "You didn't input a square number!"
    }
   
}

const tileInfo = document.querySelector('#tileinfo');
tileInfo.innerText = `Current tile size: ${tileNumber(divNumber)} * ${tileNumber(divNumber)}`


const main = document.getElementById('main')



main.appendChild(clearButton);



  




