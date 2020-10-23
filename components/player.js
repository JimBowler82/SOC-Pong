class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score += 1;
  }

  resetScore() {
    this.score = 0;
  }

  getName() {
    return this.name;
  }
}