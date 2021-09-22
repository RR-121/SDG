var form, player, game, database, trex, trunning, bg_gs0;
var playerCount = 0;
var gameState = 0;

function preload() {
  trunning = loadAnimation("Images/trex1.png", "Images/trex2.png", "Images/trex3.png");///
  bg_gs0 = loadImage("Images/Background.png");///
}

function setup() {
  createCanvas(displayWidth, displayHeight - 130);


  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  trex = createSprite(displayWidth / 2, displayHeight / 2, 100, 100);///
  trex.addAnimation("Running", trunning);///
  trex.visible = false;///

  // vid = createVideo("Video/abc.mp4");
  // vid.play();
  // vid.size(300, 200);
}

function draw() {
  background(255, 255, 255);

  if (gameState === 0)
    background(bg_gs0);///

  if (playerCount === 4) {
    game.update(1);
    trex.visible = true;///
    game.tutorial();///
  }

  drawSprites();
}

// function vidLoad() {
//   vid.loop();
//   vid.size(200, 200);
// }
