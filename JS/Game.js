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

        p1 = createSprite(displayWidth / 2 - 100, displayHeight / 2 - 130);
        p2 = createSprite(displayWidth / 2 + 100, displayHeight / 2 - 130);
        p3 = createSprite(displayWidth / 2 - 100, displayHeight / 2);
        p4 = createSprite(displayWidth / 2 + 100, displayHeight / 2);
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

        drawSprites();
    }
}
