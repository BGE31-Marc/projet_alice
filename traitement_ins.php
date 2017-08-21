<?php
//
// $mesage ="";
// $pseudoBDD;
// $mdpBDD;
// $compteur = 0;
// //verifie existence du pseudo
// echo $_POST['pseudo'];
// if(isset($_POST['pseudo'])){
//     $pseudo = htmlspecialchars($_POST['pseudo']);
//     //verifie l'existence du pseudo
//     if(!empty($pseudo)){
//         if(strlen($pseudo)>2 && strlen($pseudo)<40){
//             //verifie si la chaine est un pseudo
//             if(preg_match('#^[a-zA-Z0-9._-]{2,40}$#', $pseudo)){
//                 $pseudoBDD = $pseudo;
//             }
//         }
//     }
// }
//
//
// if(isset($_POST['mdp'])){
//     $mdp = htmlspecialchars($_POST['mdp']);
//     //verifie l'existance du mot de passe
//     if(!empty($mdp)){
//         //on verifie la longueur du mdp
//         if(strlen($mdp)> 2 && strlen($mdp) <255){
//             //on verifie le format du mdp
//             if(preg_match('#^[a-zA-Z0-9._-]{2,14}$#', $mdp)){
//                 $mdpBDD = $mdp;
//                 // echo $mdpBDD.'<br>';
//             }
//         }
//     }
// }
//
//
// if(isset($pseudoBDD) && isset($mdpBDD)){
// //echo "ligne 37";
//     include('connexion.php');
//     //verification que le pseudo n'existe pas deja dans la bdd
//     $requete = 'SELECT pseudo FROM membre';
//     $resultat = $connexion->query($requete);
//     foreach($resultat as $ligne) {
//         if($ligne['pseudo'] == $pseudo){
//             // echo "pseudo deja connu";
//             $compteur++;
//             // echo "le compteur ".$compteur;
//             $message = "pseudo utilisateur deja pris. Merci de changer.";
//             header('Location: http://localhost/projet_alice/accueil.php');
//         }
//     }
//
//     if($compteur === 0){
//         //inscription dans la bdd
//         $requete = "INSERT INTO membre (pseudo, mdp) VALUES (:lePseudo, :leMdp)";
//         $modele=$connexion->prepare($requete);
//         $modele->bindParam('lePseudo', $pseudoBDD);
//         $modele->bindParam('leMdp', $mdpBDD);
//         $modele->execute();
//         // echo "vous etes inscrit";
//         // $message .= "bonjour " . $pseudoBDD;
//         header('Location: http://localhost/projet_alice/alice.php');
//     }
//
//         include('deconnexion.php');
//
// }else{header('Location: http://localhost/projet_alice/accueil.php');}

 ?>
