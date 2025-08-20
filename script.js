const container = document.getElementById('container');

function randomRGBGenerator(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;

    return rgb;
}

function makeDivs(numDivs, size) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement('div');
    cells.classList.add("gridbox");

    cells.addEventListener("mouseenter", () => {cells.style.backgroundColor = randomRGBGenerator()})

    let heightAndWidth = (960 / size).toString();
    cells.style.height = heightAndWidth.concat("px");
    cells.style.width = heightAndWidth.concat("px");

    container.appendChild(cells);
  }
}

makeDivs(256, 16);

const newGridBtn = document.getElementById('newGridBtn');

function removeGrids(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

let makeNewGrid = function(){
    let size = parseInt(prompt("Enter number of squares of each side:"));

    if(size != null && size <= 100){
        removeGrids();

        makeDivs(size * size, size);
    }
}

newGridBtn.addEventListener("click", makeNewGrid);