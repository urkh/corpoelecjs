game.EntrarLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_lavandero", [2]);
        this.renderable.setCurrentAnimation("entrar_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.levelDirector.loadLevel("escena_04");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});

game.SalirCocina = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cocina", [7]);
        this.renderable.setCurrentAnimation("salir_cocina");
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




game.Nevera = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        console.log("nevera");

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});
