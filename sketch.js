// General:
var form, player, game, database;
var bg_gs0, vid, p1Img, p2Img, p3Img, p4Img, visibility_r_img;
var p1, p2, p3, p4, allPlayers, players, vr;
var p1_sr, p2_sr, p3_sr, p4_sr;
var playerCount = 0;
var gameState = 0;

// Rooms:
var r1_rw, r1_bw, r1_bw2, r1_d, r1_d2, r1_rw2, r2_rw, r2_bw, r2_bw2, r2_d, r3_uw, r3_rw, r3_d, r6_ld, r6_rd, r6_lw, r6_uw, r6_rw;
var stairs_lw, stairs_uw, stairs_bw, stairs_rw1, stairs_rw2, stairs_d, stair1, stair2, stair3, stair4, stair5, stair6;
var house_lw, house_rw, house_bw, house_uw1, house_uw2, house_uw3, house_uw4, house_md, lab_lw, lab_uw, lab_rw, lab_bw;
var r5_lw, r5_uw1, r5_d, r5_uw2, r4_lw, r4_bw, r4_bw2, r4_bw3, r4_d, r4_bw4;
var lab_stairs_lw, lab_stairs_uw, lab_stairs_bw, lab_stairs_rw1, lab_stairs_rw2, lab_stairs_d, lab_stair1, lab_stair2, lab_stair3, lab_stair4, lab_stair5, lab_stair6;
var r1_d_open, r1_d2_open, r2_d_open, r3_d_open, r4_d_open, r5_d_open, r6_ld_open, r6_rd_open, md_open;

// Flooring:
var labf1, labf2, r1f, r1fImg, r2f, r3f, r5f, r6f, r4f1, r4f2, r4f3, r4f4, r4f5, r4f6, r4f7, r4f8, r4f9, r4f10, r4f11, r4f12, r4f13, r4f14, r4f15, r4f16, r4f17, r4f18, r4f19, r4f20, r4f21, r4f22, r4f23, r4f24, r4f25, r4f26, r4f27, r4f28, r4f29, r4f30, r4f31, r4f32, r4f33, r4f34, r4f35, r4f36, r4f37, r4f38, r4f39, r4f40, r4f41, r4f42, r4f43, r4f44, r4f45, r4f46, r4f47, r4f48, r4f49, r4f50, r4f51, r4f52, r4f53, r4f54, r4f55, r4f56, r4f57, r4f58, r4f59, r4f60, r4f61, r4f62, r4f63, r4f64, r4f65, r4f66, r4f67, r4f68, r4f69, r4f70, r4f71, r4f72, r4f73, r4f74, r4f75, r4f76, r4f77, r4f78, r4f79, r4f80, r4f81, r4f82, r4f83, r4f84, r4f85, r4f86, r4f87, r4f88, r4f89, r4f90, r4f91, r4f92, r4f93, r4f94, r4f95, r4f96, r4f97, r4f98, r4f99, r4f100, r4f101, r4f102, r4f103, r4f104, r4f105, r4f106, r4f107, r4f108, r4f109, r4f110, r4f111, r4f112, r4f113, r4fx, r4fy;

// Furniture:
var bed, bedImg, sidetable1, sidetable1Img, sidetable2, sidetable2Img, r1cupboard1, r1cupboard1Img, r1cupboard2, r1cupboard2Img;
var bathtub, bathtubImg, sink, sinkImg, toilet, toiletImg;
var kitchenleft, kitchenleftImg, kitchenup, kitchenupImg, fridge, dustbin, fridgeImg, dustbinImg;
var cboard, cboardImg, cmaindesk, cmaindeskImg, cmaindeskchair, cmaindeskchairImg, ctbl1, ctbl1Img, ctbl2, ctbl2Img, ctbl3, ctbl3Img, ctbl4, ctbl4Img, ctbl5, ctbl5Img, ctbl6, ctbl6Img, ctbl7, ctbl7Img, ctbl8, ctbl8Img, ccupboard, ccupboardImg;
var tv, tvImg, sofal, sofalImg, sofar, sofarImg, sofab, sofabImg, r5sidetable, r5sidetableImg, r5sidetable2, r5sidetable2Img, r5centretable;
var diningt, diningtImg, r6cupboardl, r6cupboardlImg, r6cupboardr, r6cupboardrImg, r6shelf1, r6shelf1Img, r6shelf2, r6shelf2Img;
var labtbl1, labtbl1Img, labtbl2, labtbl2Img, labtbl3, labtbl3Img, labcupboard, labcupboardImg, labshelf, labshelfImg;

