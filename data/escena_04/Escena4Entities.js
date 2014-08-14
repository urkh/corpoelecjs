game.Lavadora= me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("lav_off", [0]);
        this.renderable.addAnimation("lav_on", [0,1,2], 100);
        this.renderable.setCurrentAnimation("lav_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("lav_off")){

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
            
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("lav_on");
            me.audio.play("lavadora");

        }

        else{
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
        this.renderable.addAnimation("sec_on", [0,1,2], 100);
        this.renderable.setCurrentAnimation("sec_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },


    onMouseDown : function() {



        if(this.renderable.isCurrentAnimation("sec_off")){

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
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("sec_on");
            me.audio.play("secadora");
        }

        else{
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

            me.audio.play("prender");
            this.renderable.setCurrentAnimation("plancha_on");
        }

        else{
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
        this.renderable.addAnimation("cal_peq", [1]);
        this.renderable.addAnimation("cal_grande", [0]);
        this.renderable.setCurrentAnimation("cal_peq");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1350,300), 32, 32), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1550,300), 32, 32), this.cambiarS.bind(this), false);
        
    },

    cambiarS: function(){

        me.audio.play("cambiar");

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






game.BombilloE4 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("bom_normal_off", [0]);
        this.renderable.addAnimation("bom_normal_on", [1]);
        this.renderable.addAnimation("bom_ahorrador_off", [2]);
        this.renderable.addAnimation("bom_ahorrador_on", [3]);
        this.renderable.setCurrentAnimation("bom_ahorrador_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(660,300), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(770,300), 32, 32), this.cambiarS.bind(this), false);
        
    },


    cambiarS: function(){

        me.audio.play("cambiar");

        if(this.renderable.isCurrentAnimation("bom_ahorrador_on")){

            if(!flags.bom_ahorrador){
                $('#tabla').DataTable().row.add([
                    consumos.bom_ahorrador.id,
                    "Bombillo Ahorrador",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.bom_ahorrador.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.bom_ahorrador= true;

            }
            
            this.renderable.setCurrentAnimation("bom_normal_on");

        }

        else if(this.renderable.isCurrentAnimation("bom_ahorrador_off")){
            this.renderable.setCurrentAnimation("bom_normal_off");
        }

        else if(this.renderable.isCurrentAnimation("bom_normal_on")){
            this.renderable.setCurrentAnimation("bom_ahorrador_on");
        }

        else{
            this.renderable.setCurrentAnimation("bom_ahorrador_off");
        }



    },



    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bom_ahorrador_on")){
            me.audio.play("apagar");
            //game.data.score += 50;
            this.renderable.setCurrentAnimation("bom_ahorrador_off");

        }

        else if(this.renderable.isCurrentAnimation("bom_normal_on")){
            me.audio.play("apagar");
            //game.data.score -= 50;
            this.renderable.setCurrentAnimation("bom_normal_off");
        }
        
        else if (this.renderable.isCurrentAnimation("bom_normal_off")) {
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom_normal_on");
        }

        else{
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bom_ahorrador_on");
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

