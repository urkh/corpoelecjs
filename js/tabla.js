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

function consumo(id){

    var cantidad = parseInt($('#'+id+'_cantidad').val());
    var frecuencia = parseInt($('#'+id+'_frecuencia').val());
    var potencia = parseInt($('#'+id+'_potencia').val());

    var total = frecuencia*potencia*cantidad;//cantidad+frecuencia+potencia;
    game.data.score=total;

    $('#'+id+'_total').text(total+" kw");



    if(game.data.score >= 1000 && game.data.score <= 1999){
        me.audio.play("alerta");
    }

    if(game.data.score >= 2000 && game.data.score <= 2999){
        me.audio.play("alerta");
    }

    if(game.data.score >= 3000){
        me.audio.play("pierde");
    }




}