game.Computadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("pc1_apagada", [0]);
        this.renderable.addAnimation("pc1_prendida", [1]);
        this.renderable.addAnimation("pc2_apagada", [2]);
        this.renderable.addAnimation("pc2_prendida", [3]);
        this.renderable.setCurrentAnimation("pc1_apagada");
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
        this.renderable.addAnimation("lamp1_off", [0]);
        this.renderable.addAnimation("lamp1_on", [1]);
        this.renderable.addAnimation("lamp2_off", [2]);
        this.renderable.addAnimation("lamp2_on", [3]);
        this.renderable.setCurrentAnimation("lamp1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,610), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(760,610), 32, 32), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("lamp1_off")){
            this.renderable.setCurrentAnimation("lamp2_off");
        }

        else if(this.renderable.isCurrentAnimation("lamp2_off")){
            this.renderable.setCurrentAnimation("lamp1_off");
        }

        else if(this.renderable.isCurrentAnimation("lamp1_on")){
            this.renderable.setCurrentAnimation("lamp2_on");
        }

        else{
            this.renderable.setCurrentAnimation("lamp1_on");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("lamp1_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("lamp1_on");
        }

        else if(this.renderable.isCurrentAnimation("lamp2_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("lamp2_on");
        }

        else if(this.renderable.isCurrentAnimation("lamp1_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("lamp1_off");
        }

        else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("lamp2_off");
        }
        
        return false;
    
    },


    update: function(dt){

       // var shape = this.getShape();
       // shape.pos.x = -100;
       // shape.pos.y = -100
       // shape.resize(10, 8, 14, 18);

        return this.parent(dt);

    }



});





game.BombilloE5 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bombillo1_off", [0]);
        this.renderable.addAnimation("bombillo1_on", [1]);
        this.renderable.addAnimation("bombillo2_off", [2]);
        this.renderable.addAnimation("bombillo2_on", [3]);
        this.renderable.setCurrentAnimation("bombillo1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(560,200), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(760,200), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bombillo1_off")){
            this.renderable.setCurrentAnimation("bombillo2_off");
        }

        else if(this.renderable.isCurrentAnimation("bombillo2_off")){
            this.renderable.setCurrentAnimation("bombillo1_off");
        }

        else if(this.renderable.isCurrentAnimation("bombillo1_on")){
            this.renderable.setCurrentAnimation("bombillo2_on");
        }

        else{
            this.renderable.setCurrentAnimation("bombillo1_on");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("bombillo1_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bombillo1_on");
        }

        else if(this.renderable.isCurrentAnimation("bombillo2_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bombillo2_on");
        }

        else if(this.renderable.isCurrentAnimation("bombillo1_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bombillo1_off");
        }

        else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bombillo2_off");
        }
        
        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.Ac = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("ac1_off", [0]);
        this.renderable.addAnimation("ac1_loop", [1, 2], 300);
        this.renderable.addAnimation("ac2_off", [3]);
        this.renderable.addAnimation("ac2_loop", [4, 5], 300);
        this.renderable.setCurrentAnimation("ac1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(800,90), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1330,90), 32, 32), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ac1_off")){
            this.renderable.setCurrentAnimation("ac2_off");
        }

        else if(this.renderable.isCurrentAnimation("ac2_off")){
            this.renderable.setCurrentAnimation("ac1_off");
        }

        else if(this.renderable.isCurrentAnimation("ac1_loop")){
            this.renderable.setCurrentAnimation("ac2_loop");
        }

        else{
            this.renderable.setCurrentAnimation("ac1_loop");
        }


    },



    onMouseDown : function() {
    
        if(this.renderable.isCurrentAnimation("ac1_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("ac1_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac2_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("ac2_loop");
        }

        else if(this.renderable.isCurrentAnimation("ac1_loop")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("ac1_off");
        }

        else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("ac2_off");
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