// Crates:
var crate1, crate2, crate3, crate4, crateImg;
var crate1Group, crate2Group, crate3Group, crate4Group;

// var randNum = Math.round(random(1, 4));

p5.disableFriendlyErrors = true;

function preload() {
  bg_gs0 = loadImage("Images/Background.png");
  vid = createVideo("Video/abc.mp4");
  vid.size(displayWidth, displayHeight - 130);
  vid.hide();
  p1Img = loadImage("Images/p1.png");
  p2Img = loadImage("Images/p2.png");
  p3Img = loadImage("Images/p3.png");
  p4Img = loadImage("Images/p4.png");
  visibility_r_img = loadImage("Images/Visibility radius.png");
  bedImg = loadImage("Images/Bed.png");
  r1fImg = loadImage("Images/r1.png");
  sidetable1Img = loadImage("Images/side table.png");
  sidetable2Img = loadImage("Images/side table 2.png");
  r1cupboard1Img = loadImage("Images/Cupboard1_r1.png");
  r1cupboard2Img = loadImage("Images/Cupboard2_r1.png");
  bathtubImg = loadImage("Images/Bathtub.png");
  sinkImg = loadImage("Images/Sink.png");
  toiletImg = loadImage("Images/Toilet.png");
  kitchenleftImg = loadImage("Images/Kitchen left side.png");
  kitchenupImg = loadImage("Images/Kitchen upper side.png");
  fridgeImg = loadImage("Images/Fridge.png");
  dustbinImg = loadImage("Images/Dustbin.png");
  cboardImg = loadImage("Images/Classroom board.png");
  cmaindeskImg = loadImage("Images/Class main desk.png");
  cmaindeskchairImg = loadImage("Images/Class main desk chair.png");
  ctbl1Img = loadImage("Images/Class table 1.png");
  ctbl2Img = loadImage("Images/Class table 2.png");
  ctbl3Img = loadImage("Images/Class table 3.png");
  ctbl4Img = loadImage("Images/Class table 4.png");
  ctbl5Img = loadImage("Images/Class table 5.png");
  ctbl6Img = loadImage("Images/Class table 6.png");
  ctbl7Img = loadImage("Images/Class table 7.png");
  ctbl8Img = loadImage("Images/Class table 8.png");
  ccupboardImg = loadImage("Images/Class cupboard.png");
  tvImg = loadImage("Images/TV.png");
  sofalImg = loadImage("Images/Sofa 2.png");
  sofarImg = loadImage("Images/Sofa 1.png");
  sofabImg = loadImage("Images/Sofa 3.png");
  r5sidetableImg = loadImage("Images/r5 side table 2.png");
  r5sidetable2Img = loadImage("Images/r5 side table.png");
  diningtImg = loadImage("Images/Dining table.png");
  r6cupboardlImg = loadImage("Images/r6 left cupboard.png");
  r6cupboardrImg = loadImage("Images/r6 right cupboard.png");
  r6shelf1Img = loadImage("Images/r6 shelf.png");
  r6shelf2Img = loadImage("Images/r6 shelf.png");
  labtbl1Img = loadImage("Images/Lab Table 1.png");
  labtbl2Img = loadImage("Images/Lab Table 2.png");
  labtbl3Img = loadImage("Images/Lab Table 3.png");
  labshelfImg = loadImage("Images/Lab Shelf.png");
  labcupboardImg = loadImage("Images/Lab Cupboard.png");
  crateImg = loadImage("Images/Box.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 130);


  database = firebase.database();

  frameRate(60);

  game = new Game();
  game.getState();
  game.start();

  crate1Group = createGroup();
  crate2Group = createGroup();
  crate3Group = createGroup();
  crate4Group = createGroup();
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

    // vid.show();
    // vid.play();
    // vid.position(0, 0)

    // vid.onended(() => {
    //   vid.stop();
    //   vid.hide();
    //   player.videoEnded = true;
    //   player.update();
    // });
    // Player.getPlayerInfo();
    // var completed = 0;
    // for (var plr in allPlayers) {
    //   if (allPlayers[plr].videoEnded === true) {
    //     completed += 1;
    //   }
    // }
    // if (completed === 4) {
    //   vid.stop();
    //   vid.hide();
    game.updateS(2);
    game.getState();
    // }
  }

  if (gameState === 2) {
    vid.stop();
    vid.hide();
    game.play();
    crates_1();
    crates_2();
    crates_3();
    crates_4();
  }

  // game.hideFormAfterGS0();

  drawSprites();
}

function keyTyped() {
  if (gameState === 2) {
    // Player.getPlayerInfo();
    game.getDoorStatus();
    var index = 0;
    for (var plr in allPlayers) {
      index += 1;
      if (index === player.index) {
        if (player.index === 1) {
          if (p1_sr.isTouching(r1_d) || p1_sr.isTouching(r1_d2) || p1_sr.isTouching(r2_d) || p1_sr.isTouching(r3_d) || p1_sr.isTouching(r4_d) || p1_sr.isTouching(r5_d) || p1_sr.isTouching(r6_ld) || p1_sr.isTouching(r6_rd) || p1_sr.isTouching(stairs_d) || p1_sr.isTouching(lab_stairs_d) || p1_sr.isTouching(house_md)) {
            if (p1_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p1_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p1_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p1_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p1_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p1_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p1_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p1_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
        else if (player.index === 2) {
          if (p2_sr.isTouching(r1_d) || p2_sr.isTouching(r1_d2) || p2_sr.isTouching(r2_d) || p2_sr.isTouching(r3_d) || p2_sr.isTouching(r4_d) || p2_sr.isTouching(r5_d) || p2_sr.isTouching(r6_ld) || p2_sr.isTouching(r6_rd) || p2_sr.isTouching(stairs_d) || p2_sr.isTouching(lab_stairs_d) || p2_sr.isTouching(house_md)) {
            if (p2_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p2_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p2_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p2_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p2_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p2_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p2_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p2_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
        else if (player.index === 3) {
          if (p3_sr.isTouching(r1_d) || p3_sr.isTouching(r1_d2) || p3_sr.isTouching(r2_d) || p3_sr.isTouching(r3_d) || p3_sr.isTouching(r4_d) || p3_sr.isTouching(r5_d) || p3_sr.isTouching(r6_ld) || p3_sr.isTouching(r6_rd) || p3_sr.isTouching(stairs_d) || p3_sr.isTouching(lab_stairs_d) || p3_sr.isTouching(house_md)) {
            if (p3_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p3_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p3_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p3_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p3_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p3_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p3_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p3_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
        else if (player.index === 4) {
          if (p4_sr.isTouching(r1_d) || p4_sr.isTouching(r1_d2) || p4_sr.isTouching(r2_d) || p4_sr.isTouching(r3_d) || p4_sr.isTouching(r4_d) || p4_sr.isTouching(r5_d) || p4_sr.isTouching(r6_ld) || p4_sr.isTouching(r6_rd) || p4_sr.isTouching(stairs_d) || p4_sr.isTouching(lab_stairs_d) || p4_sr.isTouching(house_md)) {
            if (p4_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p4_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p4_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p4_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p4_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p4_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p4_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p4_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
      }
    }
  }
}

function crates_1() {
  if (frameCount % 1300 === 0) {
    var x = Math.round(random(-400, 2350));
    var y = Math.round(random(-430, 1040));
    console.log(x, y);
    crate1 = createSprite(x, y);
    crate1.addImage(crateImg);
    crate1.scale = 0.8;
    crate1.velocityX = 0.0001;
    crate1.velocityY = 0.0001;
    crate1.lifetime = 1300;

    crate1.bounceOff(r1_rw);
    crate1.bounceOff(r1_bw);
    crate1.bounceOff(r1_bw2);
    crate1.bounceOff(r1_d);
    crate1.bounceOff(r1_d2);
    crate1.bounceOff(r1_rw2);
    crate1.bounceOff(r2_bw);
    crate1.bounceOff(r2_bw2);
    crate1.bounceOff(r2_d);
    crate1.bounceOff(r2_rw);
    crate1.bounceOff(r3_d);
    crate1.bounceOff(r3_rw);
    crate1.bounceOff(r3_uw);
    crate1.bounceOff(r4_bw);
    crate1.bounceOff(r4_bw2);
    crate1.bounceOff(r4_bw3);
    crate1.bounceOff(r4_bw4);
    crate1.bounceOff(r4_d);
    crate1.bounceOff(r4_lw);
    crate1.bounceOff(r5_d);
    crate1.bounceOff(r5_lw);
    crate1.bounceOff(r5_uw1);
    crate1.bounceOff(r5_uw2);
    crate1.bounceOff(r6_ld);
    crate1.bounceOff(r6_lw);
    crate1.bounceOff(r6_rd);
    crate1.bounceOff(r6_rw);
    crate1.bounceOff(r6_uw);
    crate1.bounceOff(stairs_bw);
    // crate1.bounceOff(stairs_d);
    crate1.bounceOff(stairs_lw);
    crate1.bounceOff(stairs_rw1);
    crate1.bounceOff(stairs_rw2);
    crate1.bounceOff(stairs_uw);
    crate1.bounceOff(lab_stairs_bw);
    // crate1.bounceOff(lab_stairs_d);
    crate1.bounceOff(lab_stairs_lw);
    crate1.bounceOff(lab_stairs_rw1);
    crate1.bounceOff(lab_stairs_rw2);
    crate1.bounceOff(lab_stairs_uw);
    crate1.bounceOff(house_bw);
    crate1.bounceOff(house_lw);
    crate1.bounceOff(house_md);
    crate1.bounceOff(house_rw);
    crate1.bounceOff(house_uw1);
    crate1.bounceOff(house_uw2);
    crate1.bounceOff(house_uw3);
    crate1.bounceOff(house_uw4);
    crate1.bounceOff(lab_uw);
    crate1.bounceOff(lab_bw);
    crate1.bounceOff(lab_rw);
    crate1.bounceOff(lab_lw);
    crate1.bounceOff(bed);
    crate1.bounceOff(sidetable1);
    crate1.bounceOff(sidetable2);
    crate1.bounceOff(r1cupboard1);
    crate1.bounceOff(r1cupboard2);
    crate1.bounceOff(bathtub);
    crate1.bounceOff(sink);
    crate1.bounceOff(toilet);
    crate1.bounceOff(kitchenleft);
    crate1.bounceOff(kitchenup);
    crate1.bounceOff(fridge);
    crate1.bounceOff(dustbin);
    crate1.bounceOff(cboard);
    crate1.bounceOff(cmaindesk);
    crate1.bounceOff(cmaindeskchair);
    crate1.bounceOff(ctbl1);
    crate1.bounceOff(ctbl2);
    crate1.bounceOff(ctbl3);
    crate1.bounceOff(ctbl4);
    crate1.bounceOff(ctbl5);
    crate1.bounceOff(ctbl6);
    crate1.bounceOff(ctbl7);
    crate1.bounceOff(ctbl8);
    crate1.bounceOff(ccupboard);
    crate1.bounceOff(tv);
    crate1.bounceOff(sofal);
    crate1.bounceOff(sofar);
    crate1.bounceOff(sofab);
    crate1.bounceOff(r5sidetable);
    crate1.bounceOff(r5sidetable2);
    crate1.bounceOff(r5centretable);
    crate1.bounceOff(diningt);
    crate1.bounceOff(r6cupboardl);
    crate1.bounceOff(r6cupboardr);
    crate1.bounceOff(r6shelf1);
    crate1.bounceOff(r6shelf2);
    crate1.bounceOff(labtbl1);
    crate1.bounceOff(labtbl2);
    crate1.bounceOff(labtbl3);
    crate1.bounceOff(labcupboard);
    crate1.bounceOff(labshelf);
    crate1.bounceOff(p1);
    crate1.bounceOff(p2);
    crate1.bounceOff(p3);
    crate1.bounceOff(p4);

    crate1Group.add(crate1);
  }
}
function crates_2() {
  if (frameCount % 1300 === 0) {
    var x = Math.round(random(-400, 2350));
    var y = Math.round(random(-430, 1040));
    console.log(x, y);
    crate2 = createSprite(x, y);
    crate2.addImage(crateImg);
    crate2.scale = 0.8;
    crate2.velocityX = 0.0001;
    crate2.velocityY = 0.0001;
    crate2.lifetime = 1300;

    crate2.bounceOff(r1_rw);
    crate2.bounceOff(r1_bw);
    crate2.bounceOff(r1_bw2);
    crate2.bounceOff(r1_d);
    crate2.bounceOff(r1_d2);
    crate2.bounceOff(r1_rw2);
    crate2.bounceOff(r2_bw);
    crate2.bounceOff(r2_bw2);
    crate2.bounceOff(r2_d);
    crate2.bounceOff(r2_rw);
    crate2.bounceOff(r3_d);
    crate2.bounceOff(r3_rw);
    crate2.bounceOff(r3_uw);
    crate2.bounceOff(r4_bw);
    crate2.bounceOff(r4_bw2);
    crate2.bounceOff(r4_bw3);
    crate2.bounceOff(r4_bw4);
    crate2.bounceOff(r4_d);
    crate2.bounceOff(r4_lw);
    crate2.bounceOff(r5_d);
    crate2.bounceOff(r5_lw);
    crate2.bounceOff(r5_uw1);
    crate2.bounceOff(r5_uw2);
    crate2.bounceOff(r6_ld);
    crate2.bounceOff(r6_lw);
    crate2.bounceOff(r6_rd);
    crate2.bounceOff(r6_rw);
    crate2.bounceOff(r6_uw);
    crate2.bounceOff(stairs_bw);
    // crate2.bounceOff(stairs_d);
    crate2.bounceOff(stairs_lw);
    crate2.bounceOff(stairs_rw1);
    crate2.bounceOff(stairs_rw2);
    crate2.bounceOff(stairs_uw);
    crate2.bounceOff(lab_stairs_bw);
    // crate2.bounceOff(lab_stairs_d);
    crate2.bounceOff(lab_stairs_lw);
    crate2.bounceOff(lab_stairs_rw1);
    crate2.bounceOff(lab_stairs_rw2);
    crate2.bounceOff(lab_stairs_uw);
    crate2.bounceOff(house_bw);
    crate2.bounceOff(house_lw);
    crate2.bounceOff(house_md);
    crate2.bounceOff(house_rw);
    crate2.bounceOff(house_uw1);
    crate2.bounceOff(house_uw2);
    crate2.bounceOff(house_uw3);
    crate2.bounceOff(house_uw4);
    crate2.bounceOff(lab_uw);
    crate2.bounceOff(lab_bw);
    crate2.bounceOff(lab_rw);
    crate2.bounceOff(lab_lw);
    crate2.bounceOff(bed);
    crate2.bounceOff(sidetable1);
    crate2.bounceOff(sidetable2);
    crate2.bounceOff(r1cupboard1);
    crate2.bounceOff(r1cupboard2);
    crate2.bounceOff(bathtub);
    crate2.bounceOff(sink);
    crate2.bounceOff(toilet);
    crate2.bounceOff(kitchenleft);
    crate2.bounceOff(kitchenup);
    crate2.bounceOff(fridge);
    crate2.bounceOff(dustbin);
    crate2.bounceOff(cboard);
    crate2.bounceOff(cmaindesk);
    crate2.bounceOff(cmaindeskchair);
    crate2.bounceOff(ctbl1);
    crate2.bounceOff(ctbl2);
    crate2.bounceOff(ctbl3);
    crate2.bounceOff(ctbl4);
    crate2.bounceOff(ctbl5);
    crate2.bounceOff(ctbl6);
    crate2.bounceOff(ctbl7);
    crate2.bounceOff(ctbl8);
    crate2.bounceOff(ccupboard);
    crate2.bounceOff(tv);
    crate2.bounceOff(sofal);
    crate2.bounceOff(sofar);
    crate2.bounceOff(sofab);
    crate2.bounceOff(r5sidetable);
    crate2.bounceOff(r5sidetable2);
    crate2.bounceOff(r5centretable);
    crate2.bounceOff(diningt);
    crate2.bounceOff(r6cupboardl);
    crate2.bounceOff(r6cupboardr);
    crate2.bounceOff(r6shelf1);
    crate2.bounceOff(r6shelf2);
    crate2.bounceOff(labtbl1);
    crate2.bounceOff(labtbl2);
    crate2.bounceOff(labtbl3);
    crate2.bounceOff(labcupboard);
    crate2.bounceOff(labshelf);
    crate2.bounceOff(p1);
    crate2.bounceOff(p2);
    crate2.bounceOff(p3);
    crate2.bounceOff(p4);
    
    crate2Group.add(crate2);
  }
}
function crates_3() {
  if (frameCount % 1300 === 0) {
    var x = Math.round(random(-400, 2350));
    var y = Math.round(random(-430, 1040));
    console.log(x, y);
    crate3 = createSprite(x, y);
    crate3.addImage(crateImg);
    crate3.scale = 0.8;
    crate3.velocityX = 0.0001;
    crate3.velocityY = 0.0001;
    crate3.lifetime = 1300;

    crate3.bounceOff(r1_rw);
    crate3.bounceOff(r1_bw);
    crate3.bounceOff(r1_bw2);
    crate3.bounceOff(r1_d);
    crate3.bounceOff(r1_d2);
    crate3.bounceOff(r1_rw2);
    crate3.bounceOff(r2_bw);
    crate3.bounceOff(r2_bw2);
    crate3.bounceOff(r2_d);
    crate3.bounceOff(r2_rw);
    crate3.bounceOff(r3_d);
    crate3.bounceOff(r3_rw);
    crate3.bounceOff(r3_uw);
    crate3.bounceOff(r4_bw);
    crate3.bounceOff(r4_bw2);
    crate3.bounceOff(r4_bw3);
    crate3.bounceOff(r4_bw4);
    crate3.bounceOff(r4_d);
    crate3.bounceOff(r4_lw);
    crate3.bounceOff(r5_d);
    crate3.bounceOff(r5_lw);
    crate3.bounceOff(r5_uw1);
    crate3.bounceOff(r5_uw2);
    crate3.bounceOff(r6_ld);
    crate3.bounceOff(r6_lw);
    crate3.bounceOff(r6_rd);
    crate3.bounceOff(r6_rw);
    crate3.bounceOff(r6_uw);
    crate3.bounceOff(stairs_bw);
    // crate3.bounceOff(stairs_d);
    crate3.bounceOff(stairs_lw);
    crate3.bounceOff(stairs_rw1);
    crate3.bounceOff(stairs_rw2);
    crate3.bounceOff(stairs_uw);
    crate3.bounceOff(lab_stairs_bw);
    // crate3.bounceOff(lab_stairs_d);
    crate3.bounceOff(lab_stairs_lw);
    crate3.bounceOff(lab_stairs_rw1);
    crate3.bounceOff(lab_stairs_rw2);
    crate3.bounceOff(lab_stairs_uw);
    crate3.bounceOff(house_bw);
    crate3.bounceOff(house_lw);
    crate3.bounceOff(house_md);
    crate3.bounceOff(house_rw);
    crate3.bounceOff(house_uw1);
    crate3.bounceOff(house_uw2);
    crate3.bounceOff(house_uw3);
    crate3.bounceOff(house_uw4);
    crate3.bounceOff(lab_uw);
    crate3.bounceOff(lab_bw);
    crate3.bounceOff(lab_rw);
    crate3.bounceOff(lab_lw);
    crate3.bounceOff(bed);
    crate3.bounceOff(sidetable1);
    crate3.bounceOff(sidetable2);
    crate3.bounceOff(r1cupboard1);
    crate3.bounceOff(r1cupboard2);
    crate3.bounceOff(bathtub);
    crate3.bounceOff(sink);
    crate3.bounceOff(toilet);
    crate3.bounceOff(kitchenleft);
    crate3.bounceOff(kitchenup);
    crate3.bounceOff(fridge);
    crate3.bounceOff(dustbin);
    crate3.bounceOff(cboard);
    crate3.bounceOff(cmaindesk);
    crate3.bounceOff(cmaindeskchair);
    crate3.bounceOff(ctbl1);
    crate3.bounceOff(ctbl2);
    crate3.bounceOff(ctbl3);
    crate3.bounceOff(ctbl4);
    crate3.bounceOff(ctbl5);
    crate3.bounceOff(ctbl6);
    crate3.bounceOff(ctbl7);
    crate3.bounceOff(ctbl8);
    crate3.bounceOff(ccupboard);
    crate3.bounceOff(tv);
    crate3.bounceOff(sofal);
    crate3.bounceOff(sofar);
    crate3.bounceOff(sofab);
    crate3.bounceOff(r5sidetable);
    crate3.bounceOff(r5sidetable2);
    crate3.bounceOff(r5centretable);
    crate3.bounceOff(diningt);
    crate3.bounceOff(r6cupboardl);
    crate3.bounceOff(r6cupboardr);
    crate3.bounceOff(r6shelf1);
    crate3.bounceOff(r6shelf2);
    crate3.bounceOff(labtbl1);
    crate3.bounceOff(labtbl2);
    crate3.bounceOff(labtbl3);
    crate3.bounceOff(labcupboard);
    crate3.bounceOff(labshelf);
    crate3.bounceOff(p1);
    crate3.bounceOff(p2);
    crate3.bounceOff(p3);
    crate3.bounceOff(p4);
    
    crate3Group.add(crate3);
  }
}
function crates_4() {
  if (frameCount % 1300 === 0) {
    var x = Math.round(random(-400, 2350));
    var y = Math.round(random(-430, 1040));
    console.log(x, y);
    crate4 = createSprite(x, y);
    crate4.addImage(crateImg);
    crate4.scale = 0.8;
    crate4.velocityX = 0.0001;
    crate4.velocityY = 0.0001;
    crate4.lifetime = 1300;

    crate4.bounceOff(r1_rw);
    crate4.bounceOff(r1_bw);
    crate4.bounceOff(r1_bw2);
    crate4.bounceOff(r1_d);
    crate4.bounceOff(r1_d2);
    crate4.bounceOff(r1_rw2);
    crate4.bounceOff(r2_bw);
    crate4.bounceOff(r2_bw2);
    crate4.bounceOff(r2_d);
    crate4.bounceOff(r2_rw);
    crate4.bounceOff(r3_d);
    crate4.bounceOff(r3_rw);
    crate4.bounceOff(r3_uw);
    crate4.bounceOff(r4_bw);
    crate4.bounceOff(r4_bw2);
    crate4.bounceOff(r4_bw3);
    crate4.bounceOff(r4_bw4);
    crate4.bounceOff(r4_d);
    crate4.bounceOff(r4_lw);
    crate4.bounceOff(r5_d);
    crate4.bounceOff(r5_lw);
    crate4.bounceOff(r5_uw1);
    crate4.bounceOff(r5_uw2);
    crate4.bounceOff(r6_ld);
    crate4.bounceOff(r6_lw);
    crate4.bounceOff(r6_rd);
    crate4.bounceOff(r6_rw);
    crate4.bounceOff(r6_uw);
    crate4.bounceOff(stairs_bw);
    // crate4.bounceOff(stairs_d);
    crate4.bounceOff(stairs_lw);
    crate4.bounceOff(stairs_rw1);
    crate4.bounceOff(stairs_rw2);
    crate4.bounceOff(stairs_uw);
    crate4.bounceOff(lab_stairs_bw);
    // crate4.bounceOff(lab_stairs_d);
    crate4.bounceOff(lab_stairs_lw);
    crate4.bounceOff(lab_stairs_rw1);
    crate4.bounceOff(lab_stairs_rw2);
    crate4.bounceOff(lab_stairs_uw);
    crate4.bounceOff(house_bw);
    crate4.bounceOff(house_lw);
    crate4.bounceOff(house_md);
    crate4.bounceOff(house_rw);
    crate4.bounceOff(house_uw1);
    crate4.bounceOff(house_uw2);
    crate4.bounceOff(house_uw3);
    crate4.bounceOff(house_uw4);
    crate4.bounceOff(lab_uw);
    crate4.bounceOff(lab_bw);
    crate4.bounceOff(lab_rw);
    crate4.bounceOff(lab_lw);
    crate4.bounceOff(bed);
    crate4.bounceOff(sidetable1);
    crate4.bounceOff(sidetable2);
    crate4.bounceOff(r1cupboard1);
    crate4.bounceOff(r1cupboard2);
    crate4.bounceOff(bathtub);
    crate4.bounceOff(sink);
    crate4.bounceOff(toilet);
    crate4.bounceOff(kitchenleft);
    crate4.bounceOff(kitchenup);
    crate4.bounceOff(fridge);
    crate4.bounceOff(dustbin);
    crate4.bounceOff(cboard);
    crate4.bounceOff(cmaindesk);
    crate4.bounceOff(cmaindeskchair);
    crate4.bounceOff(ctbl1);
    crate4.bounceOff(ctbl2);
    crate4.bounceOff(ctbl3);
    crate4.bounceOff(ctbl4);
    crate4.bounceOff(ctbl5);
    crate4.bounceOff(ctbl6);
    crate4.bounceOff(ctbl7);
    crate4.bounceOff(ctbl8);
    crate4.bounceOff(ccupboard);
    crate4.bounceOff(tv);
    crate4.bounceOff(sofal);
    crate4.bounceOff(sofar);
    crate4.bounceOff(sofab);
    crate4.bounceOff(r5sidetable);
    crate4.bounceOff(r5sidetable2);
    crate4.bounceOff(r5centretable);
    crate4.bounceOff(diningt);
    crate4.bounceOff(r6cupboardl);
    crate4.bounceOff(r6cupboardr);
    crate4.bounceOff(r6shelf1);
    crate4.bounceOff(r6shelf2);
    crate4.bounceOff(labtbl1);
    crate4.bounceOff(labtbl2);
    crate4.bounceOff(labtbl3);
    crate4.bounceOff(labcupboard);
    crate4.bounceOff(labshelf);
    crate4.bounceOff(p1);
    crate4.bounceOff(p2);
    crate4.bounceOff(p3);
    crate4.bounceOff(p4);
    
    crate4Group.add(crate4);
  }
}
