game.PuertaLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        console.log("puerta lavandero");
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
