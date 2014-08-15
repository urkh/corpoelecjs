game.Ducha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("ducha_normal", [1]);
        this.renderable.addAnimation("ducha_corona", [2]);
        this.renderable.setCurrentAnimation("ducha_corona");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(330,220), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(470,220), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){


        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ducha_corona")){
            this.renderable.setCurrentAnimation("ducha_normal");
        }else{
            this.renderable.setCurrentAnimation("ducha_corona");
        }


    },

    onMouseDown : function() {
        
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BombilloE6 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bombillo1_off", [0]);
        this.renderable.addAnimation("bombillo1_on", [1]);
        this.renderable.addAnimation("bombillo2_off", [2]);
        this.renderable.addAnimation("bombillo2_on", [3]);
        this.renderable.setCurrentAnimation("bombillo1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(730,60), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,60), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bombillo1_off")){
            this.renderable.setCurrentAnimation("bombillo2_off");
        }

        else if(this.renderable.isCurrentAnimation("bombillo2_off")){
            this.renderable.setCurrentAnimation("bombillo1_off");
        }

        else if(this.renderable.isCurrentAnimation("bombillo1_on")){
            this.renderable.setCurrentAnimation("bombillo2_on");
        }

        else{
            this.renderable.setCurrentAnimation("bombillo1_on");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("bombillo1_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bombillo1_on");
        }

        else if(this.renderable.isCurrentAnimation("bombillo2_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bombillo2_on");
        }

        else if(this.renderable.isCurrentAnimation("bombillo1_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bombillo1_off");
        }

        else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bombillo2_off");
        }
        
        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Afeitadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("afeitadora", [0]);
        this.renderable.setCurrentAnimation("afeitadora");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Secador = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("secador", [1]);
        this.renderable.setCurrentAnimation("secador");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.SalirBano = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_bano", [8]);
        this.renderable.setCurrentAnimation("salir_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        me.audio.play("dclose");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_02");

            })

        );
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});