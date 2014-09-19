<?php

require_once 'medoo.min.php';

$database = new medoo();

extract($_POST);

$datas = $database->get("Users", 
    ["Username","Password"], 
    ["AND" => ["Username" => $Username, "Password"=>md5($Password)]]
);


if ($datas["Username"]!="") {
	
    session_start();    
    $_SESSION['LogedIn'] = true;
	header("Location: index.php");
	  
}else{

	header("Location: ./loginv.php?error=1");

}

?>