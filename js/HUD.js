game.HUD = game.HUD || {};

 
game.HUD.Container = me.ObjectContainer.extend({

	init: function() {

		this.parent();
		this.isPersistent = true;
		this.collidable = false;
		this.z = Infinity;
		this.name = "HUD";
		
		this.addChild(new game.HUD.ScoreItem(160, 55));
		this.addChild(new game.HUD.Pila(190,55));
	}
});




game.HUD.Pila = me.Renderable.extend({

	init: function(x, y){

		this.parent(new me.Vector2d(x,y), 10, 10);
		this.pila1 = new me.SpriteObject(1, 10, me.loader.getImage("pila1"), 369, 112);	
		this.pila2 = new me.SpriteObject(1, 10, me.loader.getImage("pila2"), 369, 112);	
		this.pila3 = new me.SpriteObject(1, 10, me.loader.getImage("pila3"), 369, 112);	
		this.pierde = new me.SpriteObject(1, 200, me.loader.getImage("pierde"), 1546, 517);
		
		//this.score = -1;
		this.floating = true;

	},


	update : function () {
		
		return false;
	},

	
	draw : function (context) {
		
		if(game.data.score <= 999){
			this.pila1.draw(context);
		}

	 	if(game.data.score >= 1000 && game.data.score <= 1999){
        	this.pila2.draw(context);
    	}

    	if(game.data.score >= 2000 && game.data.score <= 2999){
    		this.pila3.draw(context);
    	}

    	if(game.data.score >= 3000){
    		this.pierde.draw(context);
    		game.data.game_over = true;
    	}
	}


});

game.HUD.ScoreItem = me.Renderable.extend({	

	init: function(x, y) {
		
		this.parent(new me.Vector2d(x, y), 10, 10); 
		this.font = new me.BitmapFont("32x32_font", 32);
        this.font.set("left");

		this.score = -1;

		this.floating = true;
	},
	
	update : function () {

		if (this.score !== game.data.score) {	
			this.score = game.data.score;
			return true;
		}
		return false;
	},

	draw : function (context) {
		if(game.data.game_over){
        	me.game.world.removeChild(this);
        }

        else{
        	this.font.draw(context, game.data.score, this.pos.x, this.pos.y);
	    }
	}

});
