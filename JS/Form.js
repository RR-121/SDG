class Form {
    constructor() {
        this.input = createInput(" ").attribute("placeholder", "Name");
        this.play = createButton("Play");
        this.title = createElement('h2');
        this.reset = createButton("Reset database");
        this.greeting = createElement('h3');
    }
    hideThings() {
        this.input.hide();
        this.play.hide();
        this.title.hide();
        this.reset.hide();
        this.greeting.hide();
    }
    display() {
        this.title.html("TBD");
        this.title.position(displayWidth / 2 - 10, 50);

        this.input.position(displayWidth / 2 - 30 - 10, displayHeight / 2 - 140);
        this.play.position(displayWidth / 2 + 90 - 10, displayHeight / 2 + 30 - 140);
        this.reset.position(displayWidth / 2 - 30 - 10, displayHeight / 2 + 30 - 140);

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
            this.greeting.position(displayWidth / 2 - 60 - 10, displayHeight / 2 - 140);
        })

        this.reset.mousePressed(() => {
            playerCount = 0;
            player.updateCount(playerCount);
            game.update(0);
        })
    }
}