<?php

require_once 'medoo.min.php';

$database = new medoo();
 
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $datas = $database->select("estado", 
        ["id", "ids","nombre", "maximo"] 
    );

    echo json_encode($datas);

}else{

    extract($_POST);
    $rowId+=1;
    $database->update("estado", 
        ["maximo" => $value], 
        ["id" => $rowId]
    );

    echo $value;
}


?>
