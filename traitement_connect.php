 <?php

// 
// $pseudoBDD;
// $mdpBDD;
// $message;
// //verifie existence du pseudo
// echo $_GET['pseudo'];
// if(isset($_GET['pseudo'])){
//     $pseudo = htmlspecialchars($_GET['pseudo']);
//     //verifie l'existence du pseudo
//     if(!empty($pseudo)){
//         //verifie si la chaine est un pseudo
//         if(preg_match('#^[a-zA-Z0-9._-]{2,40}$#', $pseudo)){
//             $pseudoBDD = $pseudo;
//             //echo $pseudoBDD;
//         }else{echo "format pseudo pas correct";}
//     }else{echo "pseudo pas existant";}
// }
//
// //echo $_GET['mdp'];
// if(isset($_GET['mdp'])){
//     $mdp = htmlspecialchars($_GET['mdp']);
//     //verifie l'existance du mot de passe
//     if(!empty($mdp)){
//         //on verifie la longueur du mdp
//         if(strlen($mdp)> 2 && strlen($mdp) <255){
//             //on verifie le format du mdp
//             if(preg_match('#^[a-zA-Z0-9._-]{2,14}$#', $mdp)){
//                 $mdpBDD = $mdp;
//                 //echo $mdpBDD = $mdp;
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
//     $requete = 'SELECT * FROM membre';
//     $resultat = $connexion->query($requete);
//     foreach($resultat as $ligne) {
//         if($ligne['pseudo'] == $pseudo){
//             if($ligne['mdp']==$mdp){
//             $message = "salut ".$pseudo;
//
//             }
//         }
//     }
//
//
//         include('deconnexion.php');
//
// }else{echo "redirection page accueil || erreur";}

 ?>
