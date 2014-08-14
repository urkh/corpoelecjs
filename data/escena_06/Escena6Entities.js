

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
            game.data.score -= 50;
            this.renderable.setCurrentAnimation("ducha_normal");
        }else{

            if(!flags.ducha_corona){
                $('#tabla').DataTable().row.add([
                    consumos.ducha_corona.id,
                    "Ducha Electrica",
                    "<input type='number' value='1'>",
                    "<input type='number' value='1'> H/s",
                    "<input type='number' value="+consumos.ducha_corona.kw+"> W",
                    '--',
                    "--"
                ]).draw();

                flags.ducha_corona = true;

            }

            this.renderable.setCurrentAnimation("ducha_corona");
            game.data.score += 50;
        }


    },

    onMouseDown : function() {



        
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.BombillosE6 = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("bombillos_off", [0]);
        this.renderable.addAnimation("bombillos_on", [1]);
        this.renderable.setCurrentAnimation("bombillos_off");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

        if(this.renderable.isCurrentAnimation("bombillos_off")){
            me.audio.play("prender");
            this.renderable.setCurrentAnimation("bombillos_on");

        }else{
            me.audio.play("apagar");
            this.renderable.setCurrentAnimation("bombillos_off");
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
