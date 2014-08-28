game.TelevisorE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("tv1_cuarto2_off", [2]);
        this.renderable.addAnimation("tv1_cuarto2_on", [3]);
        this.renderable.addAnimation("tv2_cuarto2_off", [0]);
        this.renderable.addAnimation("tv2_cuarto2_on", [1]);
        this.renderable.setCurrentAnimation(states.escena7.televisor);
        this.getShape().resize(100,120);
        this.getShape().pos.x = 80;
        this.getShape().pos.y = 20;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1140,325), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1400,325), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_cuarto2_on")){
            states.escena7.televisor = "tv2_cuarto2_on";
            this.renderable.setCurrentAnimation("tv2_cuarto2_on");
        }

        else if(this.renderable.isCurrentAnimation("tv1_cuarto2_off")){
            states.escena7.televisor = "tv2_cuarto2_off";
            this.renderable.setCurrentAnimation("tv2_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("tv2_cuarto2_on")){
            states.escena7.televisor = "tv1_cuarto2_on";
            this.renderable.setCurrentAnimation("tv1_cuarto2_on");
        }

        else{      
            states.escena7.televisor = "tv1_cuarto2_off";   
            this.renderable.setCurrentAnimation("tv1_cuarto2_off");
        }

    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_cuarto2_on")){
            me.audio.stop("tv_cuarto2");
            agregar_tabla("tv1_cuarto2");
            states.escena7.televisor = "tv1_cuarto2_off";
            this.renderable.setCurrentAnimation("tv1_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("tv1_cuarto2_off")){
            me.audio.play("tv_cuarto2");
            agregar_tabla("tv1_cuarto2");
            states.escena7.televisor = "tv1_cuarto2_on";
            this.renderable.setCurrentAnimation("tv1_cuarto2_on");
        }

        else if(this.renderable.isCurrentAnimation("tv2_cuarto2_on")){
            me.audio.stop("tv_cuarto2");
            agregar_tabla("tv2_cuarto2");
            states.escena7.televisor = "tv2_cuarto2_off";
            this.renderable.setCurrentAnimation("tv2_cuarto2_off");
        }

        else{
            me.audio.play("tv_cuarto2");
            agregar_tabla("tv2_cuarto2");
            states.escena7.televisor = "tv2_cuarto2_on";
            this.renderable.setCurrentAnimation("tv2_cuarto2_on");
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
        this.renderable.addAnimation("ac1_cuarto2_off", [0]);
        this.renderable.addAnimation("ac1_cuarto2_loop", [1, 2], 300);
        this.renderable.addAnimation("ac2_cuarto2_off", [3]);
        this.renderable.addAnimation("ac2_cuarto2_loop", [4, 5], 300);
        this.renderable.setCurrentAnimation(states.escena7.ac);
        this.getShape().resize(164,164);
        this.getShape().pos.x = 130;
        this.getShape().pos.y = -40;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(990,80), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1520,80), 32, 32), this.cambiarS.bind(this), false);

    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ac1_cuarto2_off")){
            states.escena7.ac = "ac2_cuarto2_off";
            this.renderable.setCurrentAnimation("ac2_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("ac2_cuarto2_off")){
            states.escena7.ac = "ac1_cuarto2_off";
            this.renderable.setCurrentAnimation("ac1_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("ac1_cuarto2_loop")){
            states.escena7.ac = "ac2_cuarto2_loop";
            this.renderable.setCurrentAnimation("ac2_cuarto2_loop");
        }

        else{
            states.escena7.ac = "ac1_cuarto2_loop";
            this.renderable.setCurrentAnimation("ac1_cuarto2_loop");
        }

    },


    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("ac1_cuarto2_off")){
            agregar_tabla("ac1_cuarto2");
            states.escena7.ac = "ac1_cuarto2_loop";
            this.renderable.setCurrentAnimation("ac1_cuarto2_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac2_cuarto2_off")){
            agregar_tabla("ac2_cuarto2");
            states.escena7.ac = "ac2_cuarto2_loop";
            this.renderable.setCurrentAnimation("ac2_cuarto2_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac1_cuarto2_loop")){
            agregar_tabla("ac1_cuarto2");
            states.escena7.ac = "ac1_cuarto2_off";
            this.renderable.setCurrentAnimation("ac1_cuarto2_off");
        }

        else{
            agregar_tabla("ac2_cuarto2");
            states.escena7.ac = "ac2_cuarto2_off";
            this.renderable.setCurrentAnimation("ac2_cuarto2_off");
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

        this.renderable.addAnimation("bom1_cuarto2_off", [2]);
        this.renderable.addAnimation("bom1_cuarto2_on", [3]);
        this.renderable.addAnimation("bom2_cuarto2_off", [0]);
        this.renderable.addAnimation("bom2_cuarto2_on", [1]);
        this.renderable.setCurrentAnimation(states.escena7.bombillo);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 60;
        this.getShape().pos.y = 40;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(780,150), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,150), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_cuarto2_on")){
            states.escena7.bombillo = "bom2_cuarto2_on";
            this.renderable.setCurrentAnimation("bom2_cuarto2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_cuarto2_off")){
            states.escena7.bombillo = "bom2_cuarto2_off";
            this.renderable.setCurrentAnimation("bom2_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_cuarto2_on")){
            states.escena7.bombillo = "bom1_cuarto2_on";
            this.renderable.setCurrentAnimation("bom1_cuarto2_on");
        }

        else{
            states.escena7.bombillo = "bom1_cuarto2_off";
            this.renderable.setCurrentAnimation("bom1_cuarto2_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_cuarto2_on")){
            agregar_tabla("bom1_cuarto2");
            states.escena7.bombillo = "bom1_cuarto2_off";
            this.renderable.setCurrentAnimation("bom1_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_cuarto2_on")){
            agregar_tabla("bom2_cuarto2");
            states.escena7.bombillo = "bom2_cuarto2_off";
            this.renderable.setCurrentAnimation("bom2_cuarto2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_cuarto2_off")) {
            agregar_tabla("bom2_cuarto2");
            states.escena7.bombillo = "bom2_cuarto2_on";
            this.renderable.setCurrentAnimation("bom2_cuarto2_on");
        }

        else{
            agregar_tabla("bom1_cuarto2");
            states.escena7.bombillo = "bom1_cuarto2_on";
            this.renderable.setCurrentAnimation("bom1_cuarto2_on");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Lampara3 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lamp1_cuarto2_off", [4]);
        this.renderable.addAnimation("lamp1_cuarto2_on", [5]);
        this.renderable.addAnimation("lamp2_cuarto2_off", [6]);
        this.renderable.addAnimation("lamp2_cuarto2_on", [7]);
        this.renderable.setCurrentAnimation(states.escena7.lampara1);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 60;
        this.getShape().pos.y = 15;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(800,590), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(630,590), 32, 32), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("lamp1_cuarto2_off")){
                   
            states.escena7.lampara1 = "lamp2_cuarto2_off";
            this.renderable.setCurrentAnimation("lamp2_cuarto2_off");

        }

        else if(this.renderable.isCurrentAnimation("lamp2_cuarto2_off")){
            states.escena7.lampara1 = "lamp1_cuarto2_off";
            this.renderable.setCurrentAnimation("lamp1_cuarto2_off");
        }

        else if(this.renderable.isCurrentAnimation("lamp1_cuarto2_on")){
            states.escena7.lampara1 = "lamp2_cuarto2_on";
            this.renderable.setCurrentAnimation("lamp2_cuarto2_on");
        }

        else{
            states.escena7.lampara1 = "lamp1_cuarto2_on";
            this.renderable.setCurrentAnimation("lamp1_cuarto2_on");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("lamp1_cuarto2_off")){
            agregar_tabla("lamp1_cuarto2");
            states.escena7.lampara1 = "lamp1_cuarto2_on";
            this.renderable.setCurrentAnimation("lamp1_cuarto2_on");
        }

        else if(this.renderable.isCurrentAnimation("lamp2_cuarto2_off")){
            agregar_tabla("lamp2_cuarto2");
            states.escena7.lampara1 = "lamp2_cuarto2_on";
            this.renderable.setCurrentAnimation("lamp2_cuarto2_on");
        }

        else if(this.renderable.isCurrentAnimation("lamp1_cuarto2_on")){
            agregar_tabla("lamp1_cuarto2");
            states.escena7.lampara1 = "lamp1_cuarto2_off";
            this.renderable.setCurrentAnimation("lamp1_cuarto2_off");
        }

        else{
            agregar_tabla("lamp2_cuarto2");
            states.escena7.lampara1 = "lamp2_cuarto2_off";
            this.renderable.setCurrentAnimation("lamp2_cuarto2_off");
        }
        
        return false;
    
    },


    update: function(dt){

        return this.parent(dt);

    }

});






game.SalirCuarto2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cuarto", [8]);
        this.renderable.setCurrentAnimation("salir_cuarto");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);

    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_07'){
            me.audio.play("dopen");
            me.audio.stop("tv_cuarto2");
            me.game.viewport.fadeIn("#000000", 450, 

                (function (){

                    me.levelDirector.loadLevel("escena_02");

                })

            );
        }

        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});