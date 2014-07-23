game.Calentador = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("cal_peq", [1]);
        this.renderable.addAnimation("cal_grande", [0]);
        this.renderable.setCurrentAnimation("cal_peq");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("cal_peq")){
            this.renderable.setCurrentAnimation("cal_grande");
        }else{
            this.renderable.setCurrentAnimation("cal_peq");
        }

        game.data.score += 50;

        console.log("calentador");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Ducha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("ducha_normal", [1]);
        this.renderable.addAnimation("ducha_corona", [2]);
        this.renderable.setCurrentAnimation("ducha_corona");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("ducha_corona")){
            this.renderable.setCurrentAnimation("ducha_normal");
        }else{
            this.renderable.setCurrentAnimation("ducha_corona");
        }

        game.data.score += 50;

        console.log("ducha");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});