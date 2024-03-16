import bowlingGame from "./bowlingGame.js";

describe("Bowling game test", () => {
  it("Should create a new game", () => {
    let g = new bowlingGame();
    expect(g).toBeInstanceOf(bowlingGame);
  });
});
