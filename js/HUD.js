

/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};

 
game.HUD.Container = me.ObjectContainer.extend({

	init: function() {
		// call the constructor
		this.parent();
		
		// persistent across level change
		this.isPersistent = true;
		
		// non collidable
		this.collidable = false;
		
		// make sure our object is always draw first
		this.z = Infinity;

		// give a name
		this.name = "HUD";
		
		// add our child score object at the top left corner
		this.addChild(new game.HUD.ScoreItem(190, 55));
		this.addChild(new game.HUD.Pila(190,55));
	}
});




game.HUD.Pila = me.Renderable.extend({

	init: function(x, y){

		this.parent(new me.Vector2d(x,y), 10, 10);
		this.pila1 = new me.SpriteObject(1, 10, me.loader.getImage("pila1"), 384, 128);	
		this.pila2 = new me.SpriteObject(1, 10, me.loader.getImage("pila2"), 384, 128);	
		this.pila3 = new me.SpriteObject(1, 10, me.loader.getImage("pila3"), 384, 128);	
		

		this.score2 = -1;
		this.floating = true;

	},


	update : function () {
		
		return false;
	},

	
	draw : function (context) {
		
		if(game.data.score >= 0 && game.data.score <= 100){
			this.pila1.draw(context);
		}

	 	if(game.data.score >= 101 && game.data.score <= 200){
        	this.pila2.draw(context);
    	}

    	if(game.data.score >= 201){
    		this.pila3.draw(context);
    	}
	}


});


/** 
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({	
	/** 
	 * constructor
	 */
	init: function(x, y) {
		
		// call the parent constructor 
		// (size does not matter here)
		this.parent(new me.Vector2d(x, y), 10, 10); 
		this.font = new me.BitmapFont("32x32_font", 32);
        this.font.set("left");

		this.score = -1;


		// make sure we use screen coordinates
		this.floating = true;
	},
	
	/**
	 * update function
	 */
	update : function () {
		// we don't do anything fancy here, so just
		// return true if the score has been updated
		if (this.score !== game.data.score) {	
			this.score = game.data.score;
			return true;
		}
		return false;
	},

	draw : function (context) {
        this.font.draw(context, game.data.score, this.pos.x, this.pos.y);
	}

});
