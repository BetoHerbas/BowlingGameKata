class bowlingGame {
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.rollIndex = 0;
  }
  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }
  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }
  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }
  sumOfBallsInFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }
  score() {
    let score = 0;
    let frameIndex = 0;
    for(let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      }
      else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      }else {
        score += this.sumOfBallsInFrame(frameIndex);
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
