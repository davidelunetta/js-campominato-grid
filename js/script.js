const gridContainer = document.getElementById("grid");
const generateGridButton = document.getElementById("GridButton");

generateGridButton.addEventListener("click", () => {
  generateGrid();
});

function generateGrid() {
  gridContainer.innerHTML = "";

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = (row * 10 + col + 1).toString();
      cell.addEventListener("click", (event) => {
        cell.style.backgroundColor = "cyan";
        console.log("Hai cliccato sulla cella " + cell.textContent);
      });
      gridContainer.appendChild(cell);
    }
  }
}