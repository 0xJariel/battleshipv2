import { describe, expect, test } from "vitest";
import Ship from "./Ship";

describe("#Ship", () => {
  let testShip = Ship("Destroyer", 3);
  testShip.hit();
  testShip.hit();
  testShip.hit();

  test("hit the ship", () => {
    expect(testShip.hit()).toBe("I've been hit!");
  });
  test("is the ship sunk?", () => {
    let result = testShip.isSunk();
    expect(result).toBe(true);
  });
});
