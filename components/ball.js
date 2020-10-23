class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 60;
    this.xVel = 4;
    this.yVel = 3;
    this.image = this.setImage();
  }

  setImage() {
    let img = new Image();
    img.src = "../images/soc-ball.png";
    return img;
  }

  drawBall() {
    /* ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height); */
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    this.x = this.x -= this.xVel;
    this.y = this.y -= this.yVel;

    // Collisions
    if (this.x > 0 && this.x < canvas.width) {
      // Paddle 1
      if (this.x <= (game.paddle1.x + game.paddle1.width)) {
        if (this.y > game.paddle1.y && (this.y < game.paddle1.y + game.paddle1.height) || (this.y + this.height) > game.paddle1.y && (this.y + this.height) < (game.paddle1.y + game.paddle1.height)) {
          console.log(`Paddle 1 collision`);
          this.x += 2;
          this.xVel *= -1;
          let random = Math.floor(Math.random() * 4 + 1);;
          if (random === 1) {
            this.yVel = randomY();
          } else {
            this.yVel = -randomY();
          }
        }
      }
      //Paddle 2
      if ((this.x + this.width) >= game.paddle2.x) {
        if (this.y > game.paddle2.y && (this.y < game.paddle2.y + game.paddle2.height) || (this.y + this.height) > game.paddle2.y && (this.y + this.height) < (game.paddle2.y + game.paddle2.height)) {
          console.log(`Paddle 2 collision`);
          this.x -= 2;
          this.xVel *= -1;
          let random = Math.floor(Math.random() * 4 + 1);
          if (random === 1) {
            this.yVel = randomY();
          } else {
            this.yVel = -randomY();
          }
        }
      }
    } else if (this.x < 0 - this.width) {
      // Ball has exited left side of canvas
      console.log(`Player 2 has scored. Score ${game.player2.getScore()}`);
      game.player2.incrementScore();
      this.reset();
      //game.paddle1.resetPosition();
      //game.paddle2.resetPosition();
    } else if (this.x > canvas.width + 1) {
      // Ball has exited right side of canvas
      console.log(`Player 1 has scored. Score ${game.player1.getScore()}`);
      game.player1.incrementScore();
      this.reset();
      //game.paddle1.resetPosition();
      //game.paddle2.resetPosition();
    }

    if (this.y < 10 || (this.y + this.height) > canvas.height) {
      this.yVel *= -1;
    }
  }

  reset() {
    if (game.player1.getScore() >= game.winningScore) {
      game.thereIsAWinner = true;
      game.winner = game.player1.getName();
      game.gameRunning = false;
    }
    if (game.player2.getScore() >= game.winningScore) {
      game.thereIsAWinner = true;
      game.winner = game.player2.getName();
      game.gameRunning = false;
    }
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 - this.height / 2;
    this.xVel = 0;
    this.yVel = 0;
    setTimeout(() => {
      let number = random();
      if (number === 1) {
        this.xVel = -3;
        this.yVel = randomY();
      } else if (number === 2) {
        this.xVel = -3;
        this.yVel = -randomY();
      } else if (number === 3) {
        this.xVel = 3;
        this.yVel = -randomY();
      } else if (number === 4) {
        this.xVel = 3;
        this.yVel = randomY();
      }
    }, 1000);
  }
}

// random choice between 0 and 1
function random() {
  let number = Math.floor(Math.random() * 4 + 1);
  console.log(number);
  return number;
}

function randomY() {
  let randomYVel = Math.floor(Math.random() * 4 + 3);
  console.log(randomYVel);
  return randomYVel;
}
