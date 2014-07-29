game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        console.log("lavadora");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Secadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        console.log("secadora");

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.SalirLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_lavandero",[7]);
        this.renderable.setCurrentAnimation("salir_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_03");

            })

        );
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});

