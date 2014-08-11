game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {



        me.audio.play("lavadora");

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


        me.audio.play("secadora");

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



game.Plancha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.Calentador = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("cal_peq", [1]);
        this.renderable.addAnimation("cal_grande", [0]);
        this.renderable.setCurrentAnimation("cal_peq");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(860,210), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(990,210), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        if(this.renderable.isCurrentAnimation("cal_peq")){

            if(!flags.calentador1){
                $('#tabla').DataTable().row.add([
                    consumos.calentador1.id,
                    "Calentador 1",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.calentador1.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.calentador1 = true;

            }

            this.renderable.setCurrentAnimation("cal_grande");
        }else{

            if(!flags.calentador2){
                $('#tabla').DataTable().row.add([
                    consumos.calentador2.id,
                    "Calentador 2",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.calentador2.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.calentador2 = true;

            }

            this.renderable.setCurrentAnimation("cal_peq");
        }


    },

    onMouseDown : function() {



        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});






game.SalirLavandero= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_lavandero",[11]);
        this.renderable.setCurrentAnimation("salir_lavandero");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

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

