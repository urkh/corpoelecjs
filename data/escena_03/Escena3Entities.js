game.EntrarLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("entrar_lavandero", [5]);
        this.renderable.setCurrentAnimation("entrar_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

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
            me.audio.play("prender");
            me.audio.play("microondas");
            this.renderable.setCurrentAnimation("mic_on");
        }else{
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
            me.audio.play("prender");
            me.audio.play("licuadora");
            this.renderable.setCurrentAnimation("lic_on");
        }else{
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
        this.renderable.addAnimation("salir_cocina", [11]);
        this.renderable.setCurrentAnimation("salir_cocina");
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
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.nevera.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.nevera = true;

        }

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});
