var estados = '<option value="am">Amazonas</option>\
              <option>Anzo&aacute;tegui</option>\
              <option>Apure</option>\
              <option>Aragua</option>\
              <option>Barinas</option>\
              <option>Bolivar</option>\
              <option>Carabobo</option>\
              <option>Cojedes</option>\
              <option>Delta Amacuro</option>\
              <option>Distrito Capital</option>\
              <option>Falc&oacute;n</option>\
              <option>Guarico</option>\
              <option>Lara</option>\
              <option>M&eacute;rida</option>\
              <option>Miranda</option>\
              <option>Monagas</option>\
              <option>Nueva Esparta</option>\
              <option>Portuguesa</option>\
              <option>Sucre</option>\
              <option>T&aacute;chira</option>\
              <option>Trujillo</option>\
              <option value="va">Vargas</option>\
              <option>Yaracuy</option>\
              <option>Zulia</option>';

var select_input = '<select id="select_estados" name="select_estados" style="position:absolute;width:20%;">'+estados+'</select>';


game.Inicio = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), true);
        
    },



	onMouseDown : function() {


        me.game.viewport.fadeIn("#000000", 450, 

            (function (){
                me.audio.play("dopen");
                me.levelDirector.loadLevel("escena_02");

            })

        );

		return false;
	
	},
  

    update: function(dt){
     
        return this.parent(dt);
        
    },

});




game.SelectInput = me.Renderable.extend({
    init : function (x, y, type, length) {
        this.$input = $(select_input).css({
            "left" : x,
            "top" : y
        });

        $(me.video.getWrapper()).append(this.$input);
    },

    destroy : function () {
        this.$input.remove();
    }
});

