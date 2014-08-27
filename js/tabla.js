$(document).ready(function() {
	
	$('#tabla').DataTable({
		scrollY: "200px",
		scrollCollapse: true,
		bFilter: false,
		bPaginate: false,
		bSearchable: false,
		bInfo: false,
        aaSorting: [[ 0, "desc" ]],
        bJQueryUI: true,
		columnDefs: [
            {
                "targets": [0],
                "visible": false
            }
        ]


	});

});


function agregar_tabla(id){

    for(var cons in consumos){
        
        if(consumos[cons].id == id){
            
            if(!consumos[cons].flag){

                if (id.indexOf("ac") == -1){
                    
                    $('#tabla').DataTable().row.add([
                        consumos[cons].id,
                        consumos[cons].nombre,
                        "<input type='number' id='"+id+"_cantidad' min='0' onchange='consumo(id)' value='1'>",
                        "<input type='number' id='"+id+"_frecuencia' step='0.2' min='0' onchange='consumo(id)' value='1'> H/s",
                        "<input type='number' id='"+id+"_potencia' min='0' onchange='consumo(id)' value="+consumos[cons].kw+"> W",
                        "<p id='"+id+"_total'></p>"
                    ]).draw();

                }

                if (id.indexOf("ac") > -1){

                    $('#tabla').DataTable().row.add([
                        consumos[cons].id,
                        consumos[cons].nombre,
                        "<input type='number' id='"+id+"_cantidad' min='0' onchange='consumo(id)' value='1'>",
                        "<input type='number' id='"+id+"_frecuencia' step='0.2' min='0' onchange='consumo(id)' value='1'> H/s",
                        "<input type='number' id='"+id+"_potencia' min='0' onchange='consumo(id)' value="+consumos[cons].kw+"> BTU",
                        "<p id='"+id+"_total'></p>"
                    ]).draw();
                }

                consumos[cons].flag = true;
 
            }

            me.audio.play("prender");

            consumo(id);
            
            if(consumos[cons].apagado){
                consumos[cons].apagado = false;
                consumo(consumos[cons].id);
                me.audio.play(id);
            }

            else{
                consumos[cons].apagado = true;
                consumo(consumos[cons].id);
                me.audio.stop(id);
            }
        }

    }

    return true;

}


function consumo(id){

    var cantidad = parseInt($('#'+id+'_cantidad').val());
    var frecuencia = parseInt($('#'+id+'_frecuencia').val());
    var potencia = parseInt($('#'+id+'_potencia').val());
    var total = frecuencia*potencia*cantidad;
    var consumo_total = 0;

    if(id.indexOf("ac") > -1){
        total=Math.round(frecuencia*potencia*cantidad/3.412141633);
    }

    for(var cons in consumos) {
        if(!consumos[cons].apagado){

            if(consumos[cons].id == id){
                consumos[cons].consumo = total;
            }
        }

        else{
            
            if(consumos[cons].id == id){
                game.data.score = game.data.score-consumos[cons].consumo;
                consumos[cons].consumo = 0;
            }
        }

        consumo_total+=consumos[cons].consumo;
    }

    game.data.score=(consumo_total*30)/1000;


    $('#'+id+'_total').text(total+" Wh");

    if(game.data.score < game.data.conmax/3){
        /*if(!sonidos.alerta1){
            me.audio.play("alerta");
        }*/
        sonidos.alerta1 = true;
    }

    if((game.data.score >= game.data.conmax/3) && (game.data.score < game.data.conmax/1.5)){
        if(!sonidos.alerta2){
            me.audio.play("alerta");
        }
        sonidos.alerta2 = true;
    }

    if(game.data.score >= game.data.conmax/1.5){
        if(!sonidos.alerta3){
            me.audio.play("alerta");
        }
        sonidos.alerta3 = true;
    }

    return true;

}