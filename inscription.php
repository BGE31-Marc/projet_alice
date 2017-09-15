<?php session_start(); ?>

<?php
 $_SESSION['ident'] = "";
 $_SESSION['mail'] = "";
  // Récupération des informations du formulaire
  //user_prenom
  if (empty($_POST['user_prenom'])) {
    // Champ vide ou inexistant
    $erreur = true;
  } else {
    if (strlen($_POST['user_prenom'])>50 || strlen($_POST['user_prenom'])<2) {
      $erreur = true;
    } else {
        //if verif format avec regex
            $user_prenom = htmlentities($_POST['user_prenom']);
      //}
    }
  }



  // user_email
  if (empty($_POST['user_email'])) {
    // Champ vide ou inexistant
    $erreur = true;
  } else {
    if (strlen($_POST['user_email'])>50 || strlen($_POST['user_email'])<6) {
      $erreur = true;
    } else {
        // $regexp = "/^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/"
        // if (preg_match($regexp, $_POST['email']) {
        //if verif format avec regex
            $user_email = htmlentities($_POST['user_email']);
      //}
    }
  }




  // MOT DE PASSE
  if (empty($_POST['user_mdp'])) {
    // Champ vide ou inexistant
    $erreur = true;
  } else {
        if (strlen($_POST['user_mdp'])>20) {
          $erreur = true;
        } else {
          $user_mdp = md5(htmlentities($_POST['user_mdp']));
        }
  }



if($erreur == false){

  // Connexion à la DB
include'connectionDB.php';
  // Test d'existence du mail
  $requete = "SELECT * FROM users WHERE user_email='".$user_email."' LIMIT 1";
  $resultat = $connDB->query($requete);
  $donnees = $resultat->fetch(PDO::FETCH_ASSOC);

  if ($donnees===false) {
        // Insertion dans la DB
        $requete = "INSERT INTO users (user_prenom, user_mdp, user_email, user_score) VALUES ('".$user_prenom."','".$user_mdp."','".$user_email."', 0)";

        $resultat = $connDB->exec($requete);
            if($resultat==1) {
              echo "Félicitations !";
              // Connexion via SESSION
              $_SESSION['ident'] = $user_prenom;
              $_SESSION['mail'] = $user_email;
                header('Location:http://sd-67292.dedibox.fr/~celine.m/projet_alice/alicePOO.php');

            } else {
              echo "Une erreur s'est produite, veuillez recommencer";
            }
      } else {
        echo "Apparement vous êtes déjà inscrit dans notre DB...<br>";
        echo "<a href='http://sd-67292.dedibox.fr/~celine.m/projet_alice/index.php'>RETOUR</a>";
      }

      // Fermeture de la Connexion
    include'deconnectionDB.php';
}
else{echo "Un des champs est mal rempli...<br>";echo "<a href='http://sd-67292.dedibox.fr/~celine.m/projet_alice/index.php'>RETOUR</a>";}
?>
