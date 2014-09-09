game.Micro = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("microondas_off", [0]);
        this.renderable.addAnimation("microondas_on", [1]);
        this.renderable.setCurrentAnimation(states.escena3.microondas);   
        this.getShape().resize(64,64);
        this.getShape().pos.x = 100;
        this.getShape().pos.y = 30;     

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {


        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            agregar_tabla("microondas");

            if(this.renderable.isCurrentAnimation("microondas_off")){
                states.escena3.microondas = "microondas_on";
                this.renderable.setCurrentAnimation("microondas_on");
            }else{
                states.escena3.microondas = "microondas_off";
                this.renderable.setCurrentAnimation("microondas_off");
            }

        }


        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Cocina = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("cocina_off", [0]);
        this.renderable.addAnimation("cocina_on", [1]);
        this.renderable.addAnimation("cocinag", [2]);
        this.renderable.addAnimation("cocinag2", [2]);
        this.renderable.setCurrentAnimation(states.escena3.cocina);     
        this.getShape().resize(64,64);
        this.getShape().pos.x = 240;
        this.getShape().pos.y = 180;   

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1040,655), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1400,655), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){


        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("cocina_off")){
                states.escena3.cocina = "cocinag";
                this.renderable.setCurrentAnimation("cocinag");
            }

            else if(this.renderable.isCurrentAnimation("cocina_on")){
                states.escena3.cocina = "cocinag2";
                this.renderable.setCurrentAnimation("cocinag2");
            }

            else if(this.renderable.isCurrentAnimation("cocinag2")){
                states.escena3.cocina = "cocina_off";
                this.renderable.setCurrentAnimation("cocina_off");
            }

            else{
                states.escena3.cocina = "cocina_on";
                this.renderable.setCurrentAnimation("cocina_on");
            }

        }


    },

    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            if(this.renderable.isCurrentAnimation("cocina_off")){
                agregar_tabla("cocina");
                states.escena3.cocina = "cocina_on";
                this.renderable.setCurrentAnimation("cocina_on");
            }

            else if(this.renderable.isCurrentAnimation("cocina_on")){
                agregar_tabla("cocina");
                states.escena3.cocina = "cocina_off";
                this.renderable.setCurrentAnimation("cocina_off");
            }

            else{
                states.escena3.cocina = "cocinag";
            }

        }
        
        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Licuadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("licuadora_off", [0]);
        this.renderable.addAnimation("licuadora_on", [1]);
        this.renderable.setCurrentAnimation(states.escena3.licuadora);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 30;
        this.getShape().pos.y = 50;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            agregar_tabla("licuadora");


            if(this.renderable.isCurrentAnimation("licuadora_off")){
                states.escena3.licuadora = "licuadora_on";
                this.renderable.setCurrentAnimation("licuadora_on");
            }else{
                states.escena3.licuadora = "licuadora_off";
                this.renderable.setCurrentAnimation("licuadora_off");
            }

        }
        

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BombilloE3 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_cocina_off", [2]);
        this.renderable.addAnimation("bom1_cocina_on", [3]);
        this.renderable.addAnimation("bom2_cocina_off", [0]);
        this.renderable.addAnimation("bom2_cocina_on", [1]);
        this.renderable.setCurrentAnimation(states.escena3.bombillo);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,170), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1140,170), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            me.audio.play("cambiar");

            if(this.renderable.isCurrentAnimation("bom1_cocina_on")){
                states.escena3.bombillo = "bom2_cocina_on";
                this.renderable.setCurrentAnimation("bom2_cocina_on");
            }

            else if(this.renderable.isCurrentAnimation("bom1_cocina_off")){
                states.escena3.bombillo = "bom2_cocina_off";
                this.renderable.setCurrentAnimation("bom2_cocina_off");
            }

            else if(this.renderable.isCurrentAnimation("bom2_on")){
                states.escena3.bombillo = "bom1_cocina_on";
                this.renderable.setCurrentAnimation("bom1_cocina_on");
            }

            else{
                states.escena3.bombillo = "bom1_cocina_off";
                this.renderable.setCurrentAnimation("bom1_cocina_off");
            }

        }

    },



    onMouseDown : function() {


        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            if(this.renderable.isCurrentAnimation("bom1_cocina_on")){
                agregar_tabla("bom1_cocina");
                states.escena3.bombillo = "bom1_cocina_off";
                this.renderable.setCurrentAnimation("bom1_cocina_off");
            }

            else if(this.renderable.isCurrentAnimation("bom2_cocina_on")){
                agregar_tabla("bom2_cocina");
                states.escena3.bombillo = "bom2_cocina_off";
                this.renderable.setCurrentAnimation("bom2_cocina_off");
            }
            
            else if (this.renderable.isCurrentAnimation("bom2_cocina_off")) {
                agregar_tabla("bom2_cocina");
                states.escena3.bombillo = "bom2_cocina_on";
                this.renderable.setCurrentAnimation("bom2_cocina_on");
            }

            else{
                agregar_tabla("bom1_cocina");
                states.escena3.bombillo = "bom1_cocina_on";
                this.renderable.setCurrentAnimation("bom1_cocina_on");
            }

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },



});



game.Campana = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("campana_off", [0]);
        this.renderable.addAnimation("campana_on", [1]);
        this.renderable.setCurrentAnimation(states.escena3.campana);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 130;
        this.getShape().pos.y = 170;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            agregar_tabla("campana");

            if(this.renderable.isCurrentAnimation("campana_on")){
                states.escena3.campana = "campana_off";
                this.renderable.setCurrentAnimation("campana_off");
            }

            else{
                states.escena3.campana = "campana_on";
                this.renderable.setCurrentAnimation("campana_on");
            }

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Nevera = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("nevera_off", [0]);
        this.renderable.addAnimation("nevera_on", [1]);
        this.renderable.setCurrentAnimation(states.escena3.nevera);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 80;
        this.getShape().pos.y = 100;

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){

            agregar_tabla("nevera");

            if(this.renderable.isCurrentAnimation("nevera_on")){
                states.escena3.nevera = "nevera_off";
                this.renderable.setCurrentAnimation("nevera_off");
            }

            else{
                states.escena3.nevera = "nevera_on";
                this.renderable.setCurrentAnimation("nevera_on");
            }

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Reloj = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("reloj", [0,1,2,3,4,5,6,7,8,9,10,11], 1000);       
        this.renderable.setCurrentAnimation("reloj");
        
    },

  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.SalirCocina = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cocina", [8]);
        this.renderable.setCurrentAnimation("salir_cocina");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
       // me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(1475,95), 90, 90), hand.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){
            me.audio.stop("licuadora");
            me.audio.stop("microondas");
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



game.EntrarLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_lavandero", [4]);
        this.renderable.setCurrentAnimation("entrar_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
       // me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(170,370), 90, 90), hand.bind(this), false);
        
    },


    onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_03'){
            me.audio.stop("licuadora");
            me.audio.stop("microondas");
            me.audio.play("dopen");
            me.game.viewport.fadeIn("#000000", 450, 

                (function (){

                    me.levelDirector.loadLevel("escena_04");

                })

            );
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});
