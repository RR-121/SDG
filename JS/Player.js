class Player {
    constructor() {
        this.index = null;
        this.name = null
        this.posX = Math.round(random(3000, 3500));
        this.posY = Math.round(random(0, 100))
        this.videoEnded = false;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on('value', (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            index: this.index,
            x: this.posX,
            y: this.posY,
            videoEnded: this.videoEnded
        });
    }

    static getPlayerInfo() {
        database.ref('players').on('value', (data) => {
            allPlayers = data.val();
        })
    }
}
