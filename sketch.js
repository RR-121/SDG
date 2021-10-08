var form, player, game, database;
var bg_gs0, vid, p1Img, p2Img, p3Img, p4Img;
var p1, p2, p3, p4, allPlayers, players;
var playerCount = 0;
var gameState = 0;
var r1_rw, r1_bw, r1_bw2, r1_d, r2_rw, r2_bw, r2_bw2, r2_d, r3_uw, r3_rw, r3_d, r6_ld, r6_rd, r6_lw, r6_uw, r6_rw;
var stairs_lw, stairs_uw, stairs_bw, stairs_rw1, stairs_rw2, stairs_d, stair1, stair2, stair3, stair4, stair5, stair6;
var house_lw, house_rw, house_bw, house_uw1, house_uw2, house_uw3, house_uw4, house_md, lab_lw, lab_uw, lab_rw, lab_bw;
var r5_lw, r5_uw1, r5_d, r5_uw2, r4_lw, r4_bw, r4_bw2, r4_bw3, r4_d, r4_bw4;
var lab_stairs_lw, lab_stairs_uw, lab_stairs_bw, lab_stairs_rw1, lab_stairs_rw2, lab_stairs_d, lab_stair1, lab_stair2, lab_stair3, lab_stair4, lab_stair5, lab_stair6;
// var f_1, f_2, f_3, f_4, f_5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, f25, f26, f27, f28;
var lab_flooring;
var p1_sr, p2_sr, p3_sr, p4_sr;

function preload() {
  bg_gs0 = loadImage("Images/Background.png");
  vid = createVideo("Video/abc.mp4");
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

  lab_flooring = new Group();
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

  // game.hideFormAfterGS0();

  

  drawSprites();
}
