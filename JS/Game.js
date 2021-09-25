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
    }

    hideFormAfterGS0() {
        if (gameState > 0) {
            form.hideContents();
        }
    }

    tutorial() {
        background(255, 255, 255);
        // trex.velocityX = 0.5;
        // trex.velocityY = 0.5;

        vid.play();
        vid.position(0, 0)

    }

    play() {
        background(0);

    }
}
