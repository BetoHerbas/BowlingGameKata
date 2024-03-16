class bowlingGame {
  constructor() {
    this.scoreValue = 0; 
  }
  score() {
    return this.scoreValue; 
  }

  roll(pins) {
    this.scoreValue += pins; 
  }
  
  rollMany(n, pins) {
    for (let i = 0; i < n; i++) {
      this.roll(pins);
    }
  }
}

export default bowlingGame;
