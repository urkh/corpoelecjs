game.PlayScreen = me.ScreenObject.extend({

    onResetEvent: function(){
    
        me.levelDirector.loadLevel("escena_01");
        //me.audio.playTrack("background");

        game.data.score = 0;

        this.HUD = new game.HUD.Container();

        me.game.world.addChild(this.HUD);
    },

    onDestroyEvent: function(){
        
        me.audio.stopTrack();
        me.game.world.removeChild(this.HUD);
    
    }


});
