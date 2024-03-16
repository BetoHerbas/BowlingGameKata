import bowlingGame from "./bowlingGame.js";

describe("Bowling game test", () => {
  it("Should create a new game", () => {
    let g = new bowlingGame();
    expect(g).toBeInstanceOf(bowlingGame);
  });
  it("Should score 0", () => {
    let g = new bowlingGame();
    for (let i = 0; i < 20; i++) {
      g.roll(0);
    }
    expect(g.score()).toBe(0);
  });
  it("Test all ones, should score 20", () => {
    let g = new bowlingGame();
    for (let i = 0; i < 20; i++) {
      g.roll(1);
    }
    expect(g.score()).toBe(20);
  });
});
