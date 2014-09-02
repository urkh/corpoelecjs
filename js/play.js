game.PlayScreen = me.ScreenObject.extend({

    onResetEvent: function(){
    
        me.levelDirector.loadLevel("escena_01");
        //me.audio.playTrack("background");
        document.getElementById('fixedtop1').style.visibility = 'visible';

    },

    onDestroyEvent: function(){
        
        me.audio.stopTrack();
        //me.game.world.removeChild(this.HUD);
    
    }


});


me.ProgressBar = me.Renderable.extend({

    init: function(posVector, w, h, padding) {
        this.parent(posVector, w, h);

        this.forceRedraw = false;
        this.progressWidth = 0;
        this.progressPadding = ((typeof(padding) === "undefined") ?
                                new me.Vector2d(0, 0) :
                                padding);

        this.setColors('white', 'black');

        this.text = null;

        this.font = new me.Font(
            "century gothic", 12, "white", "middle"
        );
    },

    onProgressUpdate : function(progress, text) {
        this.progressWidth = Math.floor(progress * this.width);
        this.forceRedraw   = true;

        this.text = ((typeof(text) === "undefined") ?
                     null :
                     text);
    },

    update : function() {
        if (this.forceRedraw === true) {
            this.forceRedraw = false;
            return true;
        }
        return false;
    },

    draw : function(context) {

        context.fillStyle = this.backgroundColor;
        context.fillRect(
            this.pos.x,
            this.pos.y,
            this.width,
            this.height
        );

        context.fillStyle = this.foregroundColor;
        context.fillRect(
            this.pos.x         + this.progressPadding.x,
            this.pos.y         + this.progressPadding.y,
            this.progressWidth - this.progressPadding.x * 2,
            this.height        - this.progressPadding.y * 2
        );

        if (this.text === null)
            return;

        this.font.draw(
            context,
            this.text,
            this.pos.x + this.progressPadding.x + 2,
            this.pos.y + this.progressPadding.y
        );
    },

    setColors : function(foreground, background) {
        this.foregroundColor = foreground;
        this.backgroundColor = background;
    }
});


var BackgroundImagen = me.SpriteObject.extend({

    init : function(image, x, y, w, h) {
        this.parent(x, y, image);
        this.anchorPoint = new me.Vector2d(0, 0);
        this.willForceDraw = false;
    },

    draw : function(context) {

        if (this.willForceDraw) {
            this.willForceDraw = false;
            this.parent(context);
        }
    },

    forceDraw : function() {
        this.willForceDraw = true;
    }

});


game.CustomLoadingScreen = me.ScreenObject.extend({

    "init" : function() {
        this.parent(true);
        this.handler = null;
    },

    "onResetEvent" : function() {

        this.backgroundImage = new BackgroundImagen(me.loader.getImage("logo"), 450, 500, me.game.viewport.width, me.game.viewport.height);
        this.backgroundImage.forceDraw();
        me.game.world.addChild(this.backgroundImage, 1);

        this.progressBar = new me.ProgressBar(
            new me.Vector2d(30,    450),
            me.game.viewport.width-7,  40,
            new me.Vector2d(0,    1)
        );
        this.progressBar.setColors('green', 'black');
        me.game.world.addChild(this.progressBar, 1);

        this.handler = me.event.subscribe(
            me.event.LOADER_PROGRESS,
            this.onProgressUpdate.bind(this)
        );
    },

    "onProgressUpdate" : function(progress, res) {
        this.progressBar.onProgressUpdate(progress);
    },

    "onDestroyEvent" : function() {
        me.event.unsubscribe(this.handler);
    }
});

