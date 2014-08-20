game.TelevisorE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("tv1_off", [2]);
        this.renderable.addAnimation("tv1_on", [3]);
        this.renderable.addAnimation("tv2_off", [0]);
        this.renderable.addAnimation("tv2_on", [1]);
        this.renderable.setCurrentAnimation("tv1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1040,220), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1300,220), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_on")){
            this.renderable.setCurrentAnimation("tv2_on");

        }
        else if(this.renderable.isCurrentAnimation("tv1_off")){

             if(!flags.tv2){
                $('#tabla').DataTable().row.add([
                    consumos.tv2.id,
                    "TV2",
                    "<input type='number' min='0'  id='tv2_cantidad' onchange='consumo("+'consumos.tv2.id'+")' value='0'>",
                    "<input type='number' min='0' id='tv2_frecuencia' onchange='consumo("+'consumos.tv2.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='tv2_potencia' onchange='consumo("+'consumos.tv2.id'+")' value="+consumos.tv2.kw+"> W",
                    "<p id='tv2_total'></p>"
                ]).draw();

                flags.tv2 = true;

            }

            this.renderable.setCurrentAnimation("tv2_off");

        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            this.renderable.setCurrentAnimation("tv1_on");
        }


        else{

            if(!flags.tv1){
                $('#tabla').DataTable().row.add([
                    consumos.tv1.id,
                    "TV1",
                    "<input type='number' min='0' id='tv1_cantidad' onchange='consumo("+'consumos.tv1.id'+")' value='0'>",
                    "<input type='number' min='0' id='tv1_frecuencia' onchange='consumo("+'consumos.tv1.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='tv1_potencia' onchange='consumo("+'consumos.tv1.id'+")' value="+consumos.tv1.kw+"> W",
                    "<p id='tv1_total'></p>"
                ]).draw();

                flags.tv1 = true;

            }            
            
            this.renderable.setCurrentAnimation("tv1_off");
        }

    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("tv1_on")){
            consumos.tv1.apagado=true;  
            consumo(consumos.tv1.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv1_off");

        }
        else if(this.renderable.isCurrentAnimation("tv1_off")){
            consumos.tv1.apagado=false;  
            consumo(consumos.tv1.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("tv1_on");

        }

        else if(this.renderable.isCurrentAnimation("tv2_on")){
            consumos.tv2.apagado=true;  
            consumo(consumos.tv2.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("tv2_off");
        }

        else{
            consumos.tv2.apagado=false;  
            consumo(consumos.tv2.id);  
            me.audio.play("prender");   
            this.renderable.setCurrentAnimation("tv2_on");
        }


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.AcE7 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("ac1_off", [0]);
        this.renderable.addAnimation("ac1_loop", [1, 2], 300);
        
        this.renderable.setCurrentAnimation("ac1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("ac1_off")){

            if(!flags.ac1){
                $('#tabla').DataTable().row.add([
                    consumos.ac1.id,
                    "A/A 1",
                    "<input type='number' min='0' id='ac1_cantidad' onchange='consumo("+'consumos.ac1.id'+")' value='0'>",
                    "<input type='number' min='0' id='ac1_frecuencia' onchange='consumo("+'consumos.ac1.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='ac1_potencia' onchange='consumo("+'consumos.ac1.id'+")' value="+consumos.ac1.kw+"> W",
                    "<p id='ac1_total'></p>"
                ]).draw();

                flags.ac1 = true;

            }

            consumos.ac1.apagado=false;  
            consumo(consumos.ac1.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("ac1_loop");

        }else{
            consumos.ac1.apagado=true;  
            consumo(consumos.ac1.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("ac1_off");
        }

        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },



});




game.Consola = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("consola_off", [4]);
        this.renderable.addAnimation("consola_on", [5]);
        this.renderable.setCurrentAnimation("consola_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("consola_off")){
            
            if(!flags.consola){
                $('#tabla').DataTable().row.add([
                    consumos.consola.id,
                    "Consola",
                    "<input type='number' min='0' id='consola_cantidad' onchange='consumo("+'consumos.consola.id'+")' value='0'>",
                    "<input type='number' min='0' id='consola_frecuencia' onchange='consumo("+'consumos.consola.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='consola_potencia' onchange='consumo("+'consumos.consola.id'+")' value="+consumos.consola.kw+"> W",
                    "<p id='consola_total'></p>"
                ]).draw();

                flags.consola = true;

            }

            consumos.consola.apagado=false;  
            consumo(consumos.consola.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("consola_on");

        }else{
            consumos.consola.apagado=true;  
            consumo(consumos.consola.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("consola_off");
        } 


        return false;
    
    },
  
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.BombilloE7 = me.ObjectEntity.extend({

    init: function(x,y,settings){

    	this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_off", [2]);
        this.renderable.addAnimation("bom1_on", [3]);
        this.renderable.addAnimation("bom2_off", [0]);
        this.renderable.addAnimation("bom2_on", [1]);
        this.renderable.setCurrentAnimation("bom1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(780,150), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,150), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom1_on")){
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else if(this.renderable.isCurrentAnimation("bom1_off")){

            if(!flags.bom2){
                $('#tabla').DataTable().row.add([
                    consumos.bom2.id,
                    "Bombillo Normal",
                    "<input type='number' min='0' id='bom2_cantidad' onchange='consumo("+'consumos.bom2.id'+")' value='0'>",
                    "<input type='number' min='0' id='bom2_frecuencia' onchange='consumo("+'consumos.bom2.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='bom2_potencia' onchange='consumo("+'consumos.bom2.id'+")' value="+consumos.bom2.kw+"> W",
                    "<p id='bom2_total'></p>"
                ]).draw();

                flags.bom2= true;

            }

            this.renderable.setCurrentAnimation("bom2_off");
        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            this.renderable.setCurrentAnimation("bom1_on");
        }

        else{

            if(!flags.bom1){
                $('#tabla').DataTable().row.add([
                    consumos.bom1.id,
                    "Bombillo Ahorrador",
                    "<input type='number' min='0' id='bom1_cantidad' onchange='consumo("+'consumos.bom1.id'+")' value='0'>",
                    "<input type='number' min='0' id='bom1_frecuencia' onchange='consumo("+'consumos.bom1.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='bom1_potencia' onchange='consumo("+'consumos.bom1.id'+")' value="+consumos.bom1.kw+"> W",
                    "<p id='bom1_total'></p>"
                ]).draw();

                flags.bom1= true;

            }

            this.renderable.setCurrentAnimation("bom1_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            consumos.bom1.apagado=true;  
            consumo(consumos.bom1.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bom1_off");

        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            consumos.bom2.apagado=true;  
            consumo(consumos.bom2.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            consumos.bom2.apagado=false;  
            consumo(consumos.bom2.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            consumos.bom1.apagado=false;  
            consumo(consumos.bom1.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom1_on");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});





game.SalirCuarto2 = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cuarto", [8]);
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