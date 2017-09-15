<?php
session_start();
//on créer un fichier txt dans lequel on ecrit la requete SQL, permet de verif requete conforme en testant dans PHPmyAdmin
$fp = fopen("debug.txt", "w+");
if(isset($_POST['action'])){
    if(isset($_POST['user_email'])){
        if(isset($_POST['score'])){
            if(isset($_POST['user_pseudo'])){
$requete = "SELECT user_score FROM users WHERE user_email='".$_SESSION['mail']."';";
fwrite($fp, $requete);
 //connect DB
// define ('DSN','mysql:host=localhost;dbname=alice_bd');
// define ('USER','root');
// define ('MDP','');
// //                 // // Création d'un objet PDO et test de la connexion
// $connDB = new PDO(DSN,USER,MDP);
include'connectionDB.php';
//                 // //exec requete sous condition du score deja enregistre
$resultat = $connDB->query($requete);
$donnees = $resultat->fetchAll();
//on se deconnecte de la base
include'deconnectionDB.php';
// if($connDB){
//   $connDB = NULL;
// }
foreach($donnees as $ligne) {
    //echo "<div class='meilleur'>".$ligne['user_score']."</div>";
  }
                if($ligne['user_score'] < $_POST['score']){
                    //prepare la requete
                    $requete2 = "UPDATE users SET user_score = ".$_POST['score']." WHERE  user_email='".$_POST['user_email']."'; ";
                    // //connect DB
                    // define ('DSN','mysql:host=localhost;dbname=alice_bd');
                    // define ('USER','root');
                    // define ('MDP','');
                    // // // Création d'un objet PDO et test de la connexion
                    // $connDB = new PDO(DSN,USER,MDP);
                    //ajax aime pas les define DSN... =>erreur
                    // try {
                    //   $connDB = new PDO('mysql:host=localhost;dbname=alice_bd', 'root', '');
                    // } catch (Exception $erreur) {
                    //   echo "Outch, erreur : ".$erreur -> getMessage();
                    //   exit();
                    // }
                    include'connectionDB.php';
                    // //exec requete sous condition du score deja enregistre
                    $resultat2 = $connDB->query($requete2);
                    // //deco DB
                    include'deconnectionDB.php';
                    // $connDB = Null;
                    //2 lignes qui renvoies une reponse a ajax pour afficher l'alerte ca c'est bien passe. On doit renvoyer une reponses obliger, donc a decaler apres requete SQL si bien passe
                    $tab['reponse'] = 'score mis jour';
                    echo json_encode($tab);
                }
                    else{
                    $tab['reponse'] = 'score deja meilleur';
                    echo json_encode($tab);
                }
            }
        }
    }
}
fclose($fp);
 ?>
