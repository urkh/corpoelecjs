/*


var estados = '<option value="0">---</option>\
              <option value="am">Amazonas</option>\
              <option value="an">Anzo&aacute;tegui</option>\
              <option value="ap">Apure</option>\
              <option value="ar">Aragua</option>\
              <option value="ba">Barinas</option>\
              <option value="bo">Bolivar</option>\
              <option value="ca">Carabobo</option>\
              <option value="co">Cojedes</option>\
              <option value="dm">Delta Amacuro</option>\
              <option value="dc">Distrito Capital</option>\
              <option value="fa">Falc&oacute;n</option>\
              <option value="gu">Guarico</option>\
              <option value="la">Lara</option>\
              <option value="me">M&eacute;rida</option>\
              <option value="mi">Miranda</option>\
              <option value="mo">Monagas</option>\
              <option value="ne">Nueva Esparta</option>\
              <option value="po">Portuguesa</option>\
              <option value="su">Sucre</option>\
              <option value="ta">T&aacute;chira</option>\
              <option value="tr">Trujillo</option>\
              <option value="va">Vargas</option>\
              <option value="ya">Yaracuy</option>\
              <option value="zu">Zulia</option>';

var select_input = '<select id="select_estados" name="select_estados" style="position:absolute;width:20%;" >'+estados+'</select>';



var entrarr = "0";
var estado = "0";

function fentrar(){
  estado = $("#select_estados").val(); 
    console.log(estado);
}*/



game.Inicio = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), true);
        
    },




	onMouseDown : function() {


  

        //estado = entrarr; 
        //console.log(estado);

        var estado = $("#select_estados").val(); 
        
        

        if(estado=="0"){

          /*
          $.pgwModal({
              target: '#modal_estado',
              title: 'Seleccione su estado de residencia',
              maxWidth: 800
          });*/
          alert("Seleccione el estado de su residencia");

        }else{


          document.getElementById('fixedtop1').style.visibility = 'hidden';

          for(var _estado in estados){
              if(estados[_estado].id == estado){
                  game.data.conmax = estados[_estado].maximo;
              }    
          
          }

          if(me.levelDirector.getCurrentLevelId() == 'escena_01'){
          
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








/*



game.SelectInput = me.Renderable.extend({
    init : function (x, y, type, length) {
        this.$input = $(select_input).css({
            "left" : x,
            "top" : y
        });
        this.floating = true;

        $(me.video.getWrapper()).append(this.$input);
    },

    destroy : function () {
        this.$input.remove();
    }
});

*/