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
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(150,600), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(450,600), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        
        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("tv1_off")){

             if(!flags.tv2){
                $('#tabla').DataTable().row.add([
                    consumos.tv2.id,
                    "TV2",
                    "<input type='number' id='tv2_cantidad' onchange='consumo("+'consumos.tv2.id'+")' value='0'>",
                    "<input type='number' id='tv2_frecuencia' onchange='consumo("+'consumos.tv2.id'+")' value='0'> H/s",
                    "<input type='number' id='tv2_potencia' onchange='consumo("+'consumos.tv2.id'+")' value="+consumos.tv2.kw+"> W",
                    "<p id='tv2_total'></p>"
                ]).draw();

                flags.tv2 = true;

            }

            this.renderable.setCurrentAnimation("tv2_off");

        }else if(this.renderable.isCurrentAnimation("tv2_off")){

            if(!flags.tv3){
                $('#tabla').DataTable().row.add([
                    consumos.tv3.id,
                    "TV3",
                    "<input type='number' id='tv3_cantidad' onchange='consumo("+'consumos.tv3.id'+")' value='0'>",
                    "<input type='number' id='tv3_frecuencia' onchange='consumo("+'consumos.tv3.id'+")' value='0'> H/s",
                    "<input type='number' id='tv3_potencia' onchange='consumo("+'consumos.tv3.id'+")' value="+consumos.tv3.kw+"> W",
                    "<p id='tv3_total'></p>"
                ]).draw();

                flags.tv3 = true;

            }

            this.renderable.setCurrentAnimation("tv3_off");

        }else{

            if(!flags.tv1){
                $('#tabla').DataTable().row.add([
                    consumos.tv1.id,
                    "TV1",
                    "<input type='number' id='tv1_cantidad' onchange='consumo("+'consumos.tv1.id'+")' value='0'>",
                    "<input type='number' id='tv1_frecuencia' onchange='consumo("+'consumos.tv1.id'+")' value='0'> H/s",
                    "<input type='number' id='tv1_potencia' onchange='consumo("+'consumos.tv1.id'+")' value="+consumos.tv1.kw+"> W",
                    "<p id='tv1_total'></p>"
                ]).draw();

                flags.tv1 = true;

            }

            this.renderable.setCurrentAnimation("tv1_off");

        } 

        
    },


    onMouseDown : function() {

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});



game.BombilloE2 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom2_off", [2]);
        this.renderable.addAnimation("bom2_on", [3]);
        this.renderable.addAnimation("bom1_off", [0]);
        this.renderable.addAnimation("bom1_on", [1]);
        this.renderable.setCurrentAnimation("bom1_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(220,180), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(590,180), 32, 32), this.cambiarS.bind(this), false);
        
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

            if(!flags.radio_r){
                $('#tabla').DataTable().row.add([
                    consumos.radio_r.id,
                    "Radio",
                    "<input type='number' id='radio_r_cantidad' onchange='consumo("+'consumos.radio_r.id'+")' value='0'>",
                    "<input type='number' id='radio_r_frecuencia' onchange='consumo("+'consumos.radio_r.id'+")' value='0'> H/s",
                    "<input type='number' id='radio_r_potencia' onchange='consumo("+'consumos.radio_r.id'+")' value="+consumos.radio_r.kw+"> W",
                    "<p id='radio_r_total'></p>"
                ]).draw();

                flags.radio_r = true;

            }            

            me.audio.play("prender");
            me.audio.play("radio");
            this.renderable.setCurrentAnimation("radio_on");


        }else{

            game.data.score -= 50;
            me.audio.play("apagar");
            me.audio.pause("radio");
            this.renderable.setCurrentAnimation("radio_off");

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
        
    },


    onMouseDown : function() {
        me.audio.play("dopen");
        me.audio.stop("radio");
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


game.EntrarCuarto2 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_cuarto2", [3]);
        this.renderable.setCurrentAnimation("entrar_cuarto2");


        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.play("dopen");
        me.audio.stop("radio");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_07");

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

        this.renderable.addAnimation("entrar_cocina",[0]);
        this.renderable.setCurrentAnimation("entrar_cocina");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {
        me.audio.play("dopen");
        me.audio.stop("radio");
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




game.EntrarBano = me.ObjectEntity.extend({

    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_bano", [1]);
        this.renderable.setCurrentAnimation("entrar_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);


    },

    onMouseDown : function() {

        me.audio.play("dopen");
        me.audio.stop("radio");
        me.game.viewport.fadeIn("#000000", 450, 

            (function (){

                me.levelDirector.loadLevel("escena_06");

            })

        );
        return false;
    
    },

    update: function(dt){

        return this.parent(dt);
        
    },

});