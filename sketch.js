var form, player, game, database, vid;
var playerCount = 0;
var gameState = 0;



function setup() {
  createCanvas(displayWidth - 10, displayHeight - 140);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
  background(255, 255, 255);

  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    vid = createVideo("Video/abc.mp4");
    vid.size(200, 100);
    vid.loop();
  }

  drawSprites();
}