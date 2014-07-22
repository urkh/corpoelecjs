game.Computadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("pc1_apagada", [0]);
        this.renderable.addAnimation("pc1_prendida", [1]);
        this.renderable.setCurrentAnimation("pc1_apagada");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("pc1_apagada")){
            this.renderable.setCurrentAnimation("pc1_prendida");
        }else{
            this.renderable.setCurrentAnimation("pc1_apagada");
        }

        game.data.score += 50;

        console.log("computadora");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


