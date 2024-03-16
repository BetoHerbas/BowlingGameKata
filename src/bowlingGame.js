class bowlingGame {
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.rollIndex = 0;
  }
  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
  score() {
    let score = 0;
    let frameIndex = 0;
    for(let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] === 10) {
        score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
        frameIndex++;
      }
      else if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      }else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
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
