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
}

export default bowlingGame;
