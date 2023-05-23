import { describe, expect, test } from "vitest";
import Gameboard from "./Gameboard";

describe("#Gameboard", () => {
  let testGameBoard = Gameboard();
  const firstAttack = testGameBoard.receiveAttack(1, 2);
  testGameBoard.receiveAttack(1, 3);

  test("board created", () => {
    expect(testGameBoard.board[0].x).toBe(1);
  });
  test("receive an attack", () => {
    expect(firstAttack).toBe("{1,2} has been hit!");
  });
  test("print tiles hit", () => {
    expect(testGameBoard.printTilesHit()).toEqual([
      { x: 1, y: 2 },
      { x: 1, y: 3 },
    ]);
  });
  test("", () => {
    expect(testGameBoard.printTilesHit()).toEqual([
      { x: 1, y: 2 },
      { x: 1, y: 3 },
    ]);
  });
});
