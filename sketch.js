var form, player, game, database;
var trex, trunning, bg_gs0, vid;
var p1, p2, p3, p4, allPlayers, players;
var playerCount = 0;
var gameState = 0;
// var vidComplete = 0;

function preload() {
  // trunning = loadAnimation("Images/trex1.png", "Images/trex2.png", "Images/trex3.png");
  bg_gs0 = loadImage("Images/Background.png");
  vid = createVideo("Video/xyz.mp4");
  vid.size(displayWidth, displayHeight - 130);
  vid.hide();
}

function setup() {
  createCanvas(displayWidth, displayHeight - 130);


  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255, 255, 255);

  if (gameState === 0)
    background(bg_gs0);

  if (playerCount === 4 && gameState === 0) {
    game.updateS(1);
  }

  if (gameState === 1) {
    background(255, 255, 255);

    vid.show();
    vid.play();
    vid.position(0, 0)

    vid.onended(() => {
      vid.stop();
      vid.hide();
      // vidComplete += 1;
      player.videoEnded = true;
      player.update();
      Player.getPlayerInfo();
      // Player.updateVid(vidComplete);
      // player.getVidStatus();
      if (player.videoEnded === true) {
        console.log("Done");
        vid.stop();
        vid.hide();
        game.updateS(2);
        game.getState();
      }
    });
  }

  if (gameState === 2) {
    vid.stop();
    vid.hide();
    game.play();
  }

  console.log();

  game.hideFormAfterGS0();

  drawSprites();
}
