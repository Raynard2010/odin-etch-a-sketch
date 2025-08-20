const container = document.getElementById('container');

function makeDivs(numDivs) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement('div');
    cells.classList.add("gridbox");
    cells.addEventListener("mouseenter", () => {cells.style.backgroundColor = "black"})

    container.appendChild(cells);
  }
}

makeDivs(272);