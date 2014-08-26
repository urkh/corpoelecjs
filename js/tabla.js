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
        if(consumos[cons].id==id){
            if(!consumos[cons].flag){
                $('#tabla').DataTable().row.add([
                    consumos[cons].id,
                    consumos[cons].id,
                    "<input type='number' id='"+id+"_cantidad' min='0' onchange='consumo(id)' value='1'>",
                    "<input type='number' id='"+id+"_frecuencia' min='0' onchange='consumo(id)' value='1'> H/s",
                    "<input type='number' id='"+id+"_potencia' min='0' onchange='consumo(id)' value="+consumos[cons].kw+"> W",
                    "<p id='"+id+"_total'></p>"
                ]).draw();

                consumos[cons].flag = true;

            }

            consumo(id);
            
            
            if(consumos[cons].apagado){
                consumos[cons].apagado = false;
                consumo(consumos[cons].id);
                me.audio.play("prender");
                me.audio.play(id);
                

            }

           // if(!consumos[cons].apagado){
            else{
                consumos[cons].apagado = true;
                consumo(consumos[cons].id);
                me.audio.stop(id);
                me.audio.play("apagar");
                

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

    game.data.score=consumo_total;


    $('#'+id+'_total').text(total+" kw");

    if(game.data.score >= 1000 && game.data.score <= 1999){
      //  me.audio.play("alerta");
    }

    if(game.data.score >= 2000 && game.data.score <= 2999){
      //  me.audio.play("alerta");
    }

    if(game.data.score >= 3000){
     //   me.audio.play("pierde");
    }


    return true;




}