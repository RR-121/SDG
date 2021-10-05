class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    updateS(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        stair1 = createSprite(-380, 527, 5, 132);
        stair1.shapeColor = "dimGrey";
        stair2 = createSprite(-350, 527, 5, 132);
        stair2.shapeColor = "grey";
        stair3 = createSprite(-320, 527, 5, 132);
        stair3.shapeColor = "darkGrey";
        stair4 = createSprite(-290, 527, 5, 132);
        stair4.shapeColor = "silver";
        stair5 = createSprite(-260, 527, 5, 132);
        stair5.shapeColor = "lightGrey";
        stair6 = createSprite(-230, 527, 5, 132);   
        stair6.shapeColor = "lightGrey";  

        lab_stair1 = createSprite(3366, 607, 5, 132);
        lab_stair1.shapeColor = "dimGrey";
        lab_stair2 = createSprite(3396, 607, 5, 132);
        lab_stair2.shapeColor = "grey";
        lab_stair3 = createSprite(3426, 607, 5, 132);
        lab_stair3.shapeColor = "darkGrey";
        lab_stair4 = createSprite(3456, 607, 5, 132);
        lab_stair4.shapeColor = "silver";
        lab_stair5 = createSprite(3486, 607, 5, 132);
        lab_stair5.shapeColor = "lightGrey";
        lab_stair6 = createSprite(3516, 607, 5, 132);   
        lab_stair6.shapeColor = "lightGrey";  
        
        p1 = createSprite(displayWidth / 2 - 100, displayHeight / 2 - 130);
        p1.addImage(p1Img);
        p2 = createSprite(displayWidth / 2 + 100, displayHeight / 2 - 130);
        p2.addImage(p2Img);
        p3 = createSprite(displayWidth / 2 - 100, displayHeight / 2);
        p3.addImage(p3Img);
        p4 = createSprite(displayWidth / 2 + 100, displayHeight / 2);
        p4.addImage(p4Img);

        // r1_lw = createSprite(-400, -105, 10, 700);
        // r1_lw.shapeColor = "white";
        // r1_uw = createSprite(-100, -450, 600, 10);
        // r1_uw.shapeColor = "white";
        r1_rw = createSprite(200, -105, 10, 700);
        r1_rw.shapeColor = "white";
        r1_bw = createSprite(-200, 245, 410, 10);
        r1_bw.shapeColor = "white";
        r1_bw2 = createSprite(155, 245, 100, 10);
        r1_bw2.shapeColor = "white";
        r1_d = createSprite(55, 245, 100, 10);
        r1_d.shapeColor = "brown";

        // r2_uw = createSprite(300, -450, 200, 10);
        // r2_uw.shapeColor = "white";
        r2_rw = createSprite(400, -355, 10, 200);
        r2_rw.shapeColor = "white";
        r2_bw = createSprite(230, -260, 60, 10);
        r2_bw.shapeColor = "white";
        r2_bw2 = createSprite(380, -260, 40, 10);
        r2_bw2.shapeColor = "white";
        r2_d = createSprite(310, -260, 100, 10);
        r2_d.shapeColor = "brown";

        r3_uw = createSprite(-15, 800, 800, 10);
        r3_uw.shapeColor = "gainsboro";
        r3_rw = createSprite(380, 873, 10, 145);
        r3_rw.shapeColor = "gainsboro";
        r3_d = createSprite(380, 995, 10, 100);
        r3_d.shapeColor = "sienna";

        r4_lw = createSprite(1670, -255, 10, 400);
        r4_bw = createSprite(1815, -55, 300, 10);
        r4_bw2 = createSprite(1960, -70, 10, 30);
        r4_bw3 = createSprite(2057.5, -80, 195, 10);
        r4_d = createSprite(2205, -80, 100, 10);
        r4_d.shapeColor = "sienna";
        r4_bw4 = createSprite(2305, -80, 100, 10);

        r5_lw = createSprite(1405, 885, 10, 350);
        r5_uw1 = createSprite(1430, 715, 50, 10);
        r5_d = createSprite(1505, 715, 100, 10);
        r5_d.shapeColor = "sandyBrown";
        r5_uw2 = createSprite(1955, 715, 800, 10);

        r6_ld = createSprite(600, 995, 10, 100);
        r6_ld.shapeColor = "saddleBrown";
        r6_rd = createSprite(1100, 995, 10, 100);
        r6_rd.shapeColor = "saddleBrown";
        r6_lw = createSprite(600, 650, 10, 600);
        r6_rw = createSprite(1100, 650, 10, 600);
        r6_uw = createSprite(850, 355, 500, 10);

        stairs_lw = createSprite(-397.5, 525, 15, 150);
        stairs_uw = createSprite(-305, 455, 200, 15);
        stairs_bw = createSprite(-305, 600, 200, 15);
        stairs_rw1 = createSprite(-212.5, 467, 15, 25);
        stairs_rw2 = createSprite(-212.5, 588, 15, 25);
        stairs_d = createSprite(-212.5, 526, 15, 100);
        stairs_d.shapeColor = "darkGrey";  

        lab_stairs_lw = createSprite(3350, 605, 15, 150);
        lab_stairs_uw = createSprite(3440, 535, 200, 15);
        lab_stairs_bw = createSprite(3440, 680, 200, 15);
        lab_stairs_rw1 = createSprite(3532.5, 547, 15, 25);
        lab_stairs_rw2 = createSprite(3532.5, 668, 15, 25);
        lab_stairs_d = createSprite(3532.5, 606, 15, 100);
        lab_stairs_d.shapeColor = "darkGrey";

        house_lw = createSprite(-415, 295, 20, 1500);
        house_lw.shapeColor = "darkGrey";
        house_bw = createSprite(975, 1055, 2800, 20);
        house_bw.shapeColor = "darkGrey";
        house_rw = createSprite(2365, 295, 20, 1500);
        house_rw.shapeColor = "darkGrey";
        house_uw1 = createSprite(305,-465, 1460, 20);
        house_uw1.shapeColor = "darkGrey";
        house_uw2 = createSprite(1045, -450, 20, 50);
        house_uw2.shapeColor = "darkGrey";
        house_md = createSprite(1155, -433, 200, 15);
        house_md.shapeColor = "brown";
        house_uw3 = createSprite(1265, -450, 20, 50);
        house_uw3.shapeColor = "darkGrey";
        house_uw4 = createSprite(1825, -465, 1100, 20);
        house_uw4.shapeColor = "darkGrey";

        lab_lw = createSprite(3335, 295, 15, 800);
        lab_lw.shapeColor = "whiteSmoke";
        lab_rw = createSprite(3895, 295, 15, 800);
        lab_rw.shapeColor = "whiteSmoke";
        lab_bw = createSprite(3615, 695, 575, 15);
        lab_bw.shapeColor = "whiteSmoke";
        lab_uw = createSprite(3615, -105, 575, 15);
        lab_uw.shapeColor = "whiteSmoke";

        // r1_lw.visible = false;
        // r1_uw.visible = false;
        // r1_rw.visible = false;
        // r1_bw.visible = false;
        // r1_bw2.visible = false;
        // r1_d.visible = false;
        // r2_uw.visible = false;
        // r2_rw.visible = false;
        // r2_bw.visible = false;
        // r2_bw2.visible = false;
        // r2_d.visible = false;
        // stairs_lw.visible = false;
        // stairs_uw.visible = false;
        // stairs_bw.visible = false;
        // stairs_lw.visible = false;
        // stairs_rw1.visible = false;
        // stairs_rw2.visible = false;
        // stairs_d1.visible = false;
        // stairs_d2.visible = false;
        push();
        p1.scale = 0.3;
        p2.scale = 0.3;
        p3.scale = 0.3;
        p4.scale = 0.3;
        pop();
        players = [p1, p2, p3, p4];
        p1.visible = false;
        p2.visible = false;
        p3.visible = false;
        p4.visible = false;
    }

    hideFormAfterGS0() {
        if (gameState > 0) {
            form.hideContents();
        }
    }

    play() {
        background(0);
        Player.getPlayerInfo();

        var index = 0;

        p1.visible = true;
        p2.visible = true;
        p3.visible = true;
        p4.visible = true;

        var x, y;

        for (var plr in allPlayers) {
            index += 1;

            x = allPlayers[plr].x;
            y = allPlayers[plr].y;

            players[index - 1].x = x;
            players[index - 1].y = y;

            if (index === player.index) {
                camera.position.x = players[index - 1].x;
                camera.position.y = players[index - 1].y;
            }
        }

        if (player.index !== null) {
            if (keyIsDown(UP_ARROW))
                player.posY -= 10;
            if (keyIsDown(DOWN_ARROW))
                player.posY += 10;
            if (keyIsDown(LEFT_ARROW))
                player.posX -= 10;
            if (keyIsDown(RIGHT_ARROW))
                player.posX += 10;
            player.update();
        }

        drawSprites();
    }
}
