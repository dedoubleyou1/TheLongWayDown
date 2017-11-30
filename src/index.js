var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(300, 480, Phaser.CANVAS, 'content', { preload: this.preload, create: this.create, render: this.render });
    }
    SimpleGame.prototype.preload = function () {
    };
    SimpleGame.prototype.create = function () {
    };
    SimpleGame.prototype.render = function () {
    };
    return SimpleGame;
}());
var game = new SimpleGame();
