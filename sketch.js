var form, player, game, database, trex, trunning;
var playerCount = 0;
var gameState = 0;

function preload() {
// trunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
}

function setup() {
    createCanvas(displayWidth - 10, displayHeight - 140);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    // vid = createVideo("Video/abc.mp4");
    // vid.play();
    // vid.size(300, 200);
}

function draw() {
  background(255, 255, 255);

  if (playerCount === 4) {
    game.update(1);
  }


  
  drawSprites();
}

// function vidLoad() {
//   vid.loop();
//   vid.size(200, 200);
// }
