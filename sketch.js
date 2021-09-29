var form, player, game, database;
var bg_gs0, vid, p1Img, p2Img, p3Img, p4Img;
var p1, p2, p3, p4, allPlayers, players;
var playerCount = 0;
var gameState = 0;

function preload() {
  bg_gs0 = loadImage("Images/Background.png");
  vid = createVideo("Video/xyz.mp4");
  vid.size(displayWidth, displayHeight - 130);
  vid.hide();
  p1Img = loadImage("Images/p1.png");
  p2Img = loadImage("Images/p2.png");
  p3Img = loadImage("Images/p3.png");
  p4Img = loadImage("Images/p4.png");
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
      player.videoEnded = true;
      player.update();
    });
    Player.getPlayerInfo();
    var completed = 0;
    for (var plr in allPlayers) {
      if (allPlayers[plr].videoEnded === true) {
        completed += 1;
      }
    }
    if (completed === 4) {
      vid.stop();
      vid.hide();
      game.updateS(2);
      game.getState();
    }
  }

  if (gameState === 2) {
    vid.stop();
    vid.hide();
    game.play();
  }

  game.hideFormAfterGS0();

  drawSprites();
}
