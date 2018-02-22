<?php

session_start();



$result = new stdClass();
$result->resultat = false;
$result->message = "";

//$result->connecte = false;

if ((isset($_SESSION['connecte'])) && ($_SESSION['connecte'] == 'ok'))
{
    $result->resultat = true;
}
else
    $result->message = 'Pas connecté';


header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date dans le passé
header("Content-type : application.json");

echo json_encode($result);