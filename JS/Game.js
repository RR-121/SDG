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

        stair1 = createSprite(-373.5, 527, 33, 132);
        stair1.shapeColor = "dimGrey";
        stair2 = createSprite(-339.5, 527, 33, 132);
        stair2.shapeColor = "grey";
        stair3 = createSprite(-305.5, 527, 33, 132);
        stair3.shapeColor = "darkGrey";
        stair4 = createSprite(-271.5, 527, 33, 132);
        stair4.shapeColor = "silver";
        // stair5 = createSprite(-252, 527, 30.5, 132);
        // stair5.shapeColor = rgb(200, 200, 200);
        stair6 = createSprite(-237.5, 527, 33, 132);
        stair6.shapeColor = "lightGrey";

        lab_stair1 = createSprite(3374, 607, 33, 132);
        lab_stair1.shapeColor = "dimGrey";
        lab_stair2 = createSprite(3408, 607, 33, 132);
        lab_stair2.shapeColor = "grey";
        lab_stair3 = createSprite(3442, 607, 33, 132);
        lab_stair3.shapeColor = "darkGrey";
        lab_stair4 = createSprite(3476, 607, 33, 132);
        lab_stair4.shapeColor = "silver";
        // lab_stair5 = createSprite(3486, 607, 33, 132);
        // lab_stair5.shapeColor = "lightGrey";
        lab_stair6 = createSprite(3510, 607, 33, 132);
        lab_stair6.shapeColor = "lightGrey";

        r1f = createSprite(-105, -107.5, 600, 695);
        r1f.addImage(r1fImg);
        r2f = createSprite(315, -310, 220, 290);
        r2f.shapeColor = "lightSteelBlue";
        r3f = createSprite(-15, 925, 780, 240);
        r3f.shapeColor = "burlyWood";
        if (2 * 2 === 4) {
            r4fx = 1675 + 25;
            r4fy = -455 + 25;

            r4f1 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f2 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f3 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f4 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f5 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f6 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f7 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f8 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f9 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f10 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f11 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f12 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f13 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f14 = createSprite(r4fx, r4fy, 17, 50);

            r4fx = 1700;
            r4fy += 51;

            r4f15 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f16 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f17 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f18 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f19 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f20 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f21 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f22 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f23 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f24 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f25 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f26 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f27 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f28 = createSprite(r4fx, r4fy, 17, 50);

            r4fx = 1700;
            r4fy += 51;

            r4f29 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f30 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f31 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f32 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f33 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f34 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f35 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f36 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f37 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f38 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f39 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f40 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f41 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f42 = createSprite(r4fx, r4fy, 17, 50);


            r4fx = 1700;
            r4fy += 51;

            r4f43 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f44 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f45 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f46 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f47 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f48 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f49 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f50 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f51 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f52 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f53 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f54 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f55 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f56 = createSprite(r4fx, r4fy, 17, 50);

            r4fx = 1700;
            r4fy += 51;

            r4f57 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f58 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f59 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f60 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f61 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f62 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f63 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f64 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f65 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f66 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f67 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f68 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f69 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f70 = createSprite(r4fx, r4fy, 17, 50);

            r4fx = 1700;
            r4fy += 51;

            r4f71 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f72 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f73 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f74 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f75 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f76 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f77 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f78 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f79 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f80 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f81 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f82 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f83 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f84 = createSprite(r4fx, r4fy, 17, 50);

            r4fx = 1700;
            r4fy += 51;

            r4f85 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f86 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f87 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f88 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f89 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f90 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f91 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f92 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f93 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f94 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f95 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f96 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 51;
            r4f97 = createSprite(r4fx, r4fy, 50, 50);
            r4fx += 34.5;
            r4f98 = createSprite(r4fx, r4fy, 17, 50); //38 and 14

            r4fx = 1700;
            r4fy += 45;

            r4f99 = createSprite(r4fx, r4fy, 50, 38);
            r4fx += 51;
            r4f100 = createSprite(r4fx, r4fy, 50, 38);
            r4fx += 51;
            r4f101 = createSprite(r4fx, r4fy, 50, 38);
            r4fx += 51;
            r4f102 = createSprite(r4fx, r4fy, 50, 38);
            r4fx += 51;
            r4f103 = createSprite(r4fx, r4fy, 50, 38);
            r4fx += 51;
            r4f104 = createSprite(r4fx - 12.5, r4fy, 25, 38);
            r4f113 = createSprite(r4fx + 12.5, r4fy - 12, 25, 14);
            r4fx += 51;
            r4fy -= 12;
            r4f105 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 51;
            r4f106 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 51;
            r4f107 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 51;
            r4f108 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 51;
            r4f109 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 51;
            r4f110 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 51;
            r4f111 = createSprite(r4fx, r4fy, 50, 14);
            r4fx += 34.5;
            r4f112 = createSprite(r4fx, r4fy, 17, 14);
        }
        r5f = createSprite(1882.5, 882.5, 945, 325);
        r5f.shapeColor = (255, 220, 210);
        r6f = createSprite(850, 702.5, 490, 685);
        r6f.shapeColor = (195, 195, 195);
        labf1 = createSprite(3690, 215, 695, 625);
        labf1.shapeColor = "whiteSmoke";
        labf2 = createSprite(3782.25, 607.5, 510.5, 160)
        labf2.shapeColor = "whiteSmoke";

        bed = createSprite(-272, -107.5, 100, 40);
        bed.addImage(bedImg);
        bed.scale = 0.5;
        bed.setCollider("rectangle", 2, -2, 540, 280);

        sidetable1 = createSprite(-373, 4, 30, 80);
        sidetable1.addImage(sidetable1Img);
        sidetable1.scale = 0.25;
        sidetable1.setCollider("rectangle", -20, 0);

        sidetable2 = createSprite(-373, -222, 30, 80);
        sidetable2.addImage(sidetable2Img);
        sidetable2.scale = 0.25;
        sidetable2.setCollider("rectangle", -20, 0);

        r1cupboard1 = createSprite(-150, -410);
        r1cupboard1.addImage(r1cupboard1Img);
        r1cupboard1.scale = 0.65;
        r1cupboard1.setCollider("rectangle", 0, 0, 450, 165)

        r1cupboard2 = createSprite(-150, 200);
        r1cupboard2.addImage(r1cupboard2Img);
        r1cupboard2.scale = 0.7;
        r1cupboard2.setCollider("rectangle", -11, 0, 270, 127);

        bathtub = createSprite(315, -420);
        bathtub.addImage(bathtubImg);

        sink = createSprite(397, -325);
        sink.addImage(sinkImg);
        sink.scale = 0.16;

        toilet = createSprite(373, -240);
        toilet.addImage(toiletImg);
        toilet.scale = 0.4;
        toilet.setCollider("rectangle", 5, -3, 215, 125);

        kitchenup = createSprite(-87, 855);
        kitchenup.addImage(kitchenupImg);
        kitchenup.setCollider("rectangle", 0, 0, 445, 82);

        kitchenleft = createSprite(-350, 925);
        kitchenleft.addImage(kitchenleftImg);
        kitchenleft.setCollider("rectangle", 0, 0, 100, 240);

        fridge = createSprite(190, 850);
        fridge.addImage(fridgeImg);

        dustbin = createSprite(260, 840);
        dustbin.addImage(dustbinImg);
        dustbin.setCollider("circle", 0, 0);

        cboard = createSprite(1700, -310);
        cboard.addImage(cboardImg);
        cboard.scale = 0.75;
        cboard.setCollider("rectangle", -20, -5, 30, 260);

        cmaindesk = createSprite(1800, -310);
        cmaindesk.addImage(cmaindeskImg);
        cmaindesk.scale = 0.7;

        cmaindeskchair = createSprite(1745, -310);
        cmaindeskchair.addImage(cmaindeskchairImg);
        cmaindeskchair.scale = 0.7;
        cmaindeskchair.setCollider("rectangle", 30, 10, 80, 120, 135);

        ctbl1 = createSprite(1950, -400);
        ctbl1.addImage(ctbl1Img);
        ctbl1.scale = 0.7;
        ctbl1.setCollider("rectangle", 8, 5, 110, 137);

        ctbl2 = createSprite(2050, -400);
        ctbl2.addImage(ctbl2Img);
        ctbl2.scale = 0.7;
        ctbl2.setCollider("rectangle", 5, 0, 100, 137);

        ctbl3 = createSprite(2150, -400);
        ctbl3.addImage(ctbl3Img);
        ctbl3.scale = 0.7;
        ctbl3.setCollider("rectangle", 0, 0, 80, 139);

        ctbl4 = createSprite(2250, -400);
        ctbl4.addImage(ctbl4Img);
        ctbl4.scale = 0.7;
        ctbl4.setCollider("rectangle", 0, 0, 95, 137);

        ctbl5 = createSprite(1950, -225);
        ctbl5.addImage(ctbl5Img);
        ctbl5.scale = 0.7;
        ctbl5.setCollider("rectangle", 8, 0, 110, 137);

        ctbl6 = createSprite(2050, -225);
        ctbl6.addImage(ctbl6Img);
        ctbl6.scale = 0.7;
        ctbl6.setCollider("rectangle", 5, 0, 100, 137);

        ctbl7 = createSprite(2160, -225);
        ctbl7.addImage(ctbl7Img);
        ctbl7.scale = 0.7;
        ctbl7.setCollider("rectangle", 0, 0, 90, 137);

        ctbl8 = createSprite(2250, -225);
        ctbl8.addImage(ctbl8Img);
        ctbl8.scale = 0.7;
        ctbl8.setCollider("rectangle", 0, 0, 95, 137);

        ccupboard = createSprite(1814, -79);
        ccupboard.addImage(ccupboardImg);

        tv = createSprite(2130, 747);
        tv.addImage(tvImg);
        tv.scale = 0.3;
        tv.setCollider("rectangle", 0, 0, 500, 170);

        sofal = createSprite(1960, 870);
        sofal.addImage(sofalImg);
        sofal.scale = 0.41;
        sofal.setCollider("rectangle", 0, 0, 200, 335);

        sofar = createSprite(2300, 870);
        sofar.addImage(sofarImg);
        sofar.scale = 0.4;
        sofar.setCollider("rectangle", 0, 0, 200, 335);

        sofab = createSprite(2130, 997);
        sofab.addImage(sofabImg);
        sofab.scale = 0.45;
        sofab.setCollider("rectangle", 0, 0, 480, 200);

        r5sidetable = createSprite(1960, 990);
        r5sidetable.addImage(r5sidetableImg);
        r5sidetable.scale = 0.4;
        r5sidetable.setCollider("circle", 0, 0, 95);

        r5sidetable2 = createSprite(2300, 990);
        r5sidetable2.addImage(r5sidetable2Img);
        r5sidetable2.scale = 0.4;
        r5sidetable2.setCollider("circle", 0, 0, 95);

        r5centretable = createSprite(2130, 885, 180, 80);

        diningt = createSprite(855, 715);
        diningt.addImage(diningtImg);
        diningt.scale = 0.7;
        diningt.setCollider("rectangle", 0, 0, 200, 400);

        r6cupboardl = createSprite(656, 442);
        r6cupboardl.addImage(r6cupboardlImg);
        r6cupboardl.scale = 0.74;

        r6cupboardr = createSprite(1045, 442);
        r6cupboardr.addImage(r6cupboardrImg);
        r6cupboardr.scale = 0.74;

        r6shelf1 = createSprite(631, 700);
        r6shelf1.addImage(r6shelf1Img);
        r6shelf1.scale = 0.6;

        r6shelf2 = createSprite(1069, 700);
        r6shelf2.addImage(r6shelf2Img);
        r6shelf2.scale = 0.6;

        labtbl1 = createSprite(3760, 420);
        labtbl1.addImage(labtbl1Img);
        labtbl1.scale = 0.7;

        labtbl2 = createSprite(3990, 420);
        labtbl2.addImage(labtbl2Img);
        labtbl2.scale = 0.7;

        labtbl3 = createSprite(3875, 130);
        labtbl3.addImage(labtbl3Img);
        labtbl3.scale = 0.7;

        labshelf = createSprite(3690, -62);
        labshelf.addImage(labshelfImg);
        labshelf.scale = 0.8;

        labcupboard = createSprite(3410, 348);
        labcupboard.addImage(labcupboardImg);
        labcupboard.scale = 0.65;

        p1 = createSprite(displayWidth / 2 - 100, displayHeight / 2 - 130);
        p1.addImage(p1Img);
        p2 = createSprite(displayWidth / 2 + 100, displayHeight / 2 - 130);
        p2.addImage(p2Img);
        p3 = createSprite(displayWidth / 2 - 100, displayHeight / 2);
        p3.addImage(p3Img);
        p4 = createSprite(displayWidth / 2 + 100, displayHeight / 2);
        p4.addImage(p4Img);

        // p1.debug = true;
        p1.setCollider("circle", 0, -3, 110);
        // p2.debug = true;
        p2.setCollider("circle", 0, -3, 110);
        // p3.debug = true;
        p3.setCollider("circle", 0, -3, 110);
        // p4.debug = true;
        p4.setCollider("circle", 0, -3, 110);

        p1_sr = createSprite(p1.x, p1.y, 90, 90);
        p1_sr.setCollider("circle", 0, 0, 120);
        p1_sr.visible = false;
        p2_sr = createSprite(p2.x, p2.y, 90, 90);
        p2_sr.setCollider("circle", 0, 0, 120);
        p2_sr.visible = false;
        p3_sr = createSprite(p3.x, p3.y, 90, 90);
        p3_sr.setCollider("circle", 0, 0, 120);
        p3_sr.visible = false;
        p4_sr = createSprite(p4.x, p4.y, 90, 90);
        p4_sr.setCollider("circle", 0, 0, 120);
        p4_sr.visible = false;

        r1_rw = createSprite(200, -9, 10, 508);
        r1_rw.shapeColor = "white";
        r1_bw = createSprite(-200, 245, 410, 10);
        r1_bw.shapeColor = "white";
        r1_bw2 = createSprite(155, 245, 100, 10);
        r1_bw2.shapeColor = "white";
        r1_d = createSprite(55, 245, 100, 10);
        r1_d.shapeColor = "brown";
        r1_d2 = createSprite(200, -313, 10, 100);
        r1_d2.shapeColor = "brown";
        r1_rw2 = createSprite(200, -408, 10, 96);
        r1_rw2.shapeColor = "white";

        r2_rw = createSprite(430, -305, 10, 300);
        r2_rw.shapeColor = "white";
        r2_bw = createSprite(215, -160, 30, 10);
        r2_bw.shapeColor = "white";
        r2_bw2 = createSprite(380, -160, 100, 10);
        r2_bw2.shapeColor = "white";
        r2_d = createSprite(280, -160, 100, 10);
        r2_d.shapeColor = "brown";

        r3_uw = createSprite(-15, 800, 800, 10);
        r3_uw.shapeColor = "gainsboro";
        r3_rw = createSprite(380, 873, 10, 145);
        r3_rw.shapeColor = "gainsboro";
        r3_d = createSprite(380, 995, 10, 100);
        r3_d.shapeColor = "sienna";

        r4_lw = createSprite(1670, -255, 10, 400);
        r4_lw.shapeColor = "gainsboro";
        r4_bw = createSprite(1815, -55, 300, 10);
        r4_bw.shapeColor = "gainsboro";
        r4_bw2 = createSprite(1960, -70, 10, 30);
        r4_bw2.shapeColor = "gainsboro";
        r4_bw3 = createSprite(2057.5, -80, 195, 10);
        r4_bw3.shapeColor = "gainsboro";
        r4_d = createSprite(2205, -80, 100, 10);
        r4_d.shapeColor = "sienna";
        r4_bw4 = createSprite(2305, -80, 100, 10);
        r4_bw4.shapeColor = "gainsboro";

        r5_lw = createSprite(1405, 885, 10, 350);
        r5_lw.shapeColor = "darkGrey";
        r5_uw1 = createSprite(1430, 715, 50, 10);
        r5_uw1.shapeColor = "darkGrey";
        r5_d = createSprite(1505, 715, 100, 10);
        r5_d.shapeColor = "sandyBrown";
        r5_uw2 = createSprite(1955, 715, 800, 10);
        r5_uw2.shapeColor = "darkGrey";

        r6_ld = createSprite(600, 995, 10, 100);
        r6_ld.shapeColor = "saddleBrown";
        r6_rd = createSprite(1100, 995, 10, 100);
        r6_rd.shapeColor = "saddleBrown";
        r6_lw = createSprite(600, 650, 10, 600);
        r6_lw.shapeColor = "darkGrey";
        r6_rw = createSprite(1100, 650, 10, 600);
        r6_rw.shapeColor = "darkGrey";
        r6_uw = createSprite(850, 355, 500, 10);
        r6_uw.shapeColor = "darkGrey";

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
        house_uw1 = createSprite(323.5, -465, 1498, 20);
        house_uw1.shapeColor = "darkGrey";
        house_uw2 = createSprite(1070, -450, 20, 50);
        house_uw2.shapeColor = "darkGrey";
        house_md = createSprite(1180, -433, 200, 15);
        house_md.shapeColor = "brown";
        house_uw3 = createSprite(1290, -450, 20, 50);
        house_uw3.shapeColor = "darkGrey";
        house_uw4 = createSprite(1837.5, -465, 1075, 20);
        house_uw4.shapeColor = "darkGrey";

        lab_lw = createSprite(3335, 295, 15, 800);
        lab_lw.shapeColor = "ghostWhite";
        lab_rw = createSprite(4045, 295, 15, 800);
        lab_rw.shapeColor = "ghostWhite";
        lab_bw = createSprite(3690, 695, 725, 15);
        lab_bw.shapeColor = "ghostWhite";
        lab_uw = createSprite(3690, -105, 725, 15);
        lab_uw.shapeColor = "ghostWhite";

        // vr = createSprite(displayWidth / 2, displayHeight / 2 - 50);
        // vr.scale = 2;
        // vr.addImage(visibility_r_img);



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

        p1.visible = true;
        p2.visible = true;
        p3.visible = true;
        p4.visible = true;

        p1_sr.x = p1.x;
        p1_sr.y = p1.y;
        p2_sr.x = p2.x;
        p2_sr.y = p2.y;
        p3_sr.x = p3.x;
        p3_sr.y = p3.y;
        p4_sr.x = p4.x;
        p4_sr.y = p4.y;


        var x, y;
        var index = 0;

        for (var plr in allPlayers) {
            index += 1;

            x = allPlayers[plr].x;
            y = allPlayers[plr].y;

            players[index - 1].x = x;
            players[index - 1].y = y;

            if (x > 3350 && x < 3530 && y > 535 && y < 680) {
                Player.getPlayerInfo();
                fill("white");
                text("Press 'space' to go up the stairs.", displayWidth / 2, displayHeight / 2);
                if (keyIsDown(32)) {
                    player.posX = -170;
                    player.posY = 526;
                    player.update();
                }
            }
            else if (x > -390 && x < -220 && y > 460 && y < 590) {
                Player.getPlayerInfo();
                fill("white");
                text("Press 'space' to go down the stairs.", displayWidth / 2, displayHeight / 2);
                if (keyIsDown(32)) {
                    player.posX = 3550;
                    player.posY = 606;
                    player.update();
                }
            }

            if (index === player.index) {
                camera.position.x = players[index - 1].x;
                camera.position.y = players[index - 1].y;
            }

            if (player.index === 1) {
                // vr.x = p1.x;
                // vr.y = p1.y;
                // console.log("Initial position of P1: " + p1.y)
                if (keyIsDown(UP_ARROW)) {
                    p1.velocityY = -5;
                    player.posY = p1.y;
                    // vr.y = player.posY;
                    // console.log("P1's velocity Y: " + p1.velocityY);
                }
                if (keyIsDown(DOWN_ARROW)) {
                    p1.velocityY = 5;
                    player.posY = p1.y;
                    // vr.y = player.posY;
                }
                if (keyWentUp("up") || keyWentUp("down")) {
                    p1.velocityY = 0;
                    player.posY = p1.y;
                    // vr.y = player.posY;
                }
                if (keyIsDown(LEFT_ARROW)) {
                    p1.velocityX = -5;
                    player.posX = p1.x;
                    // vr.x = player.posX;
                }
                if (keyIsDown(RIGHT_ARROW)) {
                    p1.velocityX = 5;
                    player.posX = p1.x;
                    // vr.x = player.posX;
                }
                if (keyWentUp("left") || keyWentUp("right")) {
                    p1.velocityX = 0;
                    player.posX = p1.x;
                    // vr.x = player.posX;
                }
                player.update();
            }
            else if (player.index === 2) {
                // vr.x = p2.x;
                // vr.y = p2.y
                // console.log("Initial position of P2: " + p2.y)
                if (keyIsDown(UP_ARROW)) {
                    p2.velocityY = -5;
                    player.posY = p2.y;
                    // vr.y = player.posY;
                    // console.log("Up arrow is pressed for P2 at y: " + p2.y);
                }
                if (keyIsDown(DOWN_ARROW)) {
                    p2.velocityY = 5;
                    player.posY = p2.y;
                    // vr.y = player.posY;
                }
                if (keyWentUp("up") || keyWentUp("down")) {
                    p2.velocityY = 0;
                    player.posY = p2.y;
                    // vr.y = player.posY;
                }
                if (keyIsDown(LEFT_ARROW)) {
                    p2.velocityX = -5;
                    player.posX = p2.x;
                    // vr.x = player.posX;
                }
                if (keyIsDown(RIGHT_ARROW)) {
                    p2.velocityX = 5;
                    player.posX = p2.x;
                    // vr.x = player.posX;
                }
                if (keyWentUp("left") || keyWentUp("right")) {
                    p2.velocityX = 0;
                    player.posX = p2.x;
                    // vr.x = player.posX;
                }
                player.update();
            }
            else if (player.index === 3) {
                // vr.x = p3.x;
                // vr.y = p3.y;
                if (keyIsDown(UP_ARROW)) {
                    p3.velocityY = -5;
                    player.posY = p3.y;
                    // vr.y = player.posY;
                }
                if (keyIsDown(DOWN_ARROW)) {
                    p3.velocityY = 5;
                    player.posY = p3.y;
                    // vr.y = player.posY;
                }
                if (keyWentUp("up") || keyWentUp("down")) {
                    p3.velocityY = 0;
                    player.posY = p3.y;
                    // vr.y = player.posY;
                }
                if (keyIsDown(LEFT_ARROW)) {
                    p3.velocityX = -5;
                    player.posX = p3.x;
                    // vr.x = player.posX;
                }
                if (keyIsDown(RIGHT_ARROW)) {
                    p3.velocityX = 5;
                    player.posX = p3.x;
                    // vr.x = player.posX;
                }
                if (keyWentUp("left") || keyWentUp("right")) {
                    p3.velocityX = 0;
                    player.posX = p3.x;
                    // vr.x = player.posX;
                }
                player.update();
            }
            else if (player.index === 4) {
                // vr.x = p4.x;
                // vr.y = p4.y;
                if (keyIsDown(UP_ARROW)) {
                    p4.velocityY = -5;
                    player.posY = p4.y;
                    // vr.y = player.posY;
                }
                if (keyIsDown(DOWN_ARROW)) {
                    p4.velocityY = 5;
                    player.posY = p4.y;
                    // vr.y = player.posY;
                }
                if (keyWentUp("up") || keyWentUp("down")) {
                    p4.velocityY = 0;
                    player.posY = p4.y;
                    // vr.y = player.posY;
                }
                if (keyIsDown(LEFT_ARROW)) {
                    p4.velocityX = -5;
                    player.posX = p4.x;
                    // vr.x = player.posX;
                }
                if (keyIsDown(RIGHT_ARROW)) {
                    p4.velocityX = 5;
                    player.posX = p4.x;
                    // vr.x = player.posX;
                }
                if (keyWentUp("left") || keyWentUp("right")) {
                    p4.velocityX = 0;
                    player.posX = p4.x;
                    // vr.x = player.posX;
                }
                player.update();
            }
        }


        p1.bounceOff(p2);
        p1.bounceOff(p3);
        p1.bounceOff(p4);
        p2.bounceOff(p3);
        p2.bounceOff(p4);
        p3.bounceOff(p4);

        p1.bounceOff(r1_rw);
        p1.bounceOff(r1_bw);
        p1.bounceOff(r1_bw2);
        p1.bounceOff(r1_d);
        p1.bounceOff(r1_d2);
        p1.bounceOff(r1_rw2);
        p1.bounceOff(r2_bw);
        p1.bounceOff(r2_bw2);
        p1.bounceOff(r2_d);
        p1.bounceOff(r2_rw);
        p1.bounceOff(r3_d);
        p1.bounceOff(r3_rw);
        p1.bounceOff(r3_uw);
        p1.bounceOff(r4_bw);
        p1.bounceOff(r4_bw2);
        p1.bounceOff(r4_bw3);
        p1.bounceOff(r4_bw4);
        p1.bounceOff(r4_d);
        p1.bounceOff(r4_lw);
        p1.bounceOff(r5_d);
        p1.bounceOff(r5_lw);
        p1.bounceOff(r5_uw1);
        p1.bounceOff(r5_uw2);
        p1.bounceOff(r6_ld);
        p1.bounceOff(r6_lw);
        p1.bounceOff(r6_rd);
        p1.bounceOff(r6_rw);
        p1.bounceOff(r6_uw);
        p1.bounceOff(stairs_bw);
        p1.bounceOff(stairs_d);
        p1.bounceOff(stairs_lw);
        p1.bounceOff(stairs_rw1);
        p1.bounceOff(stairs_rw2);
        p1.bounceOff(stairs_uw);
        p1.bounceOff(lab_stairs_bw);
        p1.bounceOff(lab_stairs_d);
        p1.bounceOff(lab_stairs_lw);
        p1.bounceOff(lab_stairs_rw1);
        p1.bounceOff(lab_stairs_rw2);
        p1.bounceOff(lab_stairs_uw);
        p1.bounceOff(house_bw);
        p1.bounceOff(house_lw);
        p1.bounceOff(house_md);
        p1.bounceOff(house_rw);
        p1.bounceOff(house_uw1);
        p1.bounceOff(house_uw2);
        p1.bounceOff(house_uw3);
        p1.bounceOff(house_uw4);
        p1.bounceOff(lab_uw);
        p1.bounceOff(lab_bw);
        p1.bounceOff(lab_rw);
        p1.bounceOff(lab_lw);
        p1.bounceOff(bed);
        p1.bounceOff(sidetable1);
        p1.bounceOff(sidetable2);
        p1.bounceOff(r1cupboard1);
        p1.bounceOff(r1cupboard2);
        p1.bounceOff(bathtub);
        p1.bounceOff(sink);
        p1.bounceOff(toilet);
        p1.bounceOff(kitchenleft);
        p1.bounceOff(kitchenup);
        p1.bounceOff(fridge);
        p1.bounceOff(dustbin);
        p1.bounceOff(cboard);
        p1.bounceOff(cmaindesk);
        p1.bounceOff(cmaindeskchair);
        p1.bounceOff(ctbl1);
        p1.bounceOff(ctbl2);
        p1.bounceOff(ctbl3);
        p1.bounceOff(ctbl4);
        p1.bounceOff(ctbl5);
        p1.bounceOff(ctbl6);
        p1.bounceOff(ctbl7);
        p1.bounceOff(ctbl8);
        p1.bounceOff(ccupboard);
        p1.bounceOff(tv);
        p1.bounceOff(sofal);
        p1.bounceOff(sofar);
        p1.bounceOff(sofab);
        p1.bounceOff(r5sidetable);
        p1.bounceOff(r5sidetable2);
        p1.bounceOff(r5centretable);
        p1.bounceOff(diningt);
        p1.bounceOff(r6cupboardl);
        p1.bounceOff(r6cupboardr);
        p1.bounceOff(r6shelf1);
        p1.bounceOff(r6shelf2);
        p1.bounceOff(labtbl1);
        p1.bounceOff(labtbl2);
        p1.bounceOff(labtbl3);
        p1.bounceOff(labcupboard);
        p1.bounceOff(labshelf);
        p1.bounceOff(crate1Group);
        p1.bounceOff(crate2Group);
        p1.bounceOff(crate3Group);
        p1.bounceOff(crate4Group);

        p2.bounceOff(r1_rw);
        p2.bounceOff(r1_bw);
        p2.bounceOff(r1_bw2);
        p2.bounceOff(r1_d);
        p2.bounceOff(r1_d2);
        p2.bounceOff(r1_rw2);
        p2.bounceOff(r2_bw);
        p2.bounceOff(r2_bw2);
        p2.bounceOff(r2_d);
        p2.bounceOff(r2_rw);
        p2.bounceOff(r3_d);
        p2.bounceOff(r3_rw);
        p2.bounceOff(r3_uw);
        p2.bounceOff(r4_bw);
        p2.bounceOff(r4_bw2);
        p2.bounceOff(r4_bw3);
        p2.bounceOff(r4_bw4);
        p2.bounceOff(r4_d);
        p2.bounceOff(r4_lw);
        p2.bounceOff(r5_d);
        p2.bounceOff(r5_lw);
        p2.bounceOff(r5_uw1);
        p2.bounceOff(r5_uw2);
        p2.bounceOff(r6_ld);
        p2.bounceOff(r6_lw);
        p2.bounceOff(r6_rd);
        p2.bounceOff(r6_rw);
        p2.bounceOff(r6_uw);
        p2.bounceOff(stairs_bw);
        p2.bounceOff(stairs_d);
        p2.bounceOff(stairs_lw);
        p2.bounceOff(stairs_rw1);
        p2.bounceOff(stairs_rw2);
        p2.bounceOff(stairs_uw);
        p2.bounceOff(lab_stairs_bw);
        p2.bounceOff(lab_stairs_d);
        p2.bounceOff(lab_stairs_lw);
        p2.bounceOff(lab_stairs_rw1);
        p2.bounceOff(lab_stairs_rw2);
        p2.bounceOff(lab_stairs_uw);
        p2.bounceOff(house_bw);
        p2.bounceOff(house_lw);
        p2.bounceOff(house_md);
        p2.bounceOff(house_rw);
        p2.bounceOff(house_uw1);
        p2.bounceOff(house_uw2);
        p2.bounceOff(house_uw3);
        p2.bounceOff(house_uw4);
        p2.bounceOff(lab_uw);
        p2.bounceOff(lab_bw);
        p2.bounceOff(lab_rw);
        p2.bounceOff(lab_lw);
        p2.bounceOff(bed);
        p2.bounceOff(sidetable1);
        p2.bounceOff(sidetable2);
        p2.bounceOff(r1cupboard1);
        p2.bounceOff(r1cupboard2);
        p2.bounceOff(bathtub);
        p2.bounceOff(sink);
        p2.bounceOff(toilet);
        p2.bounceOff(kitchenleft);
        p2.bounceOff(kitchenup);
        p2.bounceOff(fridge);
        p2.bounceOff(dustbin);
        p2.bounceOff(cboard);
        p2.bounceOff(cmaindesk);
        p2.bounceOff(cmaindeskchair);
        p2.bounceOff(ctbl1);
        p2.bounceOff(ctbl2);
        p2.bounceOff(ctbl3);
        p2.bounceOff(ctbl4);
        p2.bounceOff(ctbl5);
        p2.bounceOff(ctbl6);
        p2.bounceOff(ctbl7);
        p2.bounceOff(ctbl8);
        p2.bounceOff(ccupboard);
        p2.bounceOff(tv);
        p2.bounceOff(sofal);
        p2.bounceOff(sofar);
        p2.bounceOff(sofab);
        p2.bounceOff(r5sidetable);
        p2.bounceOff(r5sidetable2);
        p2.bounceOff(r5centretable);
        p2.bounceOff(diningt);
        p2.bounceOff(r6cupboardl);
        p2.bounceOff(r6cupboardr);
        p2.bounceOff(r6shelf1);
        p2.bounceOff(r6shelf2);
        p2.bounceOff(labtbl1);
        p2.bounceOff(labtbl2);
        p2.bounceOff(labtbl3);
        p2.bounceOff(labcupboard);
        p2.bounceOff(labshelf);
        p2.bounceOff(crate1Group);
        p2.bounceOff(crate2Group);
        p2.bounceOff(crate3Group);
        p2.bounceOff(crate4Group);

        p3.bounceOff(r1_rw);
        p3.bounceOff(r1_bw);
        p3.bounceOff(r1_bw2);
        p3.bounceOff(r1_d);
        p3.bounceOff(r1_d2);
        p3.bounceOff(r1_rw2);
        p3.bounceOff(r2_bw);
        p3.bounceOff(r2_bw2);
        p3.bounceOff(r2_d);
        p3.bounceOff(r2_rw);
        p3.bounceOff(r3_d);
        p3.bounceOff(r3_rw);
        p3.bounceOff(r3_uw);
        p3.bounceOff(r4_bw);
        p3.bounceOff(r4_bw2);
        p3.bounceOff(r4_bw3);
        p3.bounceOff(r4_bw4);
        p3.bounceOff(r4_d);
        p3.bounceOff(r4_lw);
        p3.bounceOff(r5_d);
        p3.bounceOff(r5_lw);
        p3.bounceOff(r5_uw1);
        p3.bounceOff(r5_uw2);
        p3.bounceOff(r6_ld);
        p3.bounceOff(r6_lw);
        p3.bounceOff(r6_rd);
        p3.bounceOff(r6_rw);
        p3.bounceOff(r6_uw);
        p3.bounceOff(stairs_bw);
        p3.bounceOff(stairs_d);
        p3.bounceOff(stairs_lw);
        p3.bounceOff(stairs_rw1);
        p3.bounceOff(stairs_rw2);
        p3.bounceOff(stairs_uw);
        p3.bounceOff(lab_stairs_bw);
        p3.bounceOff(lab_stairs_d);
        p3.bounceOff(lab_stairs_lw);
        p3.bounceOff(lab_stairs_rw1);
        p3.bounceOff(lab_stairs_rw2);
        p3.bounceOff(lab_stairs_uw);
        p3.bounceOff(house_bw);
        p3.bounceOff(house_lw);
        p3.bounceOff(house_md);
        p3.bounceOff(house_rw);
        p3.bounceOff(house_uw1);
        p3.bounceOff(house_uw2);
        p3.bounceOff(house_uw3);
        p3.bounceOff(house_uw4);
        p3.bounceOff(lab_uw);
        p3.bounceOff(lab_bw);
        p3.bounceOff(lab_rw);
        p3.bounceOff(lab_lw);
        p3.bounceOff(bed);
        p3.bounceOff(sidetable1);
        p3.bounceOff(sidetable2);
        p3.bounceOff(r1cupboard1);
        p3.bounceOff(r1cupboard2);
        p3.bounceOff(bathtub);
        p3.bounceOff(sink);
        p3.bounceOff(toilet);
        p3.bounceOff(kitchenleft);
        p3.bounceOff(kitchenup);
        p3.bounceOff(fridge);
        p3.bounceOff(dustbin);
        p3.bounceOff(cboard);
        p3.bounceOff(cmaindesk);
        p3.bounceOff(cmaindeskchair);
        p3.bounceOff(ctbl1);
        p3.bounceOff(ctbl2);
        p3.bounceOff(ctbl3);
        p3.bounceOff(ctbl4);
        p3.bounceOff(ctbl5);
        p3.bounceOff(ctbl6);
        p3.bounceOff(ctbl7);
        p3.bounceOff(ctbl8);
        p3.bounceOff(ccupboard);
        p3.bounceOff(tv);
        p3.bounceOff(sofal);
        p3.bounceOff(sofar);
        p3.bounceOff(sofab);
        p3.bounceOff(r5sidetable);
        p3.bounceOff(r5sidetable2);
        p3.bounceOff(r5centretable);
        p3.bounceOff(diningt);
        p3.bounceOff(r6cupboardl);
        p3.bounceOff(r6cupboardr);
        p3.bounceOff(r6shelf1);
        p3.bounceOff(r6shelf2);
        p3.bounceOff(labtbl1);
        p3.bounceOff(labtbl2);
        p3.bounceOff(labtbl3);
        p3.bounceOff(labcupboard);
        p3.bounceOff(labshelf);
        p3.bounceOff(crate1Group);
        p3.bounceOff(crate2Group);
        p3.bounceOff(crate3Group);
        p3.bounceOff(crate4Group);

        p4.bounceOff(r1_rw);
        p4.bounceOff(r1_bw);
        p4.bounceOff(r1_bw2);
        p4.bounceOff(r1_d);
        p4.bounceOff(r1_d2);
        p4.bounceOff(r1_rw2);
        p4.bounceOff(r2_bw);
        p4.bounceOff(r2_bw2);
        p4.bounceOff(r2_d);
        p4.bounceOff(r2_rw);
        p4.bounceOff(r3_d);
        p4.bounceOff(r3_rw);
        p4.bounceOff(r3_uw);
        p4.bounceOff(r4_bw);
        p4.bounceOff(r4_bw2);
        p4.bounceOff(r4_bw3);
        p4.bounceOff(r4_bw4);
        p4.bounceOff(r4_d);
        p4.bounceOff(r4_lw);
        p4.bounceOff(r5_d);
        p4.bounceOff(r5_lw);
        p4.bounceOff(r5_uw1);
        p4.bounceOff(r5_uw2);
        p4.bounceOff(r6_ld);
        p4.bounceOff(r6_lw);
        p4.bounceOff(r6_rd);
        p4.bounceOff(r6_rw);
        p4.bounceOff(r6_uw);
        p4.bounceOff(stairs_bw);
        p4.bounceOff(stairs_d);
        p4.bounceOff(stairs_lw);
        p4.bounceOff(stairs_rw1);
        p4.bounceOff(stairs_rw2);
        p4.bounceOff(stairs_uw);
        p4.bounceOff(lab_stairs_bw);
        p4.bounceOff(lab_stairs_d);
        p4.bounceOff(lab_stairs_lw);
        p4.bounceOff(lab_stairs_rw1);
        p4.bounceOff(lab_stairs_rw2);
        p4.bounceOff(lab_stairs_uw);
        p4.bounceOff(house_bw);
        p4.bounceOff(house_lw);
        p4.bounceOff(house_md);
        p4.bounceOff(house_rw);
        p4.bounceOff(house_uw1);
        p4.bounceOff(house_uw2);
        p4.bounceOff(house_uw3);
        p4.bounceOff(house_uw4);
        p4.bounceOff(lab_uw);
        p4.bounceOff(lab_bw);
        p4.bounceOff(lab_rw);
        p4.bounceOff(lab_lw);
        p4.bounceOff(bed);
        p4.bounceOff(sidetable1);
        p4.bounceOff(sidetable2);
        p4.bounceOff(r1cupboard1);
        p4.bounceOff(r1cupboard2);
        p4.bounceOff(bathtub);
        p4.bounceOff(sink);
        p4.bounceOff(toilet);
        p4.bounceOff(kitchenleft);
        p4.bounceOff(kitchenup);
        p4.bounceOff(fridge);
        p4.bounceOff(dustbin);
        p4.bounceOff(cboard);
        p4.bounceOff(cmaindesk);
        p4.bounceOff(cmaindeskchair);
        p4.bounceOff(ctbl1);
        p4.bounceOff(ctbl2);
        p4.bounceOff(ctbl3);
        p4.bounceOff(ctbl4);
        p4.bounceOff(ctbl5);
        p4.bounceOff(ctbl6);
        p4.bounceOff(ctbl7);
        p4.bounceOff(ctbl8);
        p4.bounceOff(ccupboard);
        p4.bounceOff(tv);
        p4.bounceOff(sofal);
        p4.bounceOff(sofar);
        p4.bounceOff(sofab);
        p4.bounceOff(r5sidetable);
        p4.bounceOff(r5sidetable2);
        p4.bounceOff(r5centretable);
        p4.bounceOff(diningt);
        p4.bounceOff(r6cupboardl);
        p4.bounceOff(r6cupboardr);
        p4.bounceOff(r6shelf1);
        p4.bounceOff(r6shelf2);
        p4.bounceOff(labtbl1);
        p4.bounceOff(labtbl2);
        p4.bounceOff(labtbl3);
        p4.bounceOff(labcupboard);
        p4.bounceOff(labshelf);
        p4.bounceOff(crate1Group);
        p4.bounceOff(crate2Group);
        p4.bounceOff(crate3Group);
        p4.bounceOff(crate4Group);

        drawSprites();

    }

    getDoorStatus() {
        database.ref('AllDoors/R1d1/Open').on("value", (data) => {
            r1_d_open = data.val();
        })
        database.ref('AllDoors/R1d1/X').on("value", (data) => {
            r1_d.x = data.val();
        })
        database.ref('AllDoors/R1d1/Y').on("value", (data) => {
            r1_d.y = data.val();
        })
        database.ref('AllDoors/R1d1/W').on("value", (data) => {
            r1_d.width = data.val();
        })
        database.ref('AllDoors/R1d1/H').on("value", (data) => {
            r1_d.height = data.val();
        })
        database.ref('AllDoors/R1d2/Open').on("value", (data) => {
            r1_d2_open = data.val();
        })
        database.ref('AllDoors/R1d2/X').on("value", (data) => {
            r1_d2.x = data.val();
        })
        database.ref('AllDoors/R1d2/Y').on("value", (data) => {
            r1_d2.y = data.val();
        })
        database.ref('AllDoors/R1d2/W').on("value", (data) => {
            r1_d2.width = data.val();
        })
        database.ref('AllDoors/R1d2/H').on("value", (data) => {
            r1_d2.height = data.val();
        })
        database.ref('AllDoors/R2d/Open').on("value", (data) => {
            r2_d_open = data.val();
        })
        database.ref('AllDoors/R2d/X').on("value", (data) => {
            r2_d.x = data.val();
        })
        database.ref('AllDoors/R2d/Y').on("value", (data) => {
            r2_d.y = data.val();
        })
        database.ref('AllDoors/R2d/W').on("value", (data) => {
            r2_d.width = data.val();
        })
        database.ref('AllDoors/R2d/H').on("value", (data) => {
            r2_d.height = data.val();
        })
        database.ref('AllDoors/R3d/Open').on("value", (data) => {
            r3_d_open = data.val();
        })
        database.ref('AllDoors/R3d/X').on("value", (data) => {
            r3_d.x = data.val();
        })
        database.ref('AllDoors/R3d/Y').on("value", (data) => {
            r3_d.y = data.val();
        })
        database.ref('AllDoors/R3d/W').on("value", (data) => {
            r3_d.width = data.val();
        })
        database.ref('AllDoors/R3d/H').on("value", (data) => {
            r3_d.height = data.val();
        })
        database.ref('AllDoors/R4d/Open').on("value", (data) => {
            r4_d_open = data.val();
        })
        database.ref('AllDoors/R4d/X').on("value", (data) => {
            r4_d.x = data.val();
        })
        database.ref('AllDoors/R4d/Y').on("value", (data) => {
            r4_d.y = data.val();
        })
        database.ref('AllDoors/R4d/W').on("value", (data) => {
            r4_d.width = data.val();
        })
        database.ref('AllDoors/R4d/H').on("value", (data) => {
            r4_d.height = data.val();
        })
        database.ref('AllDoors/R5d/Open').on("value", (data) => {
            r5_d_open = data.val();
        })
        database.ref('AllDoors/R5d/X').on("value", (data) => {
            r5_d.x = data.val();
        })
        database.ref('AllDoors/R5d/Y').on("value", (data) => {
            r5_d.y = data.val();
        })
        database.ref('AllDoors/R5d/W').on("value", (data) => {
            r5_d.width = data.val();
        })
        database.ref('AllDoors/R5d/H').on("value", (data) => {
            r5_d.height = data.val();
        })
        database.ref('AllDoors/R6ld/Open').on("value", (data) => {
            r6_ld_open = data.val();
        })
        database.ref('AllDoors/R6ld/X').on("value", (data) => {
            r6_ld.x = data.val();
        })
        database.ref('AllDoors/R6ld/Y').on("value", (data) => {
            r6_ld.y = data.val();
        })
        database.ref('AllDoors/R6ld/W').on("value", (data) => {
            r6_ld.width = data.val();
        })
        database.ref('AllDoors/R6ld/H').on("value", (data) => {
            r6_ld.height = data.val();
        })
        database.ref('AllDoors/R6rd/Open').on("value", (data) => {
            r6_rd_open = data.val();
        })
        database.ref('AllDoors/R6rd/X').on("value", (data) => {
            r6_rd.x = data.val();
        })
        database.ref('AllDoors/R6rd/Y').on("value", (data) => {
            r6_rd.y = data.val();
        })
        database.ref('AllDoors/R6rd/W').on("value", (data) => {
            r6_rd.width = data.val();
        })
        database.ref('AllDoors/R6rd/H').on("value", (data) => {
            r6_rd.height = data.val();
        })
        database.ref('AllDoors/MD/Open').on("value", (data) => {
            md_open = data.val();
        })
        database.ref('AllDoors/MD/X').on("value", (data) => {
            house_md.x = data.val();
        })
        database.ref('AllDoors/MD/Y').on("value", (data) => {
            house_md.y = data.val();
        })
        database.ref('AllDoors/MD/W').on("value", (data) => {
            house_md.width = data.val();
        })
        database.ref('AllDoors/MD/H').on("value", (data) => {
            house_md.height = data.val();
        })
        database.ref('AllDoors/StairsD/Open').on("value", (data) => {
            stairs_d_open = data.val();
        })
        database.ref('AllDoors/StairsD/X').on("value", (data) => {
            stairs_d.x = data.val();
        })
        database.ref('AllDoors/StairsD/Y').on("value", (data) => {
            stairs_d.y = data.val();
        })
        database.ref('AllDoors/StairsD/W').on("value", (data) => {
            stairs_d.width = data.val();
        })
        database.ref('AllDoors/StairsD/H').on("value", (data) => {
            stairs_d.height = data.val();
        })      
        database.ref('AllDoors/LabStairsD/Open').on("value", (data) => {
            lab_stairs_d_open = data.val();
        })
        database.ref('AllDoors/LabStairsD/X').on("value", (data) => {
            lab_stairs_d.x = data.val();
        })
        database.ref('AllDoors/LabStairsD/Y').on("value", (data) => {
            lab_stairs_d.y = data.val();
        })
        database.ref('AllDoors/LabStairsD/W').on("value", (data) => {
            lab_stairs_d.width = data.val();
        })
        database.ref('AllDoors/LabStairsD/H').on("value", (data) => {
            lab_stairs_d.height = data.val();
        })
    }

    updateR1d1Status(status, posX, posY, width, height) {
        database.ref('AllDoors/R1d1').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR1d2Status(status, posX, posY, width, height) {
        database.ref('AllDoors/R1d2').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR2dStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/R2d').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR3dStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/R3d').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR4dStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/R4d').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR5dStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/R5d').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR6ldStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/R6ld').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateR6rdStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/R6rd').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateMainDoorStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/MD').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateStairsDStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/StairsD').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }
    updateLabStairsDStatus(status, posX, posY, width, height) {
        database.ref('AllDoors/LabStairsD').update({
            Open: status,
            X: posX,
            Y: posY,
            W: width,
            H: height
        });
    }

    static resetDoorStatus() {
        database.ref('AllDoors/R1d1').update({
            Open: false,
            X: 55,
            Y: 245,
            W: 100,
            H: 10
        });
        database.ref('AllDoors/R1d2').update({
            Open: false,
            X: 200,
            Y: -313,
            W: 10,
            H: 100
        });
        database.ref('AllDoors/R2d').update({
            Open: false,
            X: 280,
            Y: -160,
            W: 100,
            H: 10
        });
        database.ref('AllDoors/R3d').update({
            Open: false,
            X: 380,
            Y: 995,
            W: 10,
            H: 100
        });
        database.ref('AllDoors/R4d').update({
            Open: false,
            X: 2205,
            Y: -80,
            W: 100,
            H: 10
        });
        database.ref('AllDoors/R5d').update({
            Open: false,
            X: 1505,
            Y: 715,
            W: 100,
            H: 10
        });
        database.ref('AllDoors/R6ld').update({
            Open: false,
            X: 600,
            Y: 995,
            W: 10,
            H: 100
        });
        database.ref('AllDoors/R6rd').update({
            Open: false,
            X: 1100,
            Y: 995,
            W: 10,
            H: 100
        });
        database.ref('AllDoors/MD').update({
            Open: false,
            X: 1180,
            Y: -433,
            W: 200,
            H: 15
        });
        database.ref('AllDoors/StairsD').update({
            Open: false,
            X: -212.5,
            Y: 526,
            W: 15,
            H: 100
        });
        database.ref('AllDoors/LabStairsD').update({
            Open: false,
            X: 3532.5,
            Y: 606,
            W: 15,
            H: 100
        });
    }
}
