var game = {

    data:{
        score:10,
        game_over: false,
        conmax:3000
    },

    onload: function(){
        
        if(!me.video.init("juego", 1600, 1000, true, "auto")){
            
            alert("El navegador no soporta canvas html5");
            return;

        }

        if(document.location.hash === "#debug"){
   
            window.onReady(function(){
                me.plugin.register.defer(this, debugPanel, "debug");
            });           
   
        }
        
        me.debug.renderHitBox = true;

        me.loader.load(

            {
                name : "logo",
                type : "image",
                src  : "data/img/logo.png"
            },

            this.goToLoadingScreen.bind(this),
            function() {
                alert("No se han podido cargar algunos elementos!");
            }
        );

        me.audio.init("mp3,ogg");
        //me.loader.onload = this.loaded.bind(this);
        //me.loader.preload(game.resources);
        //me.state.change(me.state.LOADING);
    
    },


    goToLoadingScreen : function() {

        me.state.set(me.state.LOADING, new game.CustomLoadingScreen());
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(game.resources);
        me.state.change(me.state.LOADING);

    },


    loaded: function(){
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        //01
        me.pool.register("inicio", game.Inicio);
        me.pool.register("sinput", game.SelectInput);
        me.pool.register("cambiar_level", game.CambiarLevel);

        //02
        me.pool.register("entrar_cocina", game.EntrarCocina);
        me.pool.register("bombillo_e2", game.BombilloE2);
        me.pool.register("televisor", game.Televisor);
        me.pool.register("entrar_cuarto1", game.EntrarCuarto1);
        me.pool.register("salida", game.Salida);
        me.pool.register("entrar_cuarto2", game.EntrarCuarto2);
        me.pool.register("radio_r", game.RadioR);
        

        //03
        me.pool.register("nevera", game.Nevera);
        me.pool.register("campana", game.Campana);
        me.pool.register("micro", game.Micro);
        me.pool.register("reloj", game.Reloj);
        me.pool.register("cocina", game.Cocina);
        me.pool.register("bombillo_e3", game.BombilloE3);
        me.pool.register("licuadora", game.Licuadora);
        me.pool.register("entrar_lavandero", game.EntrarLavandero);
        me.pool.register("salir_cocina", game.SalirCocina);
      
        //04
        me.pool.register("bombillo_e4", game.BombilloE4);
        me.pool.register("lavadora", game.Lavadora);
        me.pool.register("plancha", game.Plancha);
        me.pool.register("calentador", game.Calentador);
        me.pool.register("secadora", game.Secadora);
        me.pool.register("salir_lavandero", game.SalirLavandero);

        //05
        me.pool.register("computadora", game.Computadora);
        me.pool.register("ac", game.Ac);
        me.pool.register("lampara", game.Lampara);
        me.pool.register("lampara2", game.Lampara2);
        me.pool.register("bombillo_e5", game.BombilloE5);
        me.pool.register("salir_cuarto", game.SalirCuarto);
        me.pool.register("entrar_bano", game.EntrarBano);

        //06
        me.pool.register("ducha", game.Ducha);
        me.pool.register("afeitadora", game.Afeitadora);
        me.pool.register("secador", game.Secador);
        me.pool.register("bombillo_e6", game.BombilloE6);
        me.pool.register("salir_bano", game.SalirBano);

        //07
        me.pool.register("ac_e7", game.AcE7);
        me.pool.register("televisor_e07", game.TelevisorE7);
        me.pool.register("bombillo_e7", game.BombilloE7);
        me.pool.register("lampara3", game.Lampara3);
        //me.pool.register("consola", game.Consola);
        me.pool.register("salir_cuarto2", game.SalirCuarto2);

        me.state.transition("fade","#000000", 250);


        //me.input.bindKey(me.input.KEY.Z, "prender", true, false);
        //me.input.bindPointer(me.input.mouse.RIGHT, me.input.KEY.Z);


        me.state.change(me.state.PLAY);
    
    }


}
