$(document).ready(function() {

	
	$('#tabla').DataTable({
		scrollY: "200px",
		scrollCollapse: true,
		bFilter: false,
		bPaginate: false,
		bSearchable: false,
		bInfo: false,
		"columnDefs": [
            {
                "targets": [0],
                "visible": false
            }
        ]


	});



    $('#tabla tbody').on('click', 'tr', function(){
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }else{
            $("#tabla").DataTable().$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });


    $("#eliminar").click(function(){
        $("#tabla").DataTable().row('.selected').remove().draw(false);
    });



} );