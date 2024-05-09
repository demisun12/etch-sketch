const grid = document.querySelector("#grid");

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
