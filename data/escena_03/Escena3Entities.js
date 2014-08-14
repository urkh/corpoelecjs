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

        this.renderable.addAnimation("bom_normal_off", [0]);
        this.renderable.addAnimation("bom_normal_on", [1]);
        this.renderable.addAnimation("bom_ahorrador_off", [2]);
        this.renderable.addAnimation("bom_ahorrador_on", [3]);
        this.renderable.setCurrentAnimation("bom_ahorrador_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(650,170), 42, 42), this.cambiarS.bind(this), false);
        me.input.registerPointerEvent('pointerdown', new me.Rect(new me.Vector2d(1140,170), 32, 32), this.cambiarS.bind(this), false);
        
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
