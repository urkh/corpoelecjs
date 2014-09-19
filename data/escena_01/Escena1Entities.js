
function set_estado(){

  var e = document.getElementById("select_estados");
  var estado = e.options[e.selectedIndex].value;


  if(estado=="0"){
    $('#select_estados').tooltip('show');

  }else{

    $('#modal_estado').modal('hide');

    for(var _estado in game.data.estados){
        if(game.data.estados[_estado].ids == estado){
            game.data.conmax = game.data.estados[_estado].maximo;
            break;
        }       
    }
    
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


game.Inicio = me.ObjectEntity.extend({

    init: function(x,y,settings){
        this.parent(x, y, settings);
        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), true);
    },


	onMouseDown : function() {

        if(me.levelDirector.getCurrentLevelId() == 'escena_01'){
            $('#select_estados').tooltip();
            $('#modal_estado').modal();
        }

		return false;
	
	},
  

    update: function(dt){
     
        return this.parent(dt);
        
    },

});
