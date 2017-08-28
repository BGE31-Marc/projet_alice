<?php

  session_start();

 ?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>Projet Alice</title>
    <link rel="stylesheet" href="styles.css">
    <script src="traitement.js"></script>
  </head>
  <body>
    <header>
      <h3>Bienvenue sur le site d'Alice</h3>
    </header>
    <!-- <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav> -->

      <!-- <?php
        //include('inc_menu.php');
      ?> -->
      <div id="grand_cadre">
        <div>
          <section id="non_inscrit">

        <!-- section des inscriptions -->
            <form action="inscription.php" method="post">
              <h2>Inscription</h2>
              <input type="text" name="user_prenom" value="" required ='required' placeholder="prénom ou pseudo" maxlength="25"><br>
              <input type="email" name="user_email" value="" placeholder="adresse mail" maxlength="50"><br>
              <input type="password" name="user_mdp" value="" required ='required' placeholder="mot de passe" maxlength="15"><br>
              <!--input type='submit' value='valider'>-->
              <input type='submit' value='soumettre'><br><br>
            </form>
          </section>
        </div>
        <div>
          <section id="inscrit">
            <form action="identification.php" method="post">
              <h2>Déjà inscrit</h2>
                <input type='mail' name='user_email' placeholder='email' value=''><br>
                <input type='password' name='user_mdp' placeholder='mot de passe' value=''><br><br>
                <input type="submit" value="Connexion"><br>
            </form>
          </section>
        </div>
      </div>
      <div id="jeu">
        <input type ='submit' value='Accès au jeu'><br>
      </div>
    </main>
    <footer>
        <a href="#">Copyright</a><br>
        <!-- <a href="#">à définir</a> -->
    </footer>
  </body>
</html>
