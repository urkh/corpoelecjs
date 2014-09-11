game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("lavadora_off", [0]);
        this.renderable.addAnimation("lavadora_on", [1,2], 100);
        this.renderable.setCurrentAnimation(states.escena4.lavadora);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 130;
        this.getShape().pos.y = 210;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

            if(this.renderable.isCurrentAnimation("lavadora_off")){
                agregar_tabla("lavadora");
                states.escena4.lavadora = "lavadora_on";
                this.renderable.setCurrentAnimation("lavadora_on");
            }

            else{
                states.escena4.lavadora = "lavadora_off";
                this.renderable.setCurrentAnimation("lavadora_off");
                eliminar_tabla("lavadora");
            }

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
        this.getShape().resize(64,64);
        this.getShape().pos.x = 180;
        this.getShape().pos.y = 210;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

            if(this.renderable.isCurrentAnimation("secadora_off")){
                agregar_tabla("secadora");
                states.escena4.secadora = "secadora_on";
                this.renderable.setCurrentAnimation("secadora_on");
            }

            else{
                states.escena4.secadora = "secadora_off";
                this.renderable.setCurrentAnimation("secadora_off");
                eliminar_tabla("secadora");
            }

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
        this.getShape().resize(64,64);
        this.getShape().pos.x = 70;
        this.getShape().pos.y = 25;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

            if(this.renderable.isCurrentAnimation("plancha_off")){
                agregar_tabla("plancha");
                states.escena4.plancha = "plancha_on";
                this.renderable.setCurrentAnimation("plancha_on");
            }

            else{
                states.escena4.plancha = "plancha_off";
                this.renderable.setCurrentAnimation("plancha_off");
                eliminar_tabla("plancha");
            }

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
        this.renderable.addAnimation("cal3_off", [4]);
        this.renderable.addAnimation("cal3_on", [5]);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 95;
        this.getShape().pos.y = 90;
        this.renderable.setCurrentAnimation(states.escena4.calentador);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1350,300), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1550,300), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("cal1_off") || this.renderable.isCurrentAnimation("cal1_on")){
                states.escena4.calentador = "cal2_off";
                this.renderable.setCurrentAnimation("cal2_off");
                eliminar_tabla("cal1");
            }

            else if(this.renderable.isCurrentAnimation("cal2_off") || this.renderable.isCurrentAnimation("cal2_on")){
                states.escena4.calentador = "cal3_off";
                this.renderable.setCurrentAnimation("cal3_off");
                eliminar_tabla("cal2");
            }

            else {
                states.escena4.calentador = "cal1_off";
                this.renderable.setCurrentAnimation("cal1_off");
                eliminar_tabla("cal3");
            }


        }


    },


    onMouseDown: function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

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

            else if(this.renderable.isCurrentAnimation("cal3_off")){
                agregar_tabla("cal3");
                states.escena4.calentador = "cal3_on";
                this.renderable.setCurrentAnimation("cal3_on");
            }

            else if(this.renderable.isCurrentAnimation("cal1_on")){
                states.escena4.calentador = "cal1_off";
                this.renderable.setCurrentAnimation("cal1_off");
                eliminar_tabla("cal1");
            }

            else if(this.renderable.isCurrentAnimation("cal2_on")){
                states.escena4.calentador = "cal2_off";
                this.renderable.setCurrentAnimation("cal2_off");
                eliminar_tabla("cal2");
            }

            else{
                states.escena4.calentador = "cal3_off";
                this.renderable.setCurrentAnimation("cal3_off");
                eliminar_tabla("cal3");
            }

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

        this.renderable.addAnimation("bom1_lavandero_off", [2]);
        this.renderable.addAnimation("bom1_lavandero_on", [3]);
        this.renderable.addAnimation("bom2_lavandero_off", [0]);
        this.renderable.addAnimation("bom2_lavandero_on", [1]);
        this.renderable.setCurrentAnimation(states.escena4.bombillo);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 0;
        this.getShape().pos.y = 20;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(660,300), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(770,300), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("bom1_lavandero_off") || this.renderable.isCurrentAnimation("bom1_lavandero_on")){
                states.escena4.bombillo = "bom2_lavandero_off";
                this.renderable.setCurrentAnimation("bom2_lavandero_off");
                eliminar_tabla("bom1_lavandero");
            }

            else{
                states.escena4.bombillo = "bom1_lavandero_off";
                this.renderable.setCurrentAnimation("bom1_lavandero_off");
                eliminar_tabla("bom2_lavandero");
            }

        }

    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){

            if(this.renderable.isCurrentAnimation("bom1_lavandero_on")){
                states.escena4.bombillo = "bom1_lavandero_off";
                this.renderable.setCurrentAnimation("bom1_lavandero_off");
                eliminar_tabla("bom1_lavandero");
            }

            else if(this.renderable.isCurrentAnimation("bom2_lavandero_on")){
                states.escena4.bombillo = "bom2_lavandero_off";
                this.renderable.setCurrentAnimation("bom2_lavandero_off");
                eliminar_tabla("bom2_lavandero");
            }
            
            else if (this.renderable.isCurrentAnimation("bom2_lavandero_off")) {
                agregar_tabla("bom2_lavandero");
                states.escena4.bombillo = "bom2_lavandero_on";
                this.renderable.setCurrentAnimation("bom2_lavandero_on");
            }

            else{
                agregar_tabla("bom1_lavandero");
                states.escena4.bombillo = "bom1_lavandero_on";
                this.renderable.setCurrentAnimation("bom1_lavandero_on");
            }

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
       // me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(1330,30), 90, 90), hand.bind(this), false);
        
    },


    onMouseDown : function() {
        

        if(me.levelDirector.getCurrentLevelId() == 'escena_04'){
            me.audio.stop("lavadora");
            me.audio.stop("secadora");
            me.audio.play("open");

            me.game.viewport.fadeIn("#000000", 450, 

                (function (){

                    me.levelDirector.loadLevel("escena_03");

                })

            );
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});

