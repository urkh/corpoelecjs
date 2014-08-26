game.Micro = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("microondas_off", [0]);
        this.renderable.addAnimation("microondas_on", [1]);
        this.renderable.setCurrentAnimation(states.escena3.microondas);        

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("microondas");

        if(this.renderable.isCurrentAnimation("microondas_off")){
            states.escena3.microondas = "microondas_on";
            this.renderable.setCurrentAnimation("microondas_on");
        }else{
            states.escena3.microondas = "microondas_off";
            this.renderable.setCurrentAnimation("microondas_off");
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
        this.renderable.setCurrentAnimation(states.escena3.cocina);        

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("cocina");
        

        if(this.renderable.isCurrentAnimation("cocina_off")){
            states.escena3.cocina = "cocina_on";
            this.renderable.setCurrentAnimation("cocina_on");
        }else{
            states.escena3.cocina = "cocina_off";
            this.renderable.setCurrentAnimation("cocina_off");
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
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("licuadora");


        if(this.renderable.isCurrentAnimation("licuadora_off")){
            states.escena3.licuadora = "licuadora_on";
            this.renderable.setCurrentAnimation("licuadora_on");
        }else{
            states.escena3.licuadora = "licuadora_off";
            this.renderable.setCurrentAnimation("licuadora_off");
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





game.BombilloE3 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_off", [0]);
        this.renderable.addAnimation("bom1_on", [1]);
        this.renderable.addAnimation("bom2_off", [2]);
        this.renderable.addAnimation("bom2_on", [3]);
        this.renderable.setCurrentAnimation(states.escena3.bombillo);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,170), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1140,170), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_on")){
            states.escena3.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_off")){
            states.escena3.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            states.escena3.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        else{
            states.escena3.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            agregar_tabla("bom1");
            states.escena3.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            agregar_tabla("bom2");
            states.escena3.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            agregar_tabla("bom2");
            states.escena3.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            agregar_tabla("bom1");
            states.escena3.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        return false;
    
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
        
    },


    onMouseDown : function() {

        me.audio.stop("licuadora");
        me.audio.stop("microondas");
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






game.Nevera = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("nevera");   

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
        
    },


    onMouseDown : function() {
        me.audio.stop("licuadora");
        me.audio.stop("microondas");
        me.audio.play("dopen");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_04");

            })

        );
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});
