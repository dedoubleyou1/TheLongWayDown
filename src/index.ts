class SimpleGame
{
	game:Phaser.Game;
	constructor()
	{
		this.game = new Phaser.Game( 300, 480, Phaser.CANVAS, 'content', { preload:this.preload, create:this.create, render:this.render} );
	}
	preload()
	{

	}
	create()
	{
		console.log("HELLO WORLD");
	}
	render()
	{

	}
}

var game = new SimpleGame();
