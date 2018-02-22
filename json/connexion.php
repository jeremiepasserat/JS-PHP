<?php
/**
 * Created by PhpStorm.
 * User: p16016063
 * Date: 22/02/18
 * Time: 09:20
 */

session_start();

$result = new stdClass();
$result->resultat = true;
$result->message = "";

if (isset ($_POST['id']) && $_POST['mdp']) {
    $_SESSION['connecte'] = 'ok';
}
else {
    $result->message = "non";
    $result->resultat = false;
}

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date dans le passé
header("Content-type : application.json");

echo json_encode($result);