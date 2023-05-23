export default function Gameboard() {
  let tiles = createBoard();
  let tilesHit = [];

  const createTile = (x, y) => {
    return { x, y };
  };

  const createBoard = () => {
    let newBoard = [];
    for (let row = 1; row <= 10; row++) {
      for (let column = 1; column <= 10; column++) {
        newBoard.push(createTile(row, column));
      }
    }
    return newBoard;
  };

  const receiveAttack = (x, y) => {
    tilesHit.push({ x, y });
    return `{${x},${y}} has been hit!`;
  };

  const printTilesHit = () => {
    return tilesHit;
  };

  return {
    tiles,
    receiveAttack,
    printTilesHit,
  };
}
