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
    grid.innerHTML = "";
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
}