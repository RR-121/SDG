class Player {
    constructor() {
        this.index = null;
        this.name = null
        this.positionX = null;
        this.positionY = null;
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
            index: this.index
        });
    }


}