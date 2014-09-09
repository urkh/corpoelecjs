game.Computadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("pc1_off", [0]);
        this.renderable.addAnimation("pc1_on", [1]);
        this.renderable.addAnimation("pc2_off", [2]);
        this.renderable.addAnimation("pc2_on", [3]);
        this.renderable.setCurrentAnimation(states.escena5.computadora);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 220;
        this.getShape().pos.y = 70;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(270,550), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(600,550), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("pc1_on")){
                states.escena5.computadora = "pc2_on";
                this.renderable.setCurrentAnimation("pc2_on");
            }

            else if(this.renderable.isCurrentAnimation("pc1_off")){
                states.escena5.computadora = "pc2_off";
                this.renderable.setCurrentAnimation("pc2_off");
            }

            else if(this.renderable.isCurrentAnimation("pc2_on")){
                states.escena5.computadora = "pc1_on";
                this.renderable.setCurrentAnimation("pc1_on");
            }

            else{
                states.escena5.computadora = "pc1_off";
                this.renderable.setCurrentAnimation("pc1_off");
            }

        }


    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            if(this.renderable.isCurrentAnimation("pc1_on")){
                agregar_tabla("pc1");
                states.escena5.computadora = "pc1_off";
                this.renderable.setCurrentAnimation("pc1_off");
            }

            else if(this.renderable.isCurrentAnimation("pc1_off")){
                agregar_tabla("pc1");
                states.escena5.computadora = "pc1_on";
                this.renderable.setCurrentAnimation("pc1_on");
            }

            else if(this.renderable.isCurrentAnimation("pc2_on")){
                agregar_tabla("pc2");
                states.escena5.computadora = "pc2_off";
                this.renderable.setCurrentAnimation("pc2_off");
            }

            else{
                agregar_tabla("pc2");
                states.escena5.computadora = "pc2_on";
                this.renderable.setCurrentAnimation("pc2_on");
            }

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Lampara = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lamp1_cuarto1_off", [0]);
        this.renderable.addAnimation("lamp1_cuarto1_on", [1]);
        this.renderable.addAnimation("lamp2_cuarto1_off", [2]);
        this.renderable.addAnimation("lamp2_cuarto1_on", [3]);
        this.renderable.setCurrentAnimation(states.escena5.lampara1);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 50;
        this.getShape().pos.y = 75;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,610), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(740,590), 64, 64), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("lamp1_cuarto1_off")){
                       
                states.escena5.lampara1 = "lamp2_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp2_cuarto1_off");

            }

            else if(this.renderable.isCurrentAnimation("lamp2_cuarto1_off")){
                states.escena5.lampara1 = "lamp1_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp1_cuarto1_off");
            }

            else if(this.renderable.isCurrentAnimation("lamp1_cuarto1_on")){
                states.escena5.lampara1 = "lamp2_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp2_cuarto1_on");
            }

            else{
                states.escena5.lampara1 = "lamp1_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp1_cuarto1_on");
            }

        }


    },



    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){
    
            if(this.renderable.isCurrentAnimation("lamp1_cuarto1_off")){
                agregar_tabla("lamp1_cuarto1");
                states.escena5.lampara1 = "lamp1_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp1_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("lamp2_cuarto1_off")){
                agregar_tabla("lamp2_cuarto1");
                states.escena5.lampara1 = "lamp2_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp2_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("lamp1_cuarto1_on")){
                agregar_tabla("lamp1_cuarto1");
                states.escena5.lampara1 = "lamp1_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp1_cuarto1_off");
            }

            else{
                agregar_tabla("lamp2_cuarto1");
                states.escena5.lampara1 = "lamp2_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp2_cuarto1_off");
            }

        }
        
        return false;
    
    },


    update: function(dt){

        return this.parent(dt);

    }

});



game.Lampara2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lamp3_cuarto1_off", [4]);
        this.renderable.addAnimation("lamp3_cuarto1_on", [5]);
        this.renderable.addAnimation("lamp4_cuarto1_off", [6]);
        this.renderable.addAnimation("lamp4_cuarto1_on", [7]);
        this.renderable.setCurrentAnimation(states.escena5.lampara2);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 60;
        this.getShape().pos.y = 15;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1570,730), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1400,730), 32, 32), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("lamp3_cuarto1_off")){
                       
                states.escena5.lampara2 = "lamp4_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp4_cuarto1_off");

            }

            else if(this.renderable.isCurrentAnimation("lamp4_cuarto1_off")){
                states.escena5.lampara2 = "lamp3_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp3_cuarto1_off");
            }

            else if(this.renderable.isCurrentAnimation("lamp3_cuarto1_on")){
                states.escena5.lampara2 = "lamp4_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp4_cuarto1_on");
            }

            else{
                states.escena5.lampara2 = "lamp3_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp3_cuarto1_on");
            }

        }


    },



    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){
    
            if(this.renderable.isCurrentAnimation("lamp3_cuarto1_off")){
                agregar_tabla("lamp3_cuarto1");
                states.escena5.lampara2 = "lamp3_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp3_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("lamp4_cuarto1_off")){
                agregar_tabla("lamp4_cuarto1");
                states.escena5.lampara2 = "lamp4_cuarto1_on";
                this.renderable.setCurrentAnimation("lamp4_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("lamp3_cuarto1_on")){
                agregar_tabla("lamp3_cuarto1");
                states.escena5.lampara2 = "lamp3_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp3_cuarto1_off");
            }

            else{
                agregar_tabla("lamp4_cuarto1");
                states.escena5.lampara2 = "lamp4_cuarto1_off";
                this.renderable.setCurrentAnimation("lamp4_cuarto1_off");
            }

        }
            
        return false;
    
    },


    update: function(dt){

        return this.parent(dt);

    }

});






game.BombilloE5 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_cuarto1_off", [2]);
        this.renderable.addAnimation("bom1_cuarto1_on", [3]);
        this.renderable.addAnimation("bom2_cuarto1_off", [0]);
        this.renderable.addAnimation("bom2_cuarto1_on", [1]);
        this.renderable.setCurrentAnimation(states.escena5.bombillo);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 75;
        this.getShape().pos.y = 55;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(560,200), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(760,200), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("bom1_cuarto1_on")){
                states.escena5.bombillo = "bom2_cuarto1_on";
                this.renderable.setCurrentAnimation("bom2_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("bom1_cuarto1_off")){
                states.escena5.bombillo = "bom2_cuarto1_off";
                this.renderable.setCurrentAnimation("bom2_cuarto1_off");
            }

            else if(this.renderable.isCurrentAnimation("bom2_cuarto1_on")){
                states.escena5.bombillo = "bom1_cuarto1_on";
                this.renderable.setCurrentAnimation("bom1_cuarto1_on");
            }

            else{
                states.escena5.bombillo = "bom1_cuarto1_off";
                this.renderable.setCurrentAnimation("bom1_cuarto1_off");
            }

        }

    },



    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            if(this.renderable.isCurrentAnimation("bom1_cuarto1_on")){
                agregar_tabla("bom1_cuarto1");
                states.escena5.bombillo = "bom1_cuarto1_off";
                this.renderable.setCurrentAnimation("bom1_cuarto1_off");
            }

            else if(this.renderable.isCurrentAnimation("bom2_cuarto1_on")){
                agregar_tabla("bom2_cuarto1");
                states.escena5.bombillo = "bom2_cuarto1_off";
                this.renderable.setCurrentAnimation("bom2_cuarto1_off");
            }
            
            else if (this.renderable.isCurrentAnimation("bom2_cuarto1_off")) {
                agregar_tabla("bom2_cuarto1");
                states.escena5.bombillo = "bom2_cuarto1_on";
                this.renderable.setCurrentAnimation("bom2_cuarto1_on");
            }

            else{
                agregar_tabla("bom1_cuarto1");
                states.escena5.bombillo = "bom1_cuarto1_on";
                this.renderable.setCurrentAnimation("bom1_cuarto1_on");
            }

        }

        return false;
    
    },
  
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.Ac = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("ac1_cuarto1_off", [0]);
        this.renderable.addAnimation("ac1_cuarto1_on", [1, 2], 300);
        this.renderable.addAnimation("ac2_cuarto1_off", [3]);
        this.renderable.addAnimation("ac2_cuarto1_on", [4, 5], 300);
        this.renderable.setCurrentAnimation(states.escena5.ac);
        this.getShape().resize(164,164);
        this.getShape().pos.x = 240;
        this.getShape().pos.y = -40;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(800,90), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1330,90), 32, 32), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("ac1_cuarto1_off")){
                states.escena5.ac = "ac2_cuarto1_off";
                this.renderable.setCurrentAnimation("ac2_cuarto1_off");
                this.getShape().resize(164,164);
                this.getShape().pos.x = 230;
                this.getShape().pos.y = -40;
            }

            else if(this.renderable.isCurrentAnimation("ac2_cuarto1_off")){
                states.escena5.ac = "ac1_cuarto1_off";
                this.renderable.setCurrentAnimation("ac1_cuarto1_off");
                this.getShape().resize(164,164);
                this.getShape().pos.x = 240;
                this.getShape().pos.y = -40;
                

            }

            else if(this.renderable.isCurrentAnimation("ac1_cuarto1_on")){
                states.escena5.ac = "ac2_cuarto1_on";
                this.renderable.setCurrentAnimation("ac2_cuarto1_on");
            }

            else{
                states.escena5.ac = "ac1_cuarto1_on";
                this.renderable.setCurrentAnimation("ac1_cuarto1_on");
            }

        }


    },



    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_05'){
    
            if(this.renderable.isCurrentAnimation("ac1_cuarto1_off")){
                agregar_tabla("ac1_cuarto1");
                states.escena5.ac = "ac1_cuarto1_on";
                this.renderable.setCurrentAnimation("ac1_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("ac2_cuarto1_off")){
                agregar_tabla("ac2_cuarto1");
                states.escena5.ac = "ac2_cuarto1_on";
                this.renderable.setCurrentAnimation("ac2_cuarto1_on");
            }

            else if(this.renderable.isCurrentAnimation("ac1_cuarto1_on")){
                agregar_tabla("ac1_cuarto1");
                states.escena5.ac = "ac1_cuarto1_off";
                this.renderable.setCurrentAnimation("ac1_cuarto1_off");
            }

            else{
                agregar_tabla("ac2_cuarto1");
                states.escena5.ac = "ac2_cuarto1_off";
                this.renderable.setCurrentAnimation("ac2_cuarto1_off");
            }

        }
        
        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});








game.SalirCuarto = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cuarto", [6]);
        this.renderable.setCurrentAnimation("salir_cuarto");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
      //  me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(160,320), 90, 90), hand.bind(this), false);


    },


    onMouseDown : function() {

        

    	if(me.levelDirector.getCurrentLevelId() == 'escena_05'){

	        me.audio.play("dopen");
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

