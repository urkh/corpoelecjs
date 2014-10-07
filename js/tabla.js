$(document).ready(function() {

    $('#eliminar').tooltip();


	$('#tabla').dataTable({
		"sScrollY": "200px",
        "bScrollCollapse": true,
       "sScrollX" : "100%", 
        bFilter: false,
		bPaginate: false,
		bSearchable: false,
		bInfo: false,
        aaSorting: [[ 1, "asc" ]],
       // bJQueryUI: true,
        oLanguage:{
            sEmptyTable: "No ha seleccionado ning&uacute;n electrodom&eacute;stico"
        },
		columnDefs: [
            {
                "targets": [0],
                "visible": false
            },
            {   "bSortable": false, 
                "aTargets": [ 2, 3, 4, 5 ] 
            }
        ]


	});


 $(window).bind('resize', function () {
    $('#tabla').dataTable.fnAdjustColumnSizing();
  } );

});


function hand(){
    document.body.style.cursor = "pointer";

    setTimeout(function(){
        document.body.style.cursor = "default";
    },2000);
        
}


function eliminar_tabla(id){

    for(var cons in consumos){
        if(consumos[cons].id == id){
            consumos[cons].flag = false;
            me.audio.play("prender");
            consumo(id);
            consumos[cons].apagado = true;
            consumo(consumos[cons].id);
            me.audio.stop(id);
        }
    }

    tot_items = $('#tabla').dataTable().fnSettings().fnRecordsTotal();

    for(i=0; i<tot_items;i++){
        var idd = $('#tabla').dataTable().fnGetData(i);
        if(idd[0]==id){
            $('#tabla').DataTable().row(i).remove().draw(false);
        }
    }
}


function agregar_tabla(id){  

    for(var cons in consumos){
        
        if(consumos[cons].id == id){
            
            if(!consumos[cons].flag){

                if (id.indexOf("ac") == -1){
                    
                    $('#tabla').DataTable().row.add([
                        consumos[cons].id,
                        consumos[cons].nombre,
                        "<input type='number' id='"+id+"_cantidad' min='0' onchange='consumo(\x22"+id+"\x22)' value='1'>",
                        "<input type='number' id='"+id+"_frecuencia' step='0.2' min='0' onchange='consumo(\x22"+id+"\x22)' value='1'>",
                        "<input type='number' id='"+id+"_potencia' min='0' onchange='consumo(\x22"+id+"\x22)' value="+consumos[cons].kw+"> W",
                        "<p id='"+id+"_total'></p>"
                    ]).draw();

                }

                if (id.indexOf("ac") > -1){

                    $('#tabla').DataTable().row.add([
                        consumos[cons].id,
                        consumos[cons].nombre,
                        "<input type='number' id='"+id+"_cantidad' min='0' onchange='consumo(\x22"+id+"\x22)' value='1'>",
                        "<input type='number' id='"+id+"_frecuencia' step='0.2' min='0' onchange='consumo(\x22"+id+"\x22)' value='1'>",
                        "<input type='number' id='"+id+"_potencia' min='0' onchange='consumo(\x22"+id+"\x22)' value="+consumos[cons].kw+"> BTU",
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
                me.audio.stop(id)
                
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


    $('#'+id+'_total').text(total+" W/h");

    if(game.data.score < game.data.conmax/3){
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
