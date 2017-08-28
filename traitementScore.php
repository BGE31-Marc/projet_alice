<?php session_start(); ?>

<?php

if(isset($_POST['action'])){
    //2 lignes qui renvoies une reponse a ajax pour afficher l'alerte ca c'est bien passe. On doit renvoyer une reponses obliger, donc a decaler apres requete SQL si bien passe
    $tab['reponse'] = 'ok en php';
    echo json_encode($tab);
}


 ?>
