game.Computadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("pc1_apagada", [0]);
        this.renderable.addAnimation("pc1_prendida", [1]);
        this.renderable.addAnimation("pc2_apagada", [4]);
        this.renderable.addAnimation("pc2_prendida", [5]);
        this.renderable.setCurrentAnimation("pc1_prendida");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("pc1_prendida")){
            game.data.score += 50;
            this.renderable.setCurrentAnimation("pc2_prendida");
        }else{
            game.data.score -= 50;
            this.renderable.setCurrentAnimation("pc1_prendida");
        }

        

        console.log("computadora");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Lampara = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lamp_apa", [13]);
        this.renderable.addAnimation("lamp_pren", [12]);
        this.renderable.setCurrentAnimation("lamp_apa");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("lamp_apa")){
            this.renderable.setCurrentAnimation("lamp_pren");
        }else{
            this.renderable.setCurrentAnimation("lamp_apa");
        }

        game.data.score += 50;

        console.log("lampara");
        return false;
    
    },



});




game.Lampara2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lampara2", [0]);
        this.renderable.setCurrentAnimation("lampara2");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {

        game.data.score += 50;

        console.log("lampara2");
        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});




game.BomNormal = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("bom_apagado", [9]);
        this.renderable.addAnimation("bom_prendido", [8]);
        this.renderable.setCurrentAnimation("bom_apagado");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("bom_apagado")){
            this.renderable.setCurrentAnimation("bom_prendido");
        }else{
            this.renderable.setCurrentAnimation("bom_apagado");
        }

        game.data.score += 50;

        console.log("bombillo normal");
        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});




game.EntrarBano = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_bano", [0]);
        this.renderable.setCurrentAnimation("entrar_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {

        me.levelDirector.loadLevel("escena_06");
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

        me.levelDirector.loadLevel("escena_02");

        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});

