game.Televisor = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("tv1_sala_off", [0]);
        this.renderable.addAnimation("tv1_sala_on", [1]);
        this.renderable.addAnimation("tv2_sala_off", [2]);
        this.renderable.addAnimation("tv2_sala_on", [3]);
        this.renderable.addAnimation("tv3_sala_off", [4]);
        this.renderable.addAnimation("tv3_sala_on", [5]);
        this.renderable.setCurrentAnimation(states.escena2.televisor);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 130;
        this.getShape().pos.y = 80;

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(150,600), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(450,600), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_sala_off")){
            states.escena2.televisor = "tv2_sala_off";
            this.renderable.setCurrentAnimation("tv2_sala_off");
            this.getShape().resize(64,64);
            this.getShape().pos.x = 130;
            this.getShape().pos.y = 90;
        }

        else if(this.renderable.isCurrentAnimation("tv2_sala_off")){
            states.escena2.televisor = "tv3_sala_off";
            this.renderable.setCurrentAnimation("tv3_sala_off");
            this.getShape().resize(64,64);
            this.getShape().pos.x = 105;
            this.getShape().pos.y = 95;
        }

        else if(this.renderable.isCurrentAnimation("tv3_sala_off")){
            states.escena2.televisor = "tv1_sala_off";
            this.renderable.setCurrentAnimation("tv1_sala_off");
            this.getShape().resize(64,64);
            this.getShape().pos.x = 130;
            this.getShape().pos.y = 80;
        } 

        else if(this.renderable.isCurrentAnimation("tv1_sala_on")){
            states.escena2.televisor = "tv2_sala_on";
            this.renderable.setCurrentAnimation("tv2_sala_on");
        }

        else if(this.renderable.isCurrentAnimation("tv2_sala_on")){
            states.escena2.televisor = "tv3_sala_on";
            this.renderable.setCurrentAnimation("tv3_sala_on");
        }

        else{
            states.escena2.televisor = "tv1_sala_on";
            this.renderable.setCurrentAnimation("tv1_sala_on");
        } 

        
    },


    onMouseDown : function() {


        
       // console.log(this.getShape().width);
        //console.log(this.getShape().pos.y);

        if(this.renderable.isCurrentAnimation("tv1_sala_on")){
            agregar_tabla("tv1_sala");
            states.escena2.televisor = "tv1_sala_off";
            this.renderable.setCurrentAnimation("tv1_sala_off");
        }

        else if(this.renderable.isCurrentAnimation("tv1_sala_off")){
            agregar_tabla("tv1_sala");
            states.escena2.televisor = "tv1_sala_on";
            this.renderable.setCurrentAnimation("tv1_sala_on");
        }

        else if(this.renderable.isCurrentAnimation("tv2_sala_on")){
            agregar_tabla("tv2_sala");
            states.escena2.televisor = "tv2_sala_off";
            this.renderable.setCurrentAnimation("tv2_sala_off");
        }

        else if(this.renderable.isCurrentAnimation("tv2_sala_off")){
            agregar_tabla("tv2_sala");
            states.escena2.televisor = "tv2_sala_on";
            this.renderable.setCurrentAnimation("tv2_sala_on");
        }

        else if(this.renderable.isCurrentAnimation("tv3_sala_on")){
            agregar_tabla("tv3_sala");
            states.escena2.televisor = "tv3_sala_off";
            this.renderable.setCurrentAnimation("tv3_sala_off");
        }

        else {
            agregar_tabla("tv3_sala");
            states.escena2.televisor = "tv3_sala_on";
            this.renderable.setCurrentAnimation("tv3_sala_on");
        }

        return false;
    
    },
  

    update: function(dt){


        return this.parent(dt);
        
    },

});







game.AcE2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("ac1_cuarto3_off", [0]);
        this.renderable.addAnimation("ac1_cuarto3_loop", [1, 2], 300);
        this.renderable.addAnimation("ac2_cuarto3_off", [3]);
        this.renderable.addAnimation("ac2_cuarto3_loop", [4, 5], 300);
        this.renderable.setCurrentAnimation(states.escena2.ac);
        this.getShape().resize(164,164);
        this.getShape().pos.x = 130;
        this.getShape().pos.y = -40;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(850,70), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1370,70), 32, 32), this.cambiarS.bind(this), false);

    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ac1_cuarto3_off")){
            states.escena2.ac = "ac2_cuarto3_off";
            this.renderable.setCurrentAnimation("ac2_cuarto3_off");
        }

        else if(this.renderable.isCurrentAnimation("ac2_cuarto3_off")){
            states.escena2.ac = "ac1_cuarto3_off";
            this.renderable.setCurrentAnimation("ac1_cuarto3_off");
        }

        else if(this.renderable.isCurrentAnimation("ac1_cuarto3_loop")){
            states.escena2.ac = "ac2_cuarto3_loop";
            this.renderable.setCurrentAnimation("ac2_cuarto3_loop");
        }

        else{
            states.escena2.ac = "ac1_cuarto3_loop";
            this.renderable.setCurrentAnimation("ac1_cuarto3_loop");
        }

    },


    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("ac1_cuarto3_off")){
            agregar_tabla("ac1_cuarto3");
            states.escena2.ac = "ac1_cuarto3_loop";
            this.renderable.setCurrentAnimation("ac1_cuarto3_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac2_cuarto3_off")){
            agregar_tabla("ac2_cuarto3");
            states.escena2.ac = "ac2_cuarto3_loop";
            this.renderable.setCurrentAnimation("ac2_cuarto3_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac1_cuarto3_loop")){
            agregar_tabla("ac1_cuarto3");
            states.escena2.ac = "ac1_cuarto3_off";
            this.renderable.setCurrentAnimation("ac1_cuarto3_off");
        }

        else{
            agregar_tabla("ac2_cuarto3");
            states.escena2.ac = "ac2_cuarto3_off";
            this.renderable.setCurrentAnimation("ac2_cuarto3_off");
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
        this.renderable.addAnimation("bom2_sala_off", [2]);
        this.renderable.addAnimation("bom2_sala_on", [3]);
        this.renderable.addAnimation("bom1_sala_off", [0]);
        this.renderable.addAnimation("bom1_sala_on", [1]);
        this.renderable.setCurrentAnimation(states.escena2.bombillo);
        this.getShape().resize(64,64);
        this.getShape().pos.x = 205;
        this.getShape().pos.y = 95;
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(440,180), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(810,180), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_sala_on")){
            states.escena2.bombillo = "bom2_sala_on";
            this.renderable.setCurrentAnimation("bom2_sala_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_sala_off")){
            states.escena2.bombillo = "bom2_sala_off";
            this.renderable.setCurrentAnimation("bom2_sala_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_sala_on")){
            states.escena2.bombillo = "bom1_sala_on";
            this.renderable.setCurrentAnimation("bom1_sala_on");
        }

        else{
            states.escena2.bombillo = "bom1_sala_off";
            this.renderable.setCurrentAnimation("bom1_sala_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_sala_on")){
            agregar_tabla("bom1_sala");
            states.escena2.bombillo = "bom1_sala_off";
            this.renderable.setCurrentAnimation("bom1_sala_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_sala_on")){
            agregar_tabla("bom2_sala");
            states.escena2.bombillo = "bom2_sala_off";
            this.renderable.setCurrentAnimation("bom2_sala_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_sala_off")) {
            agregar_tabla("bom2_sala");
            states.escena2.bombillo = "bom2_sala_on";
            this.renderable.setCurrentAnimation("bom2_sala_on");
        }

        else{
            agregar_tabla("bom1_sala");
            states.escena2.bombillo = "bom1_sala_on";
            this.renderable.setCurrentAnimation("bom1_sala_on");
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
        this.getShape().resize(64,64);
        this.getShape().pos.x = 65;
        this.getShape().pos.y = 20;

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        agregar_tabla("radio_r");
       
        if(this.renderable.isCurrentAnimation("radio_r_off")){           
            states.escena2.radio_r = "radio_r_on";
            this.renderable.setCurrentAnimation("radio_r_on");
        }

        else{
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
        //me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(730,430), 90, 90), hand.bind(this), false);
        
    },


    onMouseDown : function() {
        
        //cuarto1.resize(27, 33, 55, 66);
        //cuarto2.resize(28, 31, 57, 62);
        //bano.resize(32,34, 64, 69)
        //console.log(me.game.world.getChildByName("entrar_cuarto2")[0].getShape());
        //console.log(me.levelDirector.getCurrentLevelId());
        


        if(me.levelDirector.getCurrentLevelId() == 'escena_02'){
            me.audio.play("dopen");
            me.audio.stop("radio");
            me.game.viewport.fadeIn("#000000", 450, 

                (function (){

                    me.levelDirector.loadLevel("escena_05");


                })
            );
        }
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
       // me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(780,560), 90, 90), hand.bind(this), false);
        
    },


    onMouseDown : function() {    

        if(me.levelDirector.getCurrentLevelId() == 'escena_02'){
            me.audio.play("dopen");
            me.audio.stop("radio");
            me.game.viewport.fadeIn("#000000", 450, 

                (function (){

                    me.levelDirector.loadLevel("escena_07");

                })

            );
        }

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
      //  me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(62,296), 128, 128), hand.bind(this), false);

        
    },

    onMouseDown : function() {

       
        if(me.levelDirector.getCurrentLevelId() == 'escena_02'){
            me.audio.play("dopen");
            me.audio.stop("radio");
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




game.EntrarBano = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_bano", [1]);
        this.renderable.setCurrentAnimation("entrar_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
    //    me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(670,550), 90, 90), hand.bind(this), false);


    },

    onMouseDown : function() {



        if(me.levelDirector.getCurrentLevelId() == 'escena_02'){
            me.audio.play("dopen");
            me.audio.stop("radio");
            me.game.viewport.fadeIn("#000000", 450, 

                (function (){
                    me.levelDirector.loadLevel("escena_06");
                })

            );
        }

        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Salida = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("salir", [9]);
        this.renderable.setCurrentAnimation("salir");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
       // me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(1410,590), 90, 90), hand.bind(this), false);

    },

    onMouseDown : function() {

        if(game.data.score>0){
                
            me.audio.stop("radio");
            game.data.game_over = true;


            if(game.data.score >= game.data.conmax){
                me.audio.play("pierde");
            }

            else{
                me.audio.play("gana");
            }
        }

        else{

            alert("Debe seleccionar al menos un electrodom\u00e9stico");
        }

        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },

});

