game.TelevisorE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("tv1_off", [2]);
        this.renderable.addAnimation("tv1_on", [3]);
        this.renderable.addAnimation("tv2_off", [0]);
        this.renderable.addAnimation("tv2_on", [1]);
        this.renderable.setCurrentAnimation(states.escena7.televisor);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1040,220), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1300,220), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_on")){
            states.escena7.televisor = "tv2_on";
            this.renderable.setCurrentAnimation("tv2_on");
        }

        else if(this.renderable.isCurrentAnimation("tv1_off")){
            states.escena7.televisor = "tv2_off";
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            states.escena7.televisor = "tv1_on";
            this.renderable.setCurrentAnimation("tv1_on");
        }

        else{      
            states.escena7.televisor = "tv1_off";   
            this.renderable.setCurrentAnimation("tv1_off");
        }

    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_on")){
            agregar_tabla("tv1");
            states.escena7.televisor = "tv1_off";
            this.renderable.setCurrentAnimation("tv1_off");
        }

        else if(this.renderable.isCurrentAnimation("tv1_off")){
            agregar_tabla("tv1");
            states.escena7.televisor = "tv1_on";
            this.renderable.setCurrentAnimation("tv1_on");
        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            agregar_tabla("tv2");
            states.escena7.televisor = "tv2_off";
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else{
            agregar_tabla("tv1");
            states.escena7.televisor = "tv2_off";
            this.renderable.setCurrentAnimation("tv2_off");
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
        this.renderable.addAnimation("ac1_off", [0]);
        this.renderable.addAnimation("ac1_loop", [1, 2], 300);
        this.renderable.addAnimation("ac2_off", [3]);
        this.renderable.addAnimation("ac2_loop", [4, 5], 300);
        this.renderable.setCurrentAnimation(states.escena7.ac);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ac1_off")){
            states.escena7.ac = "ac2_off";
            this.renderable.setCurrentAnimation("ac2_off");
        }

        else if(this.renderable.isCurrentAnimation("ac2_off")){
            states.escena7.ac = "ac1_off";
            this.renderable.setCurrentAnimation("ac1_off");
        }

        else if(this.renderable.isCurrentAnimation("ac1_loop")){
            states.escena7.ac = "ac2_loop";
            this.renderable.setCurrentAnimation("ac2_loop");
        }

        else{
            states.escena7.ac = "ac1_loop";
            this.renderable.setCurrentAnimation("ac1_loop");
        }


    },


    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("ac1_off")){
            agregar_tabla("ac1");
            states.escena7.ac = "ac1_loop";
            this.renderable.setCurrentAnimation("ac1_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac2_off")){
            agregar_tabla("ac2");
            states.escena7.ac = "ac2_loop";
            this.renderable.setCurrentAnimation("ac2_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac1_loop")){
            agregar_tabla("ac1");
            states.escena7.ac = "ac1_off";
            this.renderable.setCurrentAnimation("ac1_off");
        }

        else{
            agregar_tabla("ac2");
            states.escena7.ac = "ac2_off";
            this.renderable.setCurrentAnimation("ac2_off");
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

        this.renderable.addAnimation("bom1_off", [2]);
        this.renderable.addAnimation("bom1_on", [3]);
        this.renderable.addAnimation("bom2_off", [0]);
        this.renderable.addAnimation("bom2_on", [1]);
        this.renderable.setCurrentAnimation(states.escena7.bombillo);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(780,150), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,150), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_on")){
            states.escena7.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_off")){
            states.escena7.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            states.escena7.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        else{
            states.escena7.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            agregar_tabla("bom1");
            states.escena7.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            agregar_tabla("bom2");
            states.escena7.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            agregar_tabla("bom2");
            states.escena7.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            agregar_tabla("bom1");
            states.escena7.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
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