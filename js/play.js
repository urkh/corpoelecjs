game.PlayScreen = me.ScreenObject.extend({

/*
    init: function(x,y,settings){

        this.parent(x, y, settings);

        this.renderable.addAnimation("pila_baja", [0]);
        this.renderable.addAnimation("pila_media", [1]);
        this.renderable.addAnimation("pila_alta", [2]);
        this.renderable.setCurrentAnimation("pila_baja");
        
    },
*/
    onResetEvent: function(){
    
        me.levelDirector.loadLevel("escena_01");
        me.audio.playTrack("background");

        game.data.score = 0;

        this.HUD = new game.HUD.Container();

        me.game.world.addChild(this.HUD);
    },

    onDestroyEvent: function(){
        
        me.audio.stopTrack();
        me.game.world.removeChild(this.HUD);
    
    }


});
