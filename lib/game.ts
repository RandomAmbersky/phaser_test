/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>

var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    create: create
});

function create() {
    var text = "Hello world!";
    var tmpText = "bugaga";
    var style = { font: "65px Arial", fill: "#ff0044", align: "left" };

    var t = game.add.text(game.world.centerX, game.world.centerY, text, style);
    t.anchor.set(0.5, 0.5);
}