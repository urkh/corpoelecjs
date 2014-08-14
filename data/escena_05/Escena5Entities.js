game.Computadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("pc1_apagada", [0]);
        this.renderable.addAnimation("pc1_prendida", [1]);
        this.renderable.addAnimation("pc2_apagada", [2]);
        this.renderable.addAnimation("pc2_prendida", [3]);
        this.renderable.setCurrentAnimation("pc1_prendida");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(270,550), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(600,550), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("pc1_prendida")){

            if(!flags.pc2){
                $('#tabla').DataTable().row.add([
                    consumos.pc2.id,
                    "PC2",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.pc2.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.pc2 = true;

            }

            this.renderable.setCurrentAnimation("pc2_prendida");

        }
        else if(this.renderable.isCurrentAnimation("pc1_apagada")){
            this.renderable.setCurrentAnimation("pc2_apagada");

        }

        else if(this.renderable.isCurrentAnimation("pc2_prendida")){
            this.renderable.setCurrentAnimation("pc1_prendida");
        }


        else{

            if(!flags.pc1){
                $('#tabla').DataTable().row.add([
                    consumos.pc1.id,
                    "PC1",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.pc1.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.pc1 = true;

            }
            
            this.renderable.setCurrentAnimation("pc1_apagada");
        }


    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("pc1_prendida")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("pc1_apagada");

        }
        else if(this.renderable.isCurrentAnimation("pc1_apagada")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("pc1_prendida");

        }

        else if(this.renderable.isCurrentAnimation("pc2_prendida")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("pc2_apagada");
        }

        else{
            me.audio.play("prender");   
            this.renderable.setCurrentAnimation("pc2_prendida");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Lampara = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("lamp_apa", [0]);
        this.renderable.addAnimation("lamp_pren", [1]);
        this.renderable.setCurrentAnimation("lamp_apa");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("lamp_apa")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("lamp_pren");
        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("lamp_apa");
        }

        return false;
    
    },



});





game.BomNormal = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("bom_apagado", [3]);
        this.renderable.addAnimation("bom_prendido", [4]);
        this.renderable.setCurrentAnimation("bom_apagado");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("bom_apagado")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom_prendido");
        }else{
            me.audio.play("apagar");
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




game.Ac = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("ac_off", [0]);
        this.renderable.addAnimation("ac_loop", [1, 2], 300);
        
        
        this.renderable.setCurrentAnimation("ac_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("ac_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("ac_loop");
        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("ac_off");
        }

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

