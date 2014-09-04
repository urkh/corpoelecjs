game.Ducha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("ducha_normal", [2]);
        this.renderable.addAnimation("ducha_normal2", [2]);
        this.renderable.addAnimation("ducha_corona_off", [4]);
        this.renderable.addAnimation("ducha_corona_on", [5]);
        this.renderable.setCurrentAnimation(states.escena6.ducha);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 20;
        this.getShape().pos.y = -30;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(330,260), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(470,260), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){


        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ducha_corona_off")){
            states.escena6.ducha = "ducha_normal";
            this.renderable.setCurrentAnimation("ducha_normal");
        }

        else if(this.renderable.isCurrentAnimation("ducha_corona_on")){
            states.escena6.ducha = "ducha_normal2";
            this.renderable.setCurrentAnimation("ducha_normal2");
        }

        else if(this.renderable.isCurrentAnimation("ducha_normal2")){
            states.escena6.ducha = "ducha_corona_off";
            this.renderable.setCurrentAnimation("ducha_corona_off");
        }

        else{
            states.escena6.ducha = "ducha_corona_on";
            this.renderable.setCurrentAnimation("ducha_corona_on");
        }


    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("ducha_corona_off")){
            agregar_tabla("ducha_corona");
            states.escena6.ducha = "ducha_corona_on";
            this.renderable.setCurrentAnimation("ducha_corona_on");
        }

        else if(this.renderable.isCurrentAnimation("ducha_corona_on")){
            agregar_tabla("ducha_corona");
            states.escena6.ducha = "ducha_corona_off";
            this.renderable.setCurrentAnimation("ducha_corona_off");
        }

        else{
            states.escena6.ducha = "ducha_normal";
        }
        
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BombilloE6 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_bano_off", [2]);
        this.renderable.addAnimation("bom1_bano_on", [3]);
        this.renderable.addAnimation("bom2_bano_off", [0]);
        this.renderable.addAnimation("bom2_bano_on", [1]);
        this.renderable.setCurrentAnimation(states.escena6.bombillo);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 95;
        this.getShape().pos.y = 25;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(730,60), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,60), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_bano_on")){
            states.escena6.bombillo = "bom2_bano_on";
            this.renderable.setCurrentAnimation("bom2_bano_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_bano_off")){
            states.escena6.bombillo = "bom2_bano_off";
            this.renderable.setCurrentAnimation("bom2_bano_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_bano_on")){
            states.escena6.bombillo = "bom1_bano_on";
            this.renderable.setCurrentAnimation("bom1_bano_on");
        }

        else{
            states.escena6.bombillo = "bom1_bano_off";
            this.renderable.setCurrentAnimation("bom1_bano_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_bano_on")){
            agregar_tabla("bom1_bano");
            states.escena6.bombillo = "bom1_bano_off";
            this.renderable.setCurrentAnimation("bom1_bano_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_bano_on")){
            agregar_tabla("bom2_bano");
            states.escena6.bombillo = "bom2_bano_off";
            this.renderable.setCurrentAnimation("bom2_bano_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_bano_off")) {
            agregar_tabla("bom2_bano");
            states.escena6.bombillo = "bom2_bano_on";
            this.renderable.setCurrentAnimation("bom2_bano_on");
        }

        else{
            agregar_tabla("bom1_bano");
            states.escena6.bombillo = "bom1_bano_on";
            this.renderable.setCurrentAnimation("bom1_bano_on");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Afeitadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("afeitadora_off", [0]);
        this.renderable.addAnimation("afeitadora_on", [1]);
        this.renderable.setCurrentAnimation(states.escena6.afeitadora);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 15;
        this.getShape().pos.y = -20;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        agregar_tabla("afeitadora");

        if(this.renderable.isCurrentAnimation("afeitadora_off")) {
            states.escena6.afeitadora = "afeitadora_on";
            this.renderable.setCurrentAnimation("afeitadora_on");
        }

        else{
            states.escena6.afeitadora = "afeitadora_off";
            this.renderable.setCurrentAnimation("afeitadora_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Secador = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("secador_off", [2]);
        this.renderable.addAnimation("secador_on", [3]);
        this.renderable.setCurrentAnimation(states.escena6.secador);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 0;
        this.getShape().pos.y = -20;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {
        
        agregar_tabla("secador");

        if(this.renderable.isCurrentAnimation("secador_off")) {
            states.escena6.secador = "secador_on";
            this.renderable.setCurrentAnimation("secador_on");
        }

        else{
            states.escena6.secador = "secador_off";
            this.renderable.setCurrentAnimation("secador_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.SalirBano = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_bano", [8]);
        this.renderable.setCurrentAnimation("salir_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
     //   me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(1190,40), 90, 90), hand.bind(this), false);
        
    },

    onMouseDown : function() {

        

        if(me.levelDirector.getCurrentLevelId() == 'escena_06'){
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