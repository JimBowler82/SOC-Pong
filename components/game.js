class Game {
  constructor() {
    this.player1 = new Player('Player 1');
    this.player2 = new Player('Player 2');
    this.paddle1 = new Paddle(15);
    this.paddle2 = new Paddle(canvas.width - 25);
    this.ball = new Ball(canvas.width / 2, canvas.height / 2);
    this.background = new Background();
    this.winner = '';
    this.gameRunning = false;
    this.thereIsAWinner = false;
    this.winningScore = 10;
  }

  gameLoop() {
    if (this.gameRunning && !this.thereIsAWinner) {
      // Run game
      this.background.draw();
      this.background.displayScores();
      this.ball.update();
      this.ball.drawBall();
      this.paddle1.drawPaddle();
      this.paddle2.drawPaddle();
    } else if(!this.gameRunning && this.thereIsAWinner) {
      // Show results screen
      this.background.showWinnerScreen(this.winner);
    } else if(!this.gameRunning && !this.thereIsAWinner){
      // Show start screen
      this.background.showStartScreen();
    }
  }

  reset() {
    this.winner = '';
    this.thereIsAWinner = false;
    this.gameRunning = false;
    this.player1.resetScore();
    this.player2.resetScore();
  }
}






