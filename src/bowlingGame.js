class bowlingGame {
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.rollIndex = 0;
  }
  score() {
    let score = 0;
    let i = 0;
    for(let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        score += 10 + this.rolls[i + 2];
      }else {
        score += this.rolls[i] + this.rolls[i + 1];
      }
      i += 2;
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
