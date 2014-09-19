<?php
session_start();
session_destroy();
header("Location: loginv.php");

?>