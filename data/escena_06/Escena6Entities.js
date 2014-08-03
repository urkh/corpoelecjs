

game.Ducha = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("ducha_normal", [1]);
        this.renderable.addAnimation("ducha_corona", [2]);
        this.renderable.setCurrentAnimation("ducha_corona");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

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

        

        console.log("ducha");
        return false;
    
    },
  

    update: function(dt){

        return this.parent(dt);
        
    },

});




game.SalirBano = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);
        this.renderable.addAnimation("salir_bano", [11]);
        this.renderable.setCurrentAnimation("salir_bano");
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), false);
        
    },

    onMouseDown : function() {

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
