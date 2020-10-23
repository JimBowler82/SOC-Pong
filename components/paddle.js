class Paddle {
  constructor(x) {
    this.width = 10;
    this.height = 80;
    this.x = x;
    this.y = (canvas.height / 2) - this.height / 2;
    this.yVel = 0;
    this.yAcc = 10;
  }

  drawPaddle() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    if (this.y < 0) {
      this.y = 0
    } else {
      this.yVel += this.yAcc;
      this.y -= this.yVel;
    }
  }

  moveDown() {
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    } else {
      this.yVel += this.yAcc;
      this.y += this.yVel;
    }
  }

  keyUp() {
    this.yVel = 0;
  }

  resetPosition() {
    this.y = (canvas.height / 2) - this.height / 2
  }
}
