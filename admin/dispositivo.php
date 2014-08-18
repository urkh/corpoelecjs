<?php

extract($_REQUEST);

require_once 'medoo.min.php';
$database = new medoo();



switch($opc) {

	case 'crear':

		$database->insert("dispositivo", 
			[
				"nombre" => "tv1",
				"potencia" => "800"
			]
		);

		break;


	case 'consultar':

		$dispositivo = $database->get("dispositivo", 
			[
				"id",
				"nombre",
				"potencia"
			], 
			[
				"id" => 1234
			]
		);

		break;


	case 'actualizar':

		$database->update("dispositivo", 
			[
				"nombre" => "tv2",
				"potencia" => "400"

			], 
			[
				"id" => 1
			]
		);

		break;


	default:

		$dispositivos = $database->select("dispositivo", 
			[
				"id", 
				"nombre", 
				"potencia"
			]
		);

}



?>