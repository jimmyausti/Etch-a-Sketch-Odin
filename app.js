console.log('hello world');

const container = document.getElementById('container');

let divNumber = 16;
console.log(Number.isInteger(Math.sqrt(divNumber)));
const tileType = (divNumber) => {
    if (Number.isInteger(Math.sqrt(divNumber))) {
        return divNumber / Math.sqrt(divNumber)
    } else {
        console.log('the number is not an integer')
    }
}

console.log(tileType(divNumber))



for (let i = 0; i < tileType(divNumber); i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    container.appendChild(row);
   
}

for (let j = 0; j < tileType(divNumber); i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile')
    row.appendChild(tile)
}

  




