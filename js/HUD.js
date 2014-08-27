game.HUD = game.HUD || {};

 
game.HUD.Container = me.ObjectContainer.extend({

	init: function() {

		this.parent();
		this.isPersistent = true;
		this.collidable = false;
		this.z = Infinity;
		this.name = "HUD";
		
		this.addChild(new game.HUD.ScoreItem(220, 55));
		this.addChild(new game.HUD.ScoreItem2(145, 145));
		this.addChild(new game.HUD.Pila(190,55));
		this.addChild(new game.HUD.PilaE(190,115));
	}
});




game.HUD.Pila = me.Renderable.extend({

	init: function(x, y){

		this.parent(new me.Vector2d(x,y), 10, 10);
		this.pila1 = new me.SpriteObject(1, 10, me.loader.getImage("pila1"), 575, 112);	
		this.pila2 = new me.SpriteObject(1, 10, me.loader.getImage("pila2"), 573, 113);	
		this.pila3 = new me.SpriteObject(1, 10, me.loader.getImage("pila3"), 573, 112);	
		this.pierde = new me.SpriteObject(1, 200, me.loader.getImage("pierde"), 1546, 517);
		this.gana = new me.SpriteObject(1, 200, me.loader.getImage("gana"), 1536, 720);
		
		//this.score = -1;
		this.floating = true;

	},


	update : function () {
		
		return false;
	},

	
	draw : function (context) {
		
		if(game.data.score < game.data.conmax/3){
			this.pila1.draw(context);
		}

	 	if((game.data.score >= game.data.conmax/3) && (game.data.score < game.data.conmax/1.5)){
        	this.pila2.draw(context);
    	}

    	if(game.data.score >= game.data.conmax/1.5){
    		this.pila3.draw(context);
    	}

    	if(game.data.game_over){

    		if(game.data.score > game.data.conmax){
    			this.pierde.draw(context);
    		}

    		else{
    			this.gana.draw(context);
    		}
    	}
	}


});




game.HUD.PilaE = me.Renderable.extend({

	init: function(x, y){

		this.parent(new me.Vector2d(x,y), 10, 10);
		this.pilae = new me.SpriteObject(10, 115, me.loader.getImage("pila"), 359, 89);	

		//this.score = -1;
		this.floating = false;

	},


	update : function () {
		
		return false;
	},

	
	draw : function (context) {
	
		this.pilae.draw(context);
	}


});



game.HUD.ScoreItem = me.Renderable.extend({	

	init: function(x, y) {
		
		this.parent(new me.Vector2d(x, y), 10, 10); 
		this.font = new me.BitmapFont("32x32_font", 28);
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
			if(game.data.score > game.data.conmax){
        		this.font.draw(context, game.data.score, 1225, 530);
        	}
        	else{
        		this.font.draw(context, game.data.score, 1250, 550);	
        	}
        }

        else{
        	this.font.draw(context, game.data.score, this.pos.x, this.pos.y);
	    }
	}

});



game.HUD.ScoreItem2 = me.Renderable.extend({	

	init: function(x, y) {
		
		this.parent(new me.Vector2d(x, y), 10, 10); 
		this.font = new me.BitmapFont("32x32_font", 28);
        this.font.set("left");

		this.score = -1;

		this.floating = true;
	},
	
	update : function () {

		if (this.score !== game.data.conmax) {	
			this.score = game.data.conmax;
			return true;
		}
		return false;
	},

	draw : function (context) {
		if(game.data.game_over){
			if(game.data.score > game.data.conmax){
        		this.font.draw(context, game.data.conmax, 1305, 590);
        	}

        	else{
        		this.font.draw(context, game.data.conmax, 1330, 610);

        	}
        }

        else{
        	this.font.draw(context, game.data.conmax, this.pos.x, this.pos.y);
	    }
	}

});

