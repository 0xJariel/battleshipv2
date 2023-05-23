export default function Ship(name, length) {
  name;
  length;
  let hits = 0;

  const hit = () => {
    hits += 1;
    return "I've been hit!";
  };

  const isSunk = () => {
    return hits >= length ? true : false;
  };

  return {
    hit,
    isSunk,
  };
}
