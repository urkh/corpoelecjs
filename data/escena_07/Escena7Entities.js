game.TelevisorE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("tve1_off", [0]);
        this.renderable.addAnimation("tve2_off", [1]);
        this.renderable.setCurrentAnimation("tve1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,130), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(840,130), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tve1_off")){

            this.renderable.setCurrentAnimation("tve2_off");

        }else{

            this.renderable.setCurrentAnimation("tve1_off");
        } 

    },

    onMouseDown : function() {

        


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.Consola = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("consola_off", [2]);
        this.renderable.addAnimation("consola_on", [3]);
        this.renderable.setCurrentAnimation("consola_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("consola_off")){
            me.audio.play("prender");

            this.renderable.setCurrentAnimation("consola_on");

        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("consola_off");
        } 


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.BombilloE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("bombillo_off", [1]);
        this.renderable.addAnimation("bombillo_on", [0]);
        this.renderable.setCurrentAnimation("bombillo_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bombillo_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bombillo_on");

        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bombillo_off");
        } 


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});





game.LamparaE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("lampara_off", [3]);
        this.renderable.addAnimation("lampara_on", [2]);
        this.renderable.setCurrentAnimation("lampara_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("lampara_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("lampara_on");

        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("lampara_off");
        } 


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.SalirCuarto2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cuarto", [11]);
        this.renderable.setCurrentAnimation("salir_cuarto");
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