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
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.play("microondas");

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});


game.Licuadora = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {
        me.audio.play("licuadora");

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
