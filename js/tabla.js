$(document).ready(function() {

	
	$('#tabla').DataTable({
		scrollY: "200px",
		scrollCollapse: true,
		bFilter: false,
		bPaginate: false,
		bSearchable: false,
		bInfo: false,
        "bJQueryUI": true,
		"columnDefs": [
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
            
            
            if(consumos[cons].apagado){
                consumos[cons].apagado = false;
                consumo(consumos[cons].id);
                me.audio.play("prender");
                

            }

            if(!consumos[cons].apagado){
                consumos[cons].apagado = true;
                consumo(consumos[cons].id);
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

    for(var cons in consumos) {
        if(!consumos[cons].apagado){

            if(consumos[cons].id==id){
                consumos[cons].consumo=total;
            }

        }

        else{

            if(consumos[cons].id==id){
                game.data.score=game.data.score-consumos[cons].consumo;
                consumos[cons].consumo=0;
            }

        }
       
    }

    game.data.score=consumos.tv1.consumo+consumos.tv2.consumo+consumos.radio_r.consumo+consumos.bom1.consumo+consumos.bom2.consumo+consumos.licuadora.consumo+consumos.microondas.consumo+consumos.nevera.consumo+consumos.lavadora.consumo+consumos.secadora.consumo+consumos.plancha.consumo+consumos.cal1.consumo+consumos.cal2.consumo+consumos.pc1.consumo+consumos.pc2.consumo+consumos.lamp1.consumo+consumos.lamp2.consumo+consumos.ac1.consumo+consumos.ac2.consumo+consumos.consola.consumo;

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