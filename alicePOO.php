<?php session_start();?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>alice</title>
        <link rel="stylesheet" href="alice.css">

<script src="musique/musique.js"></script>


        <script type="text/javascript">
            var user_pseudo = "<?php echo $_SESSION['ident'];?>" ;
            var user_email = "<?php echo $_SESSION['mail'];?>" ;
            // alert(user_mail);
        </script>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="Ennemi.js"></script>
    <script type="text/javascript" src="alicePOO.js"></script>


    </head>


    <body>
        <audio id="audioSon" src="musique/Do-a-Barrel-Roll.mp3"></audio>

        <div class="jeuxALICE">
            <div id="zoneDeJeux"></div>

            <div id="bordureG"></div>

            <div id="bordureD">
                <audio src="musique/mus.mp3" id="player"></audio>
                <a href="#" title="Lancer la lecture" class="boutonMusique"><img src="images/play.png" alt="Lecture" id="btnplay"></a>
                <a href="#" title="Mettre en pause" class="boutonMusique"><img src="images/pause.png" alt="Pause" id="btnpause"></a>
                <a href="#" class="large" id="fulls">PLEIN ÉCRAN</a>
                <div class="debug">

                    <?php

                        if($_SESSION['ident']){
                            echo "Bonjour, ".$_SESSION['ident'];
                        }

                     ?>
                </div>

                <div class="score"></div>
                <input type="button" name="" value="start">





            </div>
            <div id="alice"></div>



        </div>

    </body>
</html>
