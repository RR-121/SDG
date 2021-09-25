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
    
    play() {
        background(0);

    }

    getVidStatus() {
        var GVSRef = database.ref('VideoWatchedNo');
        GVSRef.on("value", (data) => {
            vidComplete = data.val();
        });
    }

    updateVid(data) {
        database.ref('/').update({
            VideoWatchedNo: data
        });
    }
}
