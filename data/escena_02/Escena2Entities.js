game.Televisor = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("tv1_off", [0]);
        this.renderable.addAnimation("tv1_on", [1]);
        this.renderable.addAnimation("tv2_off", [2]);
        this.renderable.addAnimation("tv2_on", [3]);
        this.renderable.addAnimation("tv3_off", [4]);
        this.renderable.addAnimation("tv3_on", [5]);
        this.renderable.setCurrentAnimation("tv1_off");

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(150,600), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(450,600), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_off")){

            this.renderable.setCurrentAnimation("tv2_off");

        }

        else if(this.renderable.isCurrentAnimation("tv2_off")){

            this.renderable.setCurrentAnimation("tv3_off");

        }

        else if(this.renderable.isCurrentAnimation("tv3_off")){

            this.renderable.setCurrentAnimation("tv1_off");

        } 

        else if(this.renderable.isCurrentAnimation("tv1_on")){

            this.renderable.setCurrentAnimation("tv2_on");

        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){

            this.renderable.setCurrentAnimation("tv3_on");

        }

        else{

            this.renderable.setCurrentAnimation("tv1_on");

        } 

        
    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_on")){
            agregar_tabla("tv1");
            //consumos.tv1.apagado=true;  
            //consumo(consumos.tv1.id);  
            //me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv1_off");

        }
        else if(this.renderable.isCurrentAnimation("tv1_off")){
            //consumos.tv1.apagado=false;
            //consumo(consumos.tv1.id);
            agregar_tabla("tv1");
            //me.audio.play("prender");
            this.renderable.setCurrentAnimation("tv1_on");

        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            agregar_tabla("tv2");
            //consumos.tv2.apagado=true;  
            //consumo(consumos.tv2.id);  
            //me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else if(this.renderable.isCurrentAnimation("tv2_off")){
            
            //consumos.tv2.apagado=false;
            //consumo(consumos.tv2.id);
            agregar_tabla("tv2");
            //me.audio.play("prender");   
            this.renderable.setCurrentAnimation("tv2_on");
        }

        else if(this.renderable.isCurrentAnimation("tv3_on")){
            agregar_tabla("tv3");
            //consumos.tv3.apagado=true;  
            //consumo(consumos.tv3.id);  
            //me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv3_off");
        }

        else {
            //consumos.tv3.apagado=false;
            //consumo(consumos.tv3.id);
            agregar_tabla("tv3");
            //me.audio.play("prender");   
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
        this.renderable.setCurrentAnimation("bom1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(220,180), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(590,180), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_on")){
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_off")){
            this.renderable.setCurrentAnimation("bom2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            this.renderable.setCurrentAnimation("bom1_on");
        }

        else{
            this.renderable.setCurrentAnimation("bom1_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            agregar_tabla("bom1");
            //consumos.bom1.apagado=true;  
            //consumo(consumos.bom1.id);     
            //me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bom1_off");

        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
           agregar_tabla("bom2");
           // consumos.bom2.apagado=true;  
           // consumo(consumos.bom2.id);     
           // me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            agregar_tabla("bom2");
            //consumos.bom2.apagado=false;  
            //consumo(consumos.bom2.id);     
            //me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            agregar_tabla("bom1");
            //consumos.bom1.apagado=false;  
            //consumo(consumos.bom1.id);     
            //me.audio.play("prender");
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

        this.renderable.addAnimation("radio_on", [1]);
        this.renderable.addAnimation("radio_off", [0]);
        this.renderable.setCurrentAnimation("radio_off");

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {


       
        if(this.renderable.isCurrentAnimation("radio_off")){

            agregar_tabla("radio_r");
            //consumos.radio_r.apagado=false;  
            //consumo(consumos.radio_r.id);          
            //me.audio.play("prender");
            me.audio.play("radio");
            this.renderable.setCurrentAnimation("radio_on");


        }else{
            agregar_tabla("radio_r");
            //consumos.radio_r.apagado=true;  
            //consumo(consumos.radio_r.id);    
            //me.audio.play("apagar");
            me.audio.pause("radio");
            this.renderable.setCurrentAnimation("radio_off");

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
        //this.cambiar = new me.LevelEntity(1, 1, settings);
        //this.cambiar.goTo("escena_05");
        me.state.change(me.state.PLAY, "escena_05");
       

       /* me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_05");

            })

        );
        */
        
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
