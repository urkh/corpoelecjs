<?php

error_reporting(0);
session_start();    

if(!$_SESSION['LogedIn']){
    
?>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<title>Corpoelec | Casa Virtual</title>
	
	<meta name="robots" content="noindex">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	

</head>
<body>
<div id="wrapper">
	<div class="container">
		<nav class="navbar navbar-default" role="navigation">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="../index.html">Ir al simulador</a>
			</div>

		</nav>
	</div>

	<div id="content" class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<h2>Administraci&oacute;n</h2>

				<hr>

				<form method="post" action="login.php" >
					<div class="form-group">
						<label>Usuario:</label>
						<input name="Username" class="form-control" required="" autofocus="" type="text">
					</div>

					<div class="form-group">
						<label>Contrase&ntilde;a:</label>
						<input name="Password" class="form-control" required="" type="password">
					</div>

					<div class="form-group text-center">
						<?php if($_GET["error"]==1){ ?>

						<font size="3" color="red">Usuario o contrase&ntilde;a erronea</font>

						<?php } ?>

						<br><br>
						<button type="submit" class="btn btn-primary">Entrar</button>
						<br><br>
					</div>
				</form>

			</div>
		</div>
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


<?php }else{ header("Location: index.php"); } ?>