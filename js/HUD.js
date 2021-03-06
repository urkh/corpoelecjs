game.HUD = game.HUD || {};

 
game.HUD.Container = me.ObjectContainer.extend({

	init: function() {

		this.parent();
		this.isPersistent = true;
		this.collidable = false;
		this.z = Infinity;
		this.name = "HUD";
		
		this.addChild(new game.HUD.ScoreItem(50, 60));
		//this.addChild(new game.HUD.ScoreItem2(145, 145));
		this.addChild(new game.HUD.Pila(190,55));
		this.addChild(new game.HUD.ME(190,115));
	}
});




game.HUD.Pila = me.Renderable.extend({

	init: function(x, y){

		this.parent(new me.Vector2d(x,y), 10, 10);
		this.pila1 = new me.SpriteObject(1, 10, me.loader.getImage("pila1"), 359, 112);	
		this.pila2 = new me.SpriteObject(1, 10, me.loader.getImage("pila2"), 359, 112);	
		this.pila3 = new me.SpriteObject(1, 10, me.loader.getImage("pila3"), 359, 112);	
		this.pila4 = new me.SpriteObject(1, 10, me.loader.getImage("pila4"), 359, 112);	
		this.pila5 = new me.SpriteObject(1, 10, me.loader.getImage("pila5"), 359, 112);	
		this.pierde = new me.SpriteObject(1, 200, me.loader.getImage("pierde"), 1546, 517);
		this.gana = new me.SpriteObject(1, 200, me.loader.getImage("gana"), 1536, 720);
		me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1270,280), 200, 100), this.reset.bind(this), false);
		me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1,130), 600, 100), this.showTable.bind(this), false);
		
		//this.score = -1;
		this.floating = true;

	},

	showTable: function(){
		$('#tb_consumos').modal({
			backdrop:false,
			keyboard:false
		});

	},


	update : function () {
		
		return false;
	},

	/*
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
	},*/

		draw : function (context) {
	
		//if(game.data.game_over){
		//	me.game.world.removeChild(this);


		//}else{

			if(game.data.conmax==500){
				this.pila1.draw(context);
			}

			if(game.data.conmax==600){
				this.pila2.draw(context);
			}

			if(game.data.conmax==700){
				this.pila3.draw(context);
			}

			if(game.data.conmax==900){
				this.pila4.draw(context);
			}

			if(game.data.conmax==1300){
				this.pila5.draw(context);
			}
			
		//}


		if(game.data.game_over){

    		if(game.data.score > game.data.conmax){
    			
    			this.pierde.draw(context);
    		}

    		else{
    			this.gana.draw(context);
    		}
    	}
	},


	reset: function(){
		if(game.data.game_over){
			me.audio.stop("radio_r");

			$('#select_estados').val('0'); 
			me.game.world.removeChild(this);
			game.data.score_num = true;

			game.data.game_over = false;
		    for(var cons in consumos) {
		        consumos[cons].apagado = true;
		        consumos[cons].flag = false;
		        consumos[cons].consumo = 0;

		    }

		    for(var _est in states) {
		    	for(var _esc in states[_est]){
		    		if(states[_est][_esc].slice(-1)=='n'){
		    			states[_est][_esc] = states[_est][_esc].substr(0, states[_est][_esc].length-2)+'off'; 
		    		}
		    	}
		    }

            $('#tabla').DataTable().clear().draw()
			
			me.game.viewport.fadeIn("#000000", 450, 

                (function (){

                    me.levelDirector.loadLevel("escena_01");

                })

            );
		}
	}


});






game.HUD.ME = me.Renderable.extend({

	init: function(x, y){

		this.parent(new me.Vector2d(x,y), 10, 10);
		this.me = new me.SpriteObject(10, 115, me.loader.getImage("me"), 359, 81);	


		//this.score = -1;
		this.floating = false;

	},


	update : function () {
		
		return false;
	},

	
	draw : function (context) {

		if(game.data.game_over){
			me.game.world.removeChild(this);


		}

		else{

			this.me.draw(context);

		}
	
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


	if(!game.data.score_num){
		if(game.data.game_over){
			if(game.data.score > game.data.conmax){
        		this.font.draw(context, game.data.score, 1290, 510);
        	}
        	else{
        		this.font.draw(context, game.data.score, 1290, 530);	
        	}
        }

        else{
        	this.font.draw(context, game.data.score, this.pos.x, this.pos.y);
	    }


	}else{

		me.game.world.removeChild(this);
	}
	    	



	}

});

/*

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

		if(!game.data.score_num){
			if(game.data.game_over){
				if(game.data.score > game.data.conmax){
	        		this.font.draw(context, game.data.conmax, 1380, 575);
	        	}

	        	else{
	        		this.font.draw(context, game.data.conmax, 1380, 600);

	        	}
	        }

	        else{
	        	this.font.draw(context, game.data.conmax, this.pos.x, this.pos.y);
		    }
		}else{

			me.game.world.removeChild(this);
		}
	}

});
*/
