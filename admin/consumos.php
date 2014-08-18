<?php

extract($_REQUEST);

require_once 'medoo.min.php';
$database = new medoo();



switch($opc) {

	case 'crear':

		$database->insert("consumos", 
			[
				"estado_id" => 1,
				"dispositivo_id" => 1,
				"monto" => 200
			]
		);

		break;


	case 'consultar':

		$consumos = $database->get("consumos", 
			[
				"[><]dispositivo" => ["dispositivo_id" => "id"],
				"[><]estado" => ["estado_id" => "id"]

			],
			[
				"consumos.id",
				"consumos.estado_id",
				"consumos.dispositivo_id",
				"consumos.monto"
			], 
			[
				"id" => 1234
			]
		);

		break;


	case 'actualizar':

		$database->update("consumos", 
			[
				"estado_id" => 1,
				"dispositivo_id" => 1,
				"monto" => 200.2

			], 
			[
				"id" => 1
			]
		);

		break;


	default:

		$consumos = $database->select("consumos", 
			[
				"[><]dispositivo" => ["dispositivo_id" => "id"],
				"[><]estado" => ["estado_id" => "id"]

			],
			[
				"consumos.id",
				"consumos.estado_id",
				"consumos.dispositivo_id",
				"consumos.monto"
			], 
			[
				"consumos.estado_id" => 1234
			]
		);

}



?>