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

            this.renderable.setCurrentAnimation("pc2_prendida");

        }
        else if(this.renderable.isCurrentAnimation("pc1_apagada")){

            if(!flags.pc2){
                $('#tabla').DataTable().row.add([
                    consumos.pc2.id,
                    "PC2",
                    "<input type='number' id='pc2_cantidad' onchange='consumo("+'consumos.pc2.id'+")' value='0'>",
                    "<input type='number' id='pc2_frecuencia' onchange='consumo("+'consumos.pc2.id'+")' value='0'> H/s",
                    "<input type='number' id='pc2_potencia' onchange='consumo("+'consumos.pc2.id'+")' value="+consumos.pc2.kw+"> W",
                    "<p id='pc2_total'></p>"
                ]).draw();

                flags.pc2= true;

            }

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
                    "<input type='number' id='pc1_cantidad' onchange='consumo("+'consumos.pc1.id'+")' value='0'>",
                    "<input type='number' id='pc1_frecuencia' onchange='consumo("+'consumos.pc1.id'+")' value='0'> H/s",
                    "<input type='number' id='pc1_potencia' onchange='consumo("+'consumos.pc1.id'+")' value="+consumos.pc1.kw+"> W",
                    "<p id='pc1_total'></p>"
                ]).draw();

                flags.pc1= true;

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
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(740,610), 52, 52), this.cambiarS.bind(this), false);


    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("lamp1_off")){
            
            if(!flags.lamp2){
                $('#tabla').DataTable().row.add([
                    consumos.lamp2.id,
                    "Lampara 2",
                    "<input type='number' id='lamp2_cantidad' onchange='consumo("+'consumos.lamp2.id'+")' value='0'>",
                    "<input type='number' id='lamp2_frecuencia' onchange='consumo("+'consumos.lamp2.id'+")' value='0'> H/s",
                    "<input type='number' id='lamp2_potencia' onchange='consumo("+'consumos.lamp2.id'+")' value="+consumos.lamp2.kw+"> W",
                    "<p id='lamp2_total'></p>"
                ]).draw();

                flags.lamp2= true;

            }            

            this.renderable.setCurrentAnimation("lamp2_off");

        }

        else if(this.renderable.isCurrentAnimation("lamp2_off")){

            if(!flags.lamp1){
                $('#tabla').DataTable().row.add([
                    consumos.lamp1.id,
                    "Lampara 1",
                    "<input type='number' id='lamp1_cantidad' onchange='consumo("+'consumos.lamp1.id'+")' value='0'>",
                    "<input type='number' id='lamp1_frecuencia' onchange='consumo("+'consumos.lamp1.id'+")' value='0'> H/s",
                    "<input type='number' id='lamp1_potencia' onchange='consumo("+'consumos.lamp1.id'+")' value="+consumos.lamp1.kw+"> W",
                    "<p id='lamp1_total'></p>"
                ]).draw();

                flags.lamp1= true;

            }   

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

        this.renderable.addAnimation("bom1_off", [0]);
        this.renderable.addAnimation("bom1_on", [1]);
        this.renderable.addAnimation("bom2_off", [2]);
        this.renderable.addAnimation("bom2_on", [3]);
        this.renderable.setCurrentAnimation("bom1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(560,200), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(760,200), 32, 32), this.cambiarS.bind(this), false);
        
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
                    "<input type='number' id='bom2_cantidad' onchange='consumo("+'consumos.bom2.id'+")' value='0'>",
                    "<input type='number' id='bom2_frecuencia' onchange='consumo("+'consumos.bom2.id'+")' value='0'> H/s",
                    "<input type='number' id='bom2_potencia' onchange='consumo("+'consumos.bom2.id'+")' value="+consumos.bom2.kw+"> W",
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
                    "<input type='number' id='bom1_cantidad' onchange='consumo("+'consumos.bom1.id'+")' value='0'>",
                    "<input type='number' id='bom1_frecuencia' onchange='consumo("+'consumos.bom1.id'+")' value='0'> H/s",
                    "<input type='number' id='bom1_potencia' onchange='consumo("+'consumos.bom1.id'+")' value="+consumos.bom1.kw+"> W",
                    "<p id='bom1_total'></p>"
                ]).draw();

                flags.bom1= true;

            }

            this.renderable.setCurrentAnimation("bom1_off");
        }

    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom1_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bom1_off");

        }

        else if(this.renderable.isCurrentAnimation("bom2_on")){
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bom2_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom2_off")) {
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom2_on");
        }

        else{
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom1_on");
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
            
            if(!flags.ac2){
                $('#tabla').DataTable().row.add([
                    consumos.ac2.id,
                    "A/A 2",
                    "<input type='number' id='ac2_cantidad' onchange='consumo("+'consumos.ac2.id'+")' value='0'>",
                    "<input type='number' id='ac2_frecuencia' onchange='consumo("+'consumos.ac2.id'+")' value='0'> H/s",
                    "<input type='number' id='ac2_potencia' onchange='consumo("+'consumos.ac2.id'+")' value="+consumos.ac2.kw+"> W",
                    "<p id='ac2_total'></p>"
                ]).draw();

                flags.ac2= true;

            }   

            this.renderable.setCurrentAnimation("ac2_off");

        }

        else if(this.renderable.isCurrentAnimation("ac2_off")){
           
            if(!flags.ac1){
                $('#tabla').DataTable().row.add([
                    consumos.ac1.id,
                    "A/A 1",
                    "<input type='number' id='ac1_cantidad' onchange='consumo("+'consumos.ac1.id'+")' value='0'>",
                    "<input type='number' id='ac1_frecuencia' onchange='consumo("+'consumos.ac1.id'+")' value='0'> H/s",
                    "<input type='number' id='ac1_potencia' onchange='consumo("+'consumos.ac1.id'+")' value="+consumos.ac1.kw+"> W",
                    "<p id='ac1_total'></p>"
                ]).draw();

                flags.ac1= true;

            }   
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

