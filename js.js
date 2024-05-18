const grid = document.querySelector("#grid");

const setgrid = document.querySelector("#number");

for (let col = 0; col < 16; col++) {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "grid-row");
    grid.appendChild(gridRow);
    for (let row = 0; row < 16; row++) {
        const gridRowDivs = document.createElement("div");
        gridRowDivs.setAttribute("class", "square");
        gridRow.appendChild(gridRowDivs);

    }
}

 setgrid.onclick = function () {
    let choice = prompt("Enter the number of squares per side of grid");
    let gridNumber = parseInt(choice);
    if (gridNumber > 0 && gridNumber <= 100) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        for (let col = 0; col < gridNumber; col++) {
            const gridRow = document.createElement("div");
            gridRow.setAttribute("class", "grid-row");
            grid.appendChild(gridRow);
            for (let row = 0; row < gridNumber; row++) {
                const gridRowDivs = document.createElement("div");
                gridRowDivs.setAttribute("class", "square");
                gridRow.appendChild(gridRowDivs);
        
            }
        }
    } else {
        alert("Please enter a number between 1 and 100");
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor
}

const square = document.querySelector(".square");

square.addEventListener('mouseover', function(){
    square.style.backgroundColor = randomColor();
}) 