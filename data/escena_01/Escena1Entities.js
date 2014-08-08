game.Inicio = me.ObjectEntity.extend({

    init: function(x,y,settings){

        this.parent(x, y, settings);

        me.input.registerPointerEvent('pointerdown', this, this.onMouseDown.bind(this), true);
        
    },



	onMouseDown : function() {


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




game.TextInput = me.Renderable.extend({
    init : function (x, y, type, length) {
        this.$input = $('<input value="Some positioned text." type="text" style="position:absolute;left:100px;top:300px;width:600px;">').css({
            "left" : x,
            "top" : y
        });

        switch (type) {
        case "text":
            this.$input
                .attr("maxlength", length)
                .attr("pattern", "[a-zA-Z0-9_\-]+");
            break;
        case "number":
            this.$input.attr("max", length);
            break;
        }

        $(me.video.getWrapper()).append(this.$input);
    },

    destroy : function () {
        this.$input.remove();
    }
});

