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
        
    },

   

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_off")){
            this.renderable.setCurrentAnimation("tv2_off");
        }else if(this.renderable.isCurrentAnimation("tv2_off")){
            this.renderable.setCurrentAnimation("tv3_off");
        }else{
            this.renderable.setCurrentAnimation("tv1_off");
        } 

        console.log("televisor");

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BombilloE2 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom_normal_off", [0]);
        this.renderable.addAnimation("bom_normal_on", [1]);
        this.renderable.addAnimation("bom_ahorrador_off", [2]);
        this.renderable.addAnimation("bom_ahorrador_on", [3]);
        this.renderable.setCurrentAnimation("bom_ahorrador_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },



   onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom_ahorrador_off")){
            game.data.score += 50;
            this.renderable.setCurrentAnimation("bom_ahorrador_on");
        }else{
            game.data.score -= 50;
            this.renderable.setCurrentAnimation("bom_ahorrador_off");
        }

        console.log("bombillo");

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
            game.data.score += 50;
            me.audio.play("cancion");
            this.renderable.setCurrentAnimation("radio_on");
        }else{
            game.data.score -= 50;
            me.audio.pause("cancion");
            this.renderable.setCurrentAnimation("radio_off");
        }

        console.log("radio reproductor");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.PuertaCuarto = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);


        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.stop("cancion");

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







game.EntrarCocina = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("entrar_cocina",[6]);
        this.renderable.setCurrentAnimation("entrar_cocina");



        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
       // me.input.registerPointerEvent('pointermove', this, this.onMouseMove.bind(this), false);
        
    },


/*
    onMouseMove: function(){
    
        this.renderable.setCurrentAnimation("entrar_cocina");
    },

    */

    onMouseDown : function() {
        me.audio.stop("cancion");
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




