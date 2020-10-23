// DOM References
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Game Settings
canvas.width = 800;
canvas.height = 400;

let game = new Game();

// Event Listeners
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

// listens for button presses to move paddles
document.addEventListener("keydown", (event) => {
  if (event.key === "w") {
    game.paddle1.moveUp();
  }
  if (event.key === "s") {
    game.paddle1.moveDown();
  }
  if (event.key === "ArrowDown") {
    game.paddle2.moveDown();
  }
  if (event.key === "ArrowUp") {
    game.paddle2.moveUp();
  }
});

// on key up, resets velocities of paddles to 0
document.addEventListener("keyup", (event) => {
  if (event.key === "w") {
    game.paddle1.keyUp();
  }
  if (event.key === "s") {
    game.paddle1.keyUp();
  }
  if (event.key === "ArrowDown") {
    game.paddle2.keyUp();
  }
  if (event.key === "ArrowUp") {
    game.paddle2.keyUp();
  }
});


function run() {

  game.gameLoop();

  requestAnimationFrame(run);
}


function startGame() {
  game.gameRunning = true;
}

function resetGame() {
  game.reset();
}

requestAnimationFrame(run);
