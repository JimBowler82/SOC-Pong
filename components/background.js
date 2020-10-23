class Background {
  constructor() {
    
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.setLineDash([15,10]);
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.closePath();
    
  }

  displayScores() {
    ctx.fillStyle = 'white';
    ctx.font = '50px sans-serif';
    ctx.fillText(`${game.player1.getScore()}`, (canvas.width / 2) -150, 90);
    ctx.fillText(`${game.player2.getScore()}`, (canvas.width / 2)  + 115, 90);
  }

  showWinnerScreen(winner) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = '50px sans-serif';
    ctx.fillText(`${winner} has won! 🏆 `, (canvas.width / 2) -250, 190);
  }

  showStartScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = '40px sans-serif';
    ctx.fillText(`Welcome To`, (canvas.width / 2) -110, 90);
    ctx.font = '70px sans-serif';
    ctx.fillText(`SOC Pong!`, (canvas.width / 2) -165, 225);
    ctx.font = '20px sans-serif';
    ctx.fillText(`Press START To Play`, (canvas.width / 2) -100, 350);
  }
}
