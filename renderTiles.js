export default function renderTiles() {
  const boardContainer = document.querySelector(".board-container");
  for (let row = 1; row <= 10; row++) {
    for (let column = 1; column <= 10; column++) {
      const newTile = document.createElement("div");
      newTile.dataset.x_coord = row;
      newTile.dataset.y_coord = column;
      boardContainer.appendChild(newTile);
    }
  }
}

renderTiles();
