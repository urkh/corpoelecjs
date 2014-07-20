game.TvPlano = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        console.log("tv_plano");

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BomAhorrador = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },



        onMouseDown : function() {

        console.log("bombillo ahorrador");

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },



});






game.RadioR = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        console.log("radio reproductor");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


