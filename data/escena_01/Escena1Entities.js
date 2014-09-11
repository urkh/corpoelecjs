game.Inicio = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), true);
       // me.input.registerPointerEvent('pointermove', new me.Rect(new me.Vector2d(400,590), 200, 60), hand.bind(this), false);
    },


	onMouseDown : function() {


        var estado = $("#select_estados").val(); 

        if(estado=="0"){

          alert("Seleccione el estado de su residencia");

        }else{


          document.getElementById('fixedtop1').style.visibility = 'hidden';

          for(var _estado in estados){
              if(estados[_estado].id == estado){
                  game.data.conmax = estados[_estado].maximo;
              }    
          
          }

          if(me.levelDirector.getCurrentLevelId() == 'escena_01'){

           // document.getElementById('tabla_consumos').style.visibility = 'visible';
            me.game.viewport.fadeIn("#000000", 450, 

                (function (){
                    game.data.score = 0;
                    game.data.score_num = false;
                    this.HUD = new game.HUD.Container();
                    me.game.world.addChild(this.HUD);
                    me.audio.play("dopen");
                    me.levelDirector.loadLevel("escena_02");

                })

            );

          }

       }

		return false;
	
	},
  

    update: function(dt){
     
        return this.parent(dt);
        
    },

});