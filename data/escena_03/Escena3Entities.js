game.EntrarLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_lavandero", [4]);
        this.renderable.setCurrentAnimation("entrar_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.stop("licuadora");
        me.audio.stop("microondas");
        me.audio.play("dopen");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_04");

            })

        );
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Micro = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("mic_off", [0]);
        this.renderable.addAnimation("mic_on", [1]);
        this.renderable.setCurrentAnimation("mic_off");        

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        

        if(this.renderable.isCurrentAnimation("mic_off")){

            if(!flags.microondas){
                $('#tabla').DataTable().row.add([
                    consumos.microondas.id,
                    "Microondas",
                    "<input type='number' id='microondas_cantidad' min='0'  onchange='consumo("+'consumos.microondas.id'+")' value='0'>",
                    "<input type='number' id='microondas_frecuencia' min='0'  onchange='consumo("+'consumos.microondas.id'+")' value='0'> H/s",
                    "<input type='number' id='microondas_potencia' min='0'  onchange='consumo("+'consumos.microondas.id'+")' value="+consumos.microondas.kw+"> W",
                    "<p id='microondas_total'></p>"
                ]).draw();

                flags.microondas = true;

            }


            consumos.microondas.apagado=false;  
            consumo(consumos.microondas.id);     
            me.audio.play("prender");
            me.audio.play("microondas");
            this.renderable.setCurrentAnimation("mic_on");
        }else{
            consumos.microondas.apagado=true;  
            consumo(consumos.microondas.id);     
            me.audio.play("apagar");
            me.audio.stop("microondas");
            this.renderable.setCurrentAnimation("mic_off");
        }


        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Licuadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("lic_off", [0]);
        this.renderable.addAnimation("lic_on", [1]);
        this.renderable.setCurrentAnimation("lic_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("lic_off")){

            if(!flags.licuadora){
                $('#tabla').DataTable().row.add([
                    consumos.licuadora.id,
                    "Licuadora",
                    "<input type='number' id='licuadora_cantidad' min='0'  onchange='consumo("+'consumos.licuadora.id'+")' value='0'>",
                    "<input type='number' id='licuadora_frecuencia' min='0' onchange='consumo("+'consumos.licuadora.id'+")' value='0'> H/s",
                    "<input type='number' id='licuadora_potencia' min='0' onchange='consumo("+'consumos.licuadora.id'+")' value="+consumos.licuadora.kw+"> W",
                    "<p id='licuadora_total'></p>"
                ]).draw();

                flags.licuadora = true;

            }    

            consumos.licuadora.apagado=false;  
            consumo(consumos.licuadora.id);     
            me.audio.play("prender");
            me.audio.play("licuadora");
            this.renderable.setCurrentAnimation("lic_on");
        }else{
            consumos.licuadora.apagado=true;  
            consumo(consumos.licuadora.id);     
            me.audio.play("apagar");
            me.audio.stop("licuadora");
            this.renderable.setCurrentAnimation("lic_off");
        }
        

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});

game.SalirCocina = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_cocina", [8]);
        this.renderable.setCurrentAnimation("salir_cocina");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        me.audio.stop("licuadora");
        me.audio.stop("microondas");
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



game.Reloj = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("reloj", [0,1,2,3,4,5,6,7,8,9,10,11], 1000);       
        this.renderable.setCurrentAnimation("reloj");
        
    },

  

    update: function(dt){

        return this.parent(dt);
        
    },

});







game.BombilloE3 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_off", [0]);
        this.renderable.addAnimation("bom1_on", [1]);
        this.renderable.addAnimation("bom2_off", [2]);
        this.renderable.addAnimation("bom2_on", [3]);
        this.renderable.setCurrentAnimation("bom2_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,170), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1140,170), 32, 32), this.cambiarS.bind(this), false);
        
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
                    "<input type='number' min='0'  id='bom2_cantidad' onchange='consumo("+'consumos.bom2.id'+")' value='0'>",
                    "<input type='number' min='0'  id='bom2_frecuencia' onchange='consumo("+'consumos.bom2.id'+")' value='0'> H/s",
                    "<input type='number' min='0'  id='bom2_potencia' onchange='consumo("+'consumos.bom2.id'+")' value="+consumos.bom2.kw+"> W",
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










game.Nevera = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(!flags.nevera){
            $('#tabla').DataTable().row.add([
                consumos.nevera.id,
                "Nevera",
                "<input type='number' id='nevera_cantidad' min='0' onchange='consumo("+'consumos.nevera.id'+")' value='0'>",
                "<input type='number' id='nevera_frecuencia' min='0' onchange='consumo("+'consumos.nevera.id'+")' value='0'> H/s",
                "<input type='number' id='nevera_potencia' min='0' onchange='consumo("+'consumos.nevera.id'+")' value="+consumos.nevera.kw+"> W",
                "<p id='nevera_total'></p>"
            ]).draw();

            flags.nevera = true;

        }            

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});
