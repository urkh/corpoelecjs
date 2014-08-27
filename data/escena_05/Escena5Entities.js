game.Computadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("pc1_off", [0]);
        this.renderable.addAnimation("pc1_on", [1]);
        this.renderable.addAnimation("pc2_off", [2]);
        this.renderable.addAnimation("pc2_on", [3]);
        this.renderable.setCurrentAnimation(states.escena5.computadora);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(270,550), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(600,550), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

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


    },


    onMouseDown : function() {

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

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Lampara = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lamp1_off", [0]);
        this.renderable.addAnimation("lamp1_on", [1]);
        this.renderable.addAnimation("lamp2_off", [2]);
        this.renderable.addAnimation("lamp2_on", [3]);
        this.renderable.setCurrentAnimation(states.escena5.lampara);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,610), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(740,590), 64, 64), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("lamp1_off")){
                   
            states.escena5.lampara = "lamp2_off";
            this.renderable.setCurrentAnimation("lamp2_off");

        }

        else if(this.renderable.isCurrentAnimation("lamp2_off")){
            states.escena5.lampara = "lamp1_off";
            this.renderable.setCurrentAnimation("lamp1_off");
        }

        else if(this.renderable.isCurrentAnimation("lamp1_on")){
            states.escena5.lampara = "lamp2_on";
            this.renderable.setCurrentAnimation("lamp2_on");
        }

        else{
            states.escena5.lampara = "lamp1_on";
            this.renderable.setCurrentAnimation("lamp1_on");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("lamp1_off")){
            agregar_tabla("lamp1");
            states.escena5.lampara = "lamp1_on";
            this.renderable.setCurrentAnimation("lamp1_on");
        }

        else if(this.renderable.isCurrentAnimation("lamp2_off")){
            agregar_tabla("lamp2");
            states.escena5.lampara = "lamp2_on";
            this.renderable.setCurrentAnimation("lamp2_on");
        }

        else if(this.renderable.isCurrentAnimation("lamp1_on")){
            agregar_tabla("lamp1");
            states.escena5.lampara = "lamp1_off";
            this.renderable.setCurrentAnimation("lamp1_off");
        }

        else{
            agregar_tabla("lamp2");
            states.escena5.lampara = "lamp2_off";
            this.renderable.setCurrentAnimation("lamp2_off");
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
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(560,200), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(760,200), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

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

    },



    onMouseDown : function() {

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
        this.renderable.addAnimation("ac1_cuarto1_loop", [1, 2], 300);
        this.renderable.addAnimation("ac2_cuarto1_off", [3]);
        this.renderable.addAnimation("ac2_cuarto1_loop", [4, 5], 300);
        this.renderable.setCurrentAnimation(states.escena5.ac);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(800,90), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1330,90), 32, 32), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ac1_cuarto1_off")){
            states.escena5.ac = "ac2_cuarto1_off";
            this.renderable.setCurrentAnimation("ac2_cuarto1_off");
        }

        else if(this.renderable.isCurrentAnimation("ac2_cuarto1_off")){
            states.escena5.ac = "ac1_cuarto1_off";
            this.renderable.setCurrentAnimation("ac1_cuarto1_off");
        }

        else if(this.renderable.isCurrentAnimation("ac1_cuarto1_loop")){
            states.escena5.ac = "ac2_cuarto1_loop";
            this.renderable.setCurrentAnimation("ac2_cuarto1_loop");
        }

        else{
            states.escena5.ac = "ac1_cuarto1_loop";
            this.renderable.setCurrentAnimation("ac1_cuarto1_loop");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("ac1_cuarto1_off")){
            agregar_tabla("ac1_cuarto1");
            states.escena5.ac = "ac1_cuarto1_loop";
            this.renderable.setCurrentAnimation("ac1_cuarto1_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac2_cuarto1_off")){
            agregar_tabla("ac2_cuarto1");
            states.escena5.ac = "ac2_cuarto1_loop";
            this.renderable.setCurrentAnimation("ac2_cuarto1_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac1_cuarto1_loop")){
            agregar_tabla("ac1_cuarto1");
            states.escena5.ac = "ac1_cuarto1_off";
            this.renderable.setCurrentAnimation("ac1_cuarto1_off");
        }

        else{
            agregar_tabla("ac2_cuarto1");
            states.escena5.ac = "ac2_cuarto1_off";
            this.renderable.setCurrentAnimation("ac2_cuarto1_off");
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


    },


    onMouseDown : function() {

        me.audio.play("dopen");
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

