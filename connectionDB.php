<?php
//
try {
  $connDB = new PDO('mysql:host=localhost;dbname=celine.m_db', 'celine.m_dbu', 'celmer');
} catch (Exception $erreur) {
  echo "Outch, erreur : ".$erreur -> getMessage();
  exit();
}



// try {
//   $connDB = new PDO('mysql:host=localhost;dbname=alice_bd', 'root', '');
// } catch (Exception $erreur) {
//   echo "Outch, erreur : ".$erreur -> getMessage();
//   exit();
// }

 ?>
