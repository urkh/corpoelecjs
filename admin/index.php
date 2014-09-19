<?php
error_reporting(0);
session_start();    

if($_SESSION['LogedIn']){
    
?>

<!DOCTYPE html>
<html>
<head>

	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	
	<title>Administracion - Ajustes de Consumos</title>

	<link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../lib/dropzone/dropzone.css">

    <script src="../lib/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="../lib/bootstrap/js/bootstrap.min.js"></script>
    <script src="../lib/dataTables/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="../lib/dataTables/jquery.jeditable.js" type="text/javascript"></script>
    <script src="../lib/dataTables/jquery.validate.js" type="text/javascript"></script>
    <script src="../lib/dataTables/jquery.dataTables.editable.js" type="text/javascript"></script>
    <script src="../lib/dropzone/dropzone.min.js" type="text/javascript"></script>

    <script type="text/javascript" charset="utf-8">
		$(document).ready( function () {
			$('#testados').dataTable({
				bFilter: false,
				bPaginate: false,
				bSearchable: false,
				bInfo: false,
				bProcessing: true,
				columnDefs: [
		            {
		                "targets": [0],
		                "visible": false
		            }
		        ],
                sAjaxSource: "backend.php",
               "sAjaxDataProp": "",
                "aoColumns":[ 
                	 { "mData": "id" },
	                 { "mData": "ids" },
	                 { "mData": "nombre" },
	                 { "mData": "maximo" },
               ]
			}).makeEditable({

				sUpdateURL: "backend.php",
				"aoColumns": [
					null,
					null,
					//null,
					{
						cssclass:"number",
						indicator: 'Guardando datos...',
                        tooltip: 'Click para editar el maximo de consumo permitido',
                        submit:'Guardar',
                        loadtype: 'GET',

						oValidationOptions : { 
							rules:{ 
								value: {minlength: 0}  
							},
							messages: { 
								value: {
									minlength: "Debe ingresar solo numeros"
								} 
							} 
						}


					},
				]									

			});
		

            $("#mydrop").dropzone();

            

	
		} );



	</script>

</head>
<body>
<div id="wrapper">
	<div class="container">
		<nav class="navbar navbar-default" role="navigation">
			
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="../index.html">Ir al simulador</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<p class="navbar-text pull-right">
					<a href="logout.php" class="btn btn-danger btn-xs navbar-btn">
						Salir
					</a>
				</p>
			</div>

		</nav>
	</div>

	<div id="content" class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<h2>Administraci&oacute;n de Consumos</h2>

				<hr>

				<table class="table table-bordered"  id="testados" width="100%" align="center">
					<thead>
						<tr>
							<th>id</th>
							<th>IDS</th>
							<th>Nombre</th>
							<th>Consumo Maximo</th>
						</tr>
					</thead>
					<tbody>

					</tbody>
				</table>

            </div>
        

    
        </div>

        <hr>
        <form action="upload.php" method="post" class="dropzone" enctype="multipart/form-data">
        </form>


		<div class="text-center">
			<hr>
			Simulador de Energ&iacute;a  -
			<a href="http://corpoelec.gob.ve/">Corpoelec</a> 
			<br><br>
		</div>
	</div>


</div>
</body>
</html>


<?php }else{
	header("Location: loginv.php");

}

?>
