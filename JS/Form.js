class Form {
    constructor() {
        this.input = createInput("Name").attribute("placeholder", "Name");
        this.play = createButton("Play");
        this.title = createElement('h2');
        this.reset = createButton("Reset database");
        this.greeting = createElement('h3');
    }
    hideContents() {
        this.input.hide();
        this.play.hide();
        this.title.hide();
        this.reset.hide();
        this.greeting.hide();
    }
    display() {
        this.title.html("TBD");
        this.title.position(displayWidth / 2, 50);

        this.input.position(displayWidth / 2 - 30, displayHeight / 2 - 130);
        this.play.position(displayWidth / 2 + 90, displayHeight / 2 + 30 - 130);
        this.reset.position(displayWidth / 2 - 30, displayHeight / 2 + 30 - 130);

        this.play.mousePressed(() => {
            this.input.hide();
            this.play.hide();
            this.reset.hide();

            playerCount += 1;
            player.updateCount(playerCount);
            player.index = playerCount;
            player.name = this.input.value();
            player.update();

            this.greeting.html("Welcome " + player.name + "!");
            this.greeting.position(displayWidth / 2 - 60, displayHeight / 2 - 130);
        })

        this.reset.mousePressed(() => {
            playerCount = 0;
            player.updateCount(playerCount);
            gameState = 0;
            game.updateS(gameState);
            // vidComplete = 0;
            // game.updateVid(vidComplete);
            player.videoEnded = false;
            player.update();
        })
    }
}
