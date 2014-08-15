game.TelevisorE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("tv1_off", [0]);
        this.renderable.addAnimation("tv1_on", [1]);
        this.renderable.addAnimation("tv2_off", [2]);
        this.renderable.addAnimation("tv2_on", [3]);
        this.renderable.setCurrentAnimation("tv1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1040,220), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1300,220), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_on")){
            this.renderable.setCurrentAnimation("tv2_on");

        }
        else if(this.renderable.isCurrentAnimation("tv1_off")){
            this.renderable.setCurrentAnimation("tv2_off");

        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            this.renderable.setCurrentAnimation("tv1_on");
        }


        else{
            
            this.renderable.setCurrentAnimation("tv1_off");
        }

    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv1_off");

        }
        else if(this.renderable.isCurrentAnimation("tv1_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("tv1_on");

        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else{
            me.audio.play("prender");   
            this.renderable.setCurrentAnimation("tv2_on");
        }


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.AcE7 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("ac_off", [0]);
        this.renderable.addAnimation("ac_loop", [1, 2], 300);
        
        this.renderable.setCurrentAnimation("ac_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("ac_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("ac_loop");
        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("ac_off");
        }

        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});




game.Consola = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("consola_off", [4]);
        this.renderable.addAnimation("consola_on", [5]);
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

        this.renderable.addAnimation("bombillo1_off", [0]);
        this.renderable.addAnimation("bombillo1_on", [1]);
        this.renderable.addAnimation("bombillo2_off", [2]);
        this.renderable.addAnimation("bombillo2_on", [3]);
        this.renderable.setCurrentAnimation("bombillo1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(780,150), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,150), 32, 32), this.cambiarS.bind(this), false);
        
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





game.SalirCuarto2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cuarto", [8]);
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