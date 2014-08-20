game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("lav_off", [0]);
        this.renderable.addAnimation("lav_on", [1,2], 100);
        this.renderable.setCurrentAnimation("lav_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("lav_off")){

            if(!flags.lavadora){
                $('#tabla').DataTable().row.add([
                    consumos.lavadora.id,
                    "Lavadora",
                    "<input type='number' id='lavadora_cantidad' min='0' onchange='consumo("+'consumos.lavadora.id'+")' value='0'>",
                    "<input type='number' id='lavadora_frecuencia' min='0' onchange='consumo("+'consumos.lavadora.id'+")' value='0'> H/s",
                    "<input type='number' id='lavadora_potencia' min='0' onchange='consumo("+'consumos.lavadora.id'+")' value="+consumos.lavadora.kw+"> W",
                    "<p id='lavadora_total'></p>"
                ]).draw();

                flags.lavadora = true;

            }     
            
            consumos.lavadora.apagado=false;  
            consumo(consumos.lavadora.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("lav_on");
            me.audio.play("lavadora");

        }

        else{
            consumos.lavadora.apagado=true;  
            consumo(consumos.lavadora.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("lav_off");
            me.audio.stop("lavadora");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Secadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("sec_off", [0]);
        this.renderable.addAnimation("sec_on", [1,2], 100);
        this.renderable.setCurrentAnimation("sec_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {



        if(this.renderable.isCurrentAnimation("sec_off")){



            if(!flags.secadora){
                $('#tabla').DataTable().row.add([
                    consumos.secadora.id,
                    "Secadora",
                    "<input type='number' id='secadora_cantidad' min='0' onchange='consumo("+'consumos.secadora.id'+")' value='0'>",
                    "<input type='number' id='secadora_frecuencia' min='0' onchange='consumo("+'consumos.secadora.id'+")' value='0'> H/s",
                    "<input type='number' id='secadora_potencia' min='0' onchange='consumo("+'consumos.secadora.id'+")' value="+consumos.secadora.kw+"> W",
                    "<p id='secadora_total'></p>"
                ]).draw();

                flags.secadora = true;

            }     

            consumos.secadora.apagado=false;  
            consumo(consumos.secadora.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("sec_on");
            me.audio.play("secadora");
        }

        else{

            consumos.secadora.apagado=true;  
            consumo(consumos.secadora.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("sec_off");
            me.audio.stop("secadora");

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Plancha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("plancha_off", [1]);
        this.renderable.addAnimation("plancha_on", [0]);
        this.renderable.setCurrentAnimation("plancha_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {


        if(this.renderable.isCurrentAnimation("plancha_off")){

            if(!flags.plancha){
                $('#tabla').DataTable().row.add([
                    consumos.plancha.id,
                    "Plancha",
                    "<input type='number' id='plancha_cantidad' min='0' onchange='consumo("+'consumos.plancha.id'+")' value='0'>",
                    "<input type='number' id='plancha_frecuencia' min='0' onchange='consumo("+'consumos.plancha.id'+")' value='0'> H/s",
                    "<input type='number' id='plancha_potencia' min='0' onchange='consumo("+'consumos.plancha.id'+")' value="+consumos.plancha.kw+"> W",
                    "<p id='plancha_total'></p>"
                ]).draw();

                flags.plancha = true;

            }
            consumos.plancha.apagado=false;  
            consumo(consumos.plancha.id);       
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("plancha_on");
        }

        else{
            consumos.plancha.apagado=true;  
            consumo(consumos.plancha.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("plancha_off");

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.Calentador = me.ObjectEntity.extend({



    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("cal1_off", [0]);
        this.renderable.addAnimation("cal1_on", [1]);
        this.renderable.addAnimation("cal2_off", [2]);
        this.renderable.addAnimation("cal2_on", [3]);
        this.renderable.setCurrentAnimation("cal1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1350,300), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1550,300), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("cal1_off")){


            if(!flags.cal2){
                $('#tabla').DataTable().row.add([
                    consumos.cal2.id,
                    "Calentador Peq",
                    "<input type='number' id='cal2_cantidad' min='0' onchange='consumo("+'consumos.cal2.id'+")' value='0'>",
                    "<input type='number' id='cal2_frecuencia' min='0' onchange='consumo("+'consumos.cal2.id'+")' value='0'> H/s",
                    "<input type='number' id='cal2_potencia' min='0' onchange='consumo("+'consumos.cal2.id'+")' value="+consumos.cal2.kw+"> W",
                    "<p id='cal2_total'></p>"
                ]).draw();

                flags.cal2 = true;

            }     

            this.renderable.setCurrentAnimation("cal2_off");
        }

        else if(this.renderable.isCurrentAnimation("cal2_off")){

            if(!flags.cal1){
                $('#tabla').DataTable().row.add([
                    consumos.cal1.id,
                    "Calentador Gra",
                    "<input type='number' id='cal1_cantidad' min='0' onchange='consumo("+'consumos.cal1.id'+")' value='0'>",
                    "<input type='number' id='cal1_frecuencia' min='0' onchange='consumo("+'consumos.cal1.id'+")' value='0'> H/s",
                    "<input type='number' id='cal1_potencia' min='0' onchange='consumo("+'consumos.cal1.id'+")' value="+consumos.cal1.kw+"> W",
                    "<p id='cal1_total'></p>"
                ]).draw();

                flags.cal1 = true;

            }     

            this.renderable.setCurrentAnimation("cal1_off");

        }

        else if(this.renderable.isCurrentAnimation("cal1_on")){
            this.renderable.setCurrentAnimation("cal2_on");
        }

        else{
            this.renderable.setCurrentAnimation("cal1_on");
        }


    },


    onMouseDown: function() {

        if(this.renderable.isCurrentAnimation("cal1_off")){
            consumos.cal1.apagado=false;  
            consumo(consumos.cal1.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("cal1_on");
        }

        else if(this.renderable.isCurrentAnimation("cal2_off")){
            consumos.cal2.apagado=false;  
            consumo(consumos.cal2.id);  
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("cal2_on");
        }

        else if(this.renderable.isCurrentAnimation("cal1_on")){
            consumos.cal1.apagado=true;  
            consumo(consumos.cal1.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("cal1_off");
        }

        else{
            consumos.cal2.apagado=true;  
            consumo(consumos.cal2.id);  
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("cal2_off");
        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});






game.BombilloE4 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_off", [2]);
        this.renderable.addAnimation("bom1_on", [3]);
        this.renderable.addAnimation("bom2_off", [0]);
        this.renderable.addAnimation("bom2_on", [2]);
        this.renderable.setCurrentAnimation("bom2_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(660,300), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(770,300), 32, 32), this.cambiarS.bind(this), false);
        
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
                    "<input type='number' id='bom2_cantidad' min='0' onchange='consumo("+'consumos.bom2.id'+")' value='0'>",
                    "<input type='number' id='bom2_frecuencia' min='0' onchange='consumo("+'consumos.bom2.id'+")' value='0'> H/s",
                    "<input type='number' id='bom2_potencia' min='0' onchange='consumo("+'consumos.bom2.id'+")' value="+consumos.bom2.kw+"> W",
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
                    "<input type='number' id='bom1_cantidad' min='0' onchange='consumo("+'consumos.bom1.id'+")' value='0'>",
                    "<input type='number' id='bom1_frecuencia' min='0' onchange='consumo("+'consumos.bom1.id'+")' value='0'> H/s",
                    "<input type='number' id='bom1_potencia' min='0' onchange='consumo("+'consumos.bom1.id'+")' value="+consumos.bom1.kw+"> W",
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









game.SalirLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_lavandero",[5]);
        this.renderable.setCurrentAnimation("salir_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        me.audio.stop("lavadora");
        me.audio.stop("secadora");
        me.audio.play("dclose");

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

