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

        //01
        me.pool.register("inicio", game.Inicio);

        //02
        me.pool.register("entrar_cocina", game.EntrarCocina);
        me.pool.register("televisor", game.Televisor);
        me.pool.register("puerta_cuarto", game.PuertaCuarto);
        me.pool.register("radio_r", game.RadioR);
        me.pool.register("bombillo_e2", game.BombilloE2);

        //03
        me.pool.register("nevera", game.Nevera);
        me.pool.register("entrar_lavandero", game.EntrarLavandero);
        me.pool.register("salir_cocina", game.SalirCocina);
      
        //04
        me.pool.register("lavadora", game.Lavadora);
        me.pool.register("salir_lavandero", game.SalirLavandero);
        me.pool.register("secadora", game.Secadora);
        
        //05
        me.pool.register("computadora", game.Computadora);
        me.pool.register("lampara", game.Lampara);
        me.pool.register("lampara2", game.Lampara2);
        me.pool.register("bom_normal", game.BomNormal);
        me.pool.register("salir_cuarto", game.SalirCuarto);
        me.pool.register("entrar_bano", game.EntrarBano);

        //06
        me.pool.register("calentador", game.Calentador);
        me.pool.register("ducha", game.Ducha);
        me.pool.register("salir_bano", game.SalirBano);

        me.state.transition("fade","#000000", 250);


        me.state.change(me.state.PLAY);
    
    }


}
