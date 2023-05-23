import Gameboard from "./Gameboard";
import renderShips from "./renderShips";
import renderTiles from "./renderTiles";
import "./style.css";

const init = () => {
  //generate tiles
};

const createNewGame = (() => {
  const newGameboard = Gameboard();
  displayTiles(newGameboard.board);
  console.log("hi");
})();
