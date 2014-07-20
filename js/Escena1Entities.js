game.PuertaPrincipal = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


	onMouseDown : function() {

		me.levelDirector.loadLevel("escena_02");

		return false;
	
	},
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Nube1 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.type = me.game.ACTION_OBJECT;
        
    }


});

game.Nube2= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.type = me.game.ACTION_OBJECT;
        
    }


});