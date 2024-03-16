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
  it("Test n rolls", () => {
    let g = new bowlingGame();
    g.rollMany(20, 1);
    expect(g.score()).toBe(20); 
  });
  it("Test one spare", () => {
    let g = new bowlingGame();
    g.roll(5);
    g.roll(5);
    g.roll(3);
    g.rollMany(17, 0);
    expect(g.score()).toBe(16);
  });
  it("Test one strike", () => {
    let g = new bowlingGame();
    g.roll(10);
    g.roll(3);
    g.roll(4);
    g.rollMany(16, 0);
    expect(g.score()).toBe(24);
  });
});
