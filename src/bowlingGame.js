class bowlingGame {
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.rollIndex = 0;
  }
  score() {
    let score = 0;
    for(let i = 0; i < 20; i++) {
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        score += this.rolls[i + 2];
      }
      score += this.rolls[i];
    }
    return score; 
  }

  roll(pins) {
    this.scoreValue += pins;
    this.rolls[this.rollIndex++] = pins;
  }

  rollMany(n, pins) {
    for (let i = 0; i < n; i++) {
      this.roll(pins);
    }
  }
}

export default bowlingGame;
