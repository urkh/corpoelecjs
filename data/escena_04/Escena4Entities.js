game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("lavadora_off", [0]);
        this.renderable.addAnimation("lavadora_on", [1,2], 100);
        this.renderable.setCurrentAnimation(states.escena4.lavadora);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("lavadora");

        if(this.renderable.isCurrentAnimation("lavadora_off")){
            states.escena4.lavadora = "1avadora_on";
            this.renderable.setCurrentAnimation("lavadora_on");
        }

        else{
            states.escena4.lavadora = "1avadora_off";
            this.renderable.setCurrentAnimation("lavadora_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Secadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("secadora_off", [0]);
        this.renderable.addAnimation("secadora_on", [1,2], 100);
        this.renderable.setCurrentAnimation(states.escena4.secadora);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("secadora");

        if(this.renderable.isCurrentAnimation("secadora_off")){
            states.escena4.secadora = "secadora_on";
            this.renderable.setCurrentAnimation("secadora_on");
        }

        else{
            states.escena4.secadora = "secadora_off";
            this.renderable.setCurrentAnimation("secadora_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Plancha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("plancha_off", [1]);
        this.renderable.addAnimation("plancha_on", [0]);
        this.renderable.setCurrentAnimation(states.escena4.plancha);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("plancha");

        if(this.renderable.isCurrentAnimation("plancha_off")){
            states.escena4.plancha = "plancha_on";
            this.renderable.setCurrentAnimation("plancha_on");
        }

        else{
            states.escena4.plancha = "plancha_off";
            this.renderable.setCurrentAnimation("plancha_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.Calentador = me.ObjectEntity.extend({



    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("cal1_off", [0]);
        this.renderable.addAnimation("cal1_on", [1]);
        this.renderable.addAnimation("cal2_off", [2]);
        this.renderable.addAnimation("cal2_on", [3]);
        this.renderable.setCurrentAnimation(states.escena4.calentador);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1350,300), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1550,300), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("cal1_off")){
            states.escena4.calentador = "cal2_off";
            this.renderable.setCurrentAnimation("cal2_off");
        }

        else if(this.renderable.isCurrentAnimation("cal2_off")){
            states.escena4.calentador = "cal1_off";
            this.renderable.setCurrentAnimation("cal1_off");
        }

        else if(this.renderable.isCurrentAnimation("cal1_on")){
            states.escena4.calentador = "cal2_on";
            this.renderable.setCurrentAnimation("cal2_on");
        }

        else{
            states.escena4.calentador = "cal1_on";
            this.renderable.setCurrentAnimation("cal1_on");
        }


    },


    onMouseDown: function() {

        if(this.renderable.isCurrentAnimation("cal1_off")){
            agregar_tabla("cal1");
            states.escena4.calentador = "cal1_on";
            this.renderable.setCurrentAnimation("cal1_on");
        }

        else if(this.renderable.isCurrentAnimation("cal2_off")){
            agregar_tabla("cal2");
            states.escena4.calentador = "cal2_on";
            this.renderable.setCurrentAnimation("cal2_on");
        }

        else if(this.renderable.isCurrentAnimation("cal1_on")){
            agregar_tabla("cal1");
            states.escena4.calentador = "cal1_off";
            this.renderable.setCurrentAnimation("cal1_off");
        }

        else{
            agregar_tabla("cal2");
            states.escena4.calentador = "cal2_off";
            this.renderable.setCurrentAnimation("cal2_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});






game.BombilloE4 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_off", [2]);
        this.renderable.addAnimation("bom1_on", [3]);
        this.renderable.addAnimation("bom2_off", [0]);
        this.renderable.addAnimation("bom2_on", [1]);
        this.renderable.setCurrentAnimation(states.escena4.bombillo);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(660,300), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(770,300), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_on")){
            states.escena4.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_off")){
            states.escena4.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            states.escena4.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        else{
            states.escena4.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            agregar_tabla("bom1");
            states.escena4.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
           agregar_tabla("bom2");
           states.escena4.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            agregar_tabla("bom2");
            states.escena4.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            agregar_tabla("bom1");
            states.escena4.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },



});









game.SalirLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_lavandero",[5]);
        this.renderable.setCurrentAnimation("salir_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        me.audio.stop("lavadora");
        me.audio.stop("secadora");
        me.audio.play("dclose");

        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_03");

            })

        );
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});

