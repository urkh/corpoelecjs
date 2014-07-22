var game = {

    data:{
        score:0
    },

    onload: function(){
        
        if(!me.video.init("juego", 1024, 650, true, "auto")){
            
            alert("El navegador no soporta canvas html5");
            return;

        }

        if(document.location.hash === "#debug"){
   
            window.onReady(function(){
                me.plugin.register.defer(this, debugPanel, "debug");
            });           
   
        }
        
        me.debug.renderHitBox = true;

        me.audio.init("mp3,ogg");
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(game.resources);
        me.state.change(me.state.LOADING);
    
    },


    loaded: function(){
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        me.pool.register("puerta_principal", game.PuertaPrincipal);
        me.pool.register("nube_01", game.Nube1);
        me.pool.register("nube_02", game.Nube2);


        me.pool.register("tv_plano", game.TvPlano);
        me.pool.register("radio_r", game.RadioR);
        me.pool.register("bom_ahorrador", game.BomAhorrador);


        me.pool.register("nevera", game.Nevera);
        me.pool.register("puerta_lavandero", game.PuertaLavandero);
      
        me.pool.register("lavadora", game.Lavadora);
        me.pool.register("secadora", game.Secadora);

        me.pool.register("computadora", game.Computadora);

        me.state.transition("fade","#000000", 250);


        me.state.change(me.state.PLAY);
    
    }


}
