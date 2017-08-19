<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Alice</title>
        <link rel="stylesheet" href="alice.css">
    </head>
    <body class="accueil">
        <h1>Alice au fond du trou</h1>
        <div class="zone_formulaire">
            <form action="traitement.php" method="post">
              <fieldset>
                <input type="text" name="pseudo" placeholder="votre pseudo" >
                <input type="password" name="mdp" placeholder="mot de passe">
                <button type="button" name="button">s'incrire</button>
              </fieldset>
            </form>
            <form action="traitement.php" method="post">
              <fieldset>
                <input type="text" name="pseudo" placeholder="votre pseudo">
                <input type="password" name="mdp" placeholder="mot de passe">
                <button type="button" name="button">connecter</button>
              </fieldset>
            </form>
        </div>
    </body>
</html>
