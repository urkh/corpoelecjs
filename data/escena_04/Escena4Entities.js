game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(!flags.lavadora){
                $('#tabla').DataTable().row.add([
                    consumos.lavadora.id,
                    "Lavadora",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.lavadora.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.lavadora = true;

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
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(!flags.secadora){
            $('#tabla').DataTable().row.add([
                consumos.secadora.id,
                "Secadora",
                "<input type='number' value='1'>",
                "<input type='number' value='1'> H/s",
                "<input type='number' value="+consumos.secadora.kw+"> W",
                '--',
                "--"
            ]).draw();

            flags.secadora = true;

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
        this.renderable.addAnimation("salir_lavandero",[7]);
        this.renderable.setCurrentAnimation("salir_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

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

