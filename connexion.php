<?php

try {
    $connexion = new PDO('mysql:host=localhost;dbname=alice', 'root','');
} catch (Exception $erreur) {
  echo "Outch, erreur : ".$erreur -> getMessage();
  exit();
}

 ?>
