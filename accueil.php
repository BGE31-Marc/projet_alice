
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Alice</title>
        <link rel="stylesheet" href="alice.css">
        <script type="text/javascript" src="traitement.js"></script>
    </head>
    <body class="accueil">
        <h1>Alice au fond du trou</h1>
            <form action="traitement_ins.php" method="post" id="form_inscription">
                <div class="zone_formulaire">

              <fieldset>
                <input type="text" name="pseudo" placeholder="votre pseudo" >
                <input type="password" name="mdp" placeholder="mot de passe">

                     <div class="message">
                         <?php if(isset($message)){echo $message;} ?>
                         <!-- pseudo utilisateur deja pris. Merci de changer. -->
                     </div>

                <input type="submit" name="inscrire" value='inscrire'>
              </fieldset>
            </form>

            <form action="traitement_connect.php" method="get" id="form_connect">
              <fieldset>
                <input type="text" name="pseudoI" placeholder="votre pseudo">
                <input type="password" name="mdpI" placeholder="mot de passe">
                <div class="message">
                        <!--  ##### TEST MESSAGE ERREUR -->
                        <!-- mauvais pseudo ou mot de passe. -->
                </div>
                <input type="submit" name="connect"  value="connexion">
              </fieldset>
            </form>
        </div>
    </body>
</html>
