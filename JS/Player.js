class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.posX = Math.round(random(3340, 3890));
        this.posY = Math.round(random(-100, 690));
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
