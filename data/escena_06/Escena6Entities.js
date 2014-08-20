game.Ducha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("ducha_normal", [1]);
        this.renderable.addAnimation("ducha_corona", [2]);
        this.renderable.setCurrentAnimation("ducha_corona");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(330,220), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(470,220), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){


        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("ducha_corona")){
            consumos.ducha_corona.apagado=true;  
            consumo(consumos.ducha_corona.id);  
            this.renderable.setCurrentAnimation("ducha_normal");
        }else{

             if(!flags.ducha_corona){
                $('#tabla').DataTable().row.add([
                    consumos.ducha_corona.id,
                    "Ducha Corona",
                    "<input type='number' min='0'  id='ducha_corona_cantidad' onchange='consumo("+'consumos.ducha_corona.id'+")' value='0'>",
                    "<input type='number' min='0' id='ducha_corona_frecuencia' onchange='consumo("+'consumos.ducha_corona.id'+")' value='0'> H/s",
                    "<input type='number' min='0' id='ducha_corona_potencia' onchange='consumo("+'consumos.ducha_corona.id'+")' value="+consumos.ducha_corona.kw+"> W",
                    "<p id='ducha_corona_total'></p>"
                ]).draw();

                flags.ducha_corona = true;

            }
            consumos.ducha_corona.apagado=false;  
            consumo(consumos.ducha_corona.id);  

            this.renderable.setCurrentAnimation("ducha_corona");
        }


    },

    onMouseDown : function() {
        
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BombilloE6 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom1_off", [0]);
        this.renderable.addAnimation("bom1_on", [1]);
        this.renderable.addAnimation("bom2_off", [2]);
        this.renderable.addAnimation("bom2_on", [3]);
        this.renderable.setCurrentAnimation("bom1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(730,60), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(980,60), 32, 32), this.cambiarS.bind(this), false);
        
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
                    "<input type='number' min='0'  id='bom1_frecuencia' onchange='consumo("+'consumos.bom1.id'+")' value='0'> H/s",
                    "<input type='number' min='0'  id='bom1_potencia' onchange='consumo("+'consumos.bom1.id'+")' value="+consumos.bom1.kw+"> W",
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



game.Afeitadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("afeitadora", [0]);
        this.renderable.setCurrentAnimation("afeitadora");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        me.audio.play("prender");

        if(!flags.afeitadora){
            $('#tabla').DataTable().row.add([
                consumos.afeitadora.id,
                "Afeitadora",
                "<input type='number' min='0'  id='afeitadora_cantidad' onchange='consumo("+'consumos.afeitadora.id'+")' value='0'>",
                "<input type='number' min='0'  id='afeitadora_frecuencia' onchange='consumo("+'consumos.afeitadora.id'+")' value='0'> H/s",
                "<input type='number' min='0'  id='afeitadora_potencia' onchange='consumo("+'consumos.afeitadora.id'+")' value="+consumos.afeitadora.kw+"> W",
                "<p id='afeitadora_total'></p>"
            ]).draw();

            flags.afeitadora = true;

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.Secador = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("secador", [1]);
        this.renderable.setCurrentAnimation("secador");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        me.audio.play("prender");

        if(!flags.secador){
            $('#tabla').DataTable().row.add([
                consumos.secador.id,
                "Secador",
                "<input type='number' min='0' id='secador_cantidad' onchange='consumo("+'consumos.secador.id'+")' value='0'>",
                "<input type='number' min='0' id='secador_frecuencia' onchange='consumo("+'consumos.secador.id'+")' value='0'> H/s",
                "<input type='number' min='0' id='secador_potencia' onchange='consumo("+'consumos.secador.id'+")' value="+consumos.secador.kw+"> W",
                "<p id='secador_total'></p>"
            ]).draw();

            flags.secador = true;

        }        

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.SalirBano = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_bano", [8]);
        this.renderable.setCurrentAnimation("salir_bano");
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