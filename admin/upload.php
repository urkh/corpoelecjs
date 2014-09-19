<?php


$ds = DIRECTORY_SEPARATOR;  
 
$storeFolder = '../data/sound'; 
 
if (!empty($_FILES)) {
    if($_FILES["file"]["type"] == "audio/mpeg"){
        $tempFile = $_FILES['file']['tmp_name'];    
        //$targetFile =  $_FILES['file']['name']; 
        move_uploaded_file($tempFile,"$storeFolder/radio_r.mp3");
    }

    elseif($_FILES["file"]["type"]=="video/ogg"){
        $tempFile = $_FILES['file']['tmp_name'];    
        //$targetFile =  $_FILES['file']['name']; 
        move_uploaded_file($tempFile,"$storeFolder/radio_r.ogg");
    } 

    else{
        echo "upload a valid file";
    }
     
}


?>
