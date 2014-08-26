game.Televisor = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("tv1_off", [0]);
        this.renderable.addAnimation("tv1_on", [1]);
        this.renderable.addAnimation("tv2_off", [2]);
        this.renderable.addAnimation("tv2_on", [3]);
        this.renderable.addAnimation("tv3_off", [4]);
        this.renderable.addAnimation("tv3_on", [5]);
        this.renderable.setCurrentAnimation(states.escena2.televisor);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(150,600), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(450,600), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_off")){
            states.escena2.televisor = "tv2_off";
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else if(this.renderable.isCurrentAnimation("tv2_off")){
            states.escena2.televisor = "tv3_off";
            this.renderable.setCurrentAnimation("tv3_off");
        }

        else if(this.renderable.isCurrentAnimation("tv3_off")){
            states.escena2.televisor = "tv1_off";
            this.renderable.setCurrentAnimation("tv1_off");
        } 

        else if(this.renderable.isCurrentAnimation("tv1_on")){
            states.escena2.televisor = "tv2_on";
            this.renderable.setCurrentAnimation("tv2_on");
        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            states.escena2.televisor = "tv3_on";
            this.renderable.setCurrentAnimation("tv3_on");
        }

        else{
            states.escena2.televisor = "tv1_on";
            this.renderable.setCurrentAnimation("tv1_on");
        } 

        
    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_on")){
            agregar_tabla("tv1");
            states.escena2.televisor = "tv1_off";
            this.renderable.setCurrentAnimation("tv1_off");
        }

        else if(this.renderable.isCurrentAnimation("tv1_off")){
            agregar_tabla("tv1");
            states.escena2.televisor = "tv1_on";
            this.renderable.setCurrentAnimation("tv1_on");
        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            agregar_tabla("tv2");
            states.escena2.televisor = "tv2_off";
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else if(this.renderable.isCurrentAnimation("tv2_off")){
            agregar_tabla("tv2");
            states.escena2.televisor = "tv2_on";
            this.renderable.setCurrentAnimation("tv2_on");
        }

        else if(this.renderable.isCurrentAnimation("tv3_on")){
            agregar_tabla("tv3");
            states.escena2.televisor = "tv3_off";
            this.renderable.setCurrentAnimation("tv3_off");
        }

        else {
            agregar_tabla("tv3");
            states.escena2.televisor = "tv3_on";
            this.renderable.setCurrentAnimation("tv3_on");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.BombilloE2 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("bom2_off", [2]);
        this.renderable.addAnimation("bom2_on", [3]);
        this.renderable.addAnimation("bom1_off", [0]);
        this.renderable.addAnimation("bom1_on", [1]);
        this.renderable.setCurrentAnimation(states.escena2.bombillo);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(220,180), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(590,180), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_on")){
            states.escena2.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_off")){
            states.escena2.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            states.escena2.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        else{
            states.escena2.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            agregar_tabla("bom1");
            states.escena2.bombillo = "bom1_off";
            this.renderable.setCurrentAnimation("bom1_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            agregar_tabla("bom2");
            states.escena2.bombillo = "bom2_off";
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            agregar_tabla("bom2");
            states.escena2.bombillo = "bom2_on";
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            agregar_tabla("bom1");
            states.escena2.bombillo = "bom1_on";
            this.renderable.setCurrentAnimation("bom1_on");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },



});





game.RadioR = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("radio_r_on", [1]);
        this.renderable.addAnimation("radio_r_off", [0]);
        this.renderable.setCurrentAnimation(states.escena2.radio_r);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("radio_r");
       
        if(this.renderable.isCurrentAnimation("radio_r_off")){           
            //consumos.radio_r.apagado=false;  
            //consumo(consumos.radio_r.id);          
            //me.audio.play("prender");
            //me.audio.play("radio");
            states.escena2.radio_r = "radio_r_on";
            this.renderable.setCurrentAnimation("radio_r_on");


        }else{
            //consumos.radio_r.apagado=true;  
            //consumo(consumos.radio_r.id);    
            //me.audio.play("apagar");
            //me.audio.pause("radio");
            states.escena2.radio_r = "radio_r_off";
            this.renderable.setCurrentAnimation("radio_r_off");

        }


        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.EntrarCuarto1 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_cuarto1", [2]);
        this.renderable.setCurrentAnimation("entrar_cuarto1");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.play("dopen");
        me.audio.stop("radio");
       
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_05");

            })

        );
        
        
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.EntrarCuarto2 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_cuarto2", [3]);
        this.renderable.setCurrentAnimation("entrar_cuarto2");


        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.play("dopen");
        me.audio.stop("radio");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_07");

            })

        );

        
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});





game.EntrarCocina = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("entrar_cocina",[0]);
        this.renderable.setCurrentAnimation("entrar_cocina");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {
        me.audio.play("dopen");
        me.audio.stop("radio");
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




game.EntrarBano = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_bano", [1]);
        this.renderable.setCurrentAnimation("entrar_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },

    onMouseDown : function() {

        me.audio.play("dopen");
        me.audio.stop("radio");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_06");

            })

        );
        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },

});
