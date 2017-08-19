document.addEventListener('DOMContentLoaded', function() {
// ## DECLARATION DES VARIABLES#####################################
var zoneDeJeux = document.querySelector('#zoneDeJeux');
var bordureG = document.querySelector('#bordureG');
var bordureD = document.querySelector('#bordureD');
var cible = document.querySelector('.jeuxALICE');
// ## taille de le zone de jeux
var zoneDeJeuxRecupCSS = getComputedStyle(zoneDeJeux);
var positionMini;
var tailleZoneDeJeux;
var positionMaxi;
//## DEPLACEMENT DU DECORS##
var bg_Y = 0;
var bordure_Y = 0;
//## DEPLACEMENT ALICE ##
var alice = document.querySelector('#alice');
var aliceRecupCSS = getComputedStyle(alice);
var aliceWidth = parseInt(aliceRecupCSS.width.replace("px", ""));
var pasAlice;
var posAlice = parseInt(aliceRecupCSS.left.replace("px", ""));
var touche = [];
var aliceHeight = parseInt(aliceRecupCSS.height.replace("px", ""));
var demialiceWidth = aliceWidth/2;
var aliceTop; var aliceBottom; var aliceDroit; var aliceGauche;
// console.log(aliceDroit);
// ## GESTION DU MISSILE
var missilePresent = false;
var cibleMissile;
var missileRecupCSS;
var missile;
var positionMissileX;
var positionMissileY;
var topMissile;
var hauteurMissile;
var bottomMissile;
var largeurMissile;
var droitMissile;
var gaucheMissile;
// ## GESTION D UN ENNEMI
var tablMonstre = [];
var nbreMonstre = 2;
var enHaut;
var agauche;
var hauteur;
var largeur;
var vitesse;
var vitesseAlea;
var nouvellePositionEnnemi;
var cibleEnnemi;var ennemiRecupCSS;
var topEnnemi;var leftEnnemi;var hauteurEnnemi;var largeurEnnemi;
var droitEnnemi; var bottomEnnemi;
// ## GENERATION DES MONSTRES ######################################
for(var i=0; i<nbreMonstre; i++){
    //on fabrique un ennemi, on defini ces proprietes
    ennemi = document.createElement('div');
    ennemi.setAttribute('class', 'ennemiFabrique');
    ennemi.setAttribute('id', 'monstre'+i);
    ennemi.style.top = -95 + 'px' ;
    positionEnnemiAleaX = Math.floor(Math.random() * 600) + 100;
    ennemi.style.left = positionEnnemiAleaX + 'px' ;
    //on ajoute l'ennemi dans le DOM
    cible.appendChild(ennemi);
    //on recupere l'ennemi en question et ces proprietes CSS
    cibleEnnemi= document.querySelector('#monstre'+i);
    ennemiRecupCSS = getComputedStyle(cibleEnnemi);
    //stock les donnees propres a chaque ennemi dans le tableau -> initialisation du tableau
    topEnnemi = parseInt(ennemiRecupCSS.top.replace("px", ""));
    leftEnnemi = parseInt(ennemiRecupCSS.left.replace("px", ""));
    hauteurEnnemi = parseInt(ennemiRecupCSS.height.replace("px", ""));
    largeurEnnemi = parseInt(ennemiRecupCSS.width.replace("px", ""));
    vitesseAlea =  Math.floor(Math.random())+1; // pas entre 1 et 2
    tablMonstre[i]= {   'enHaut':topEnnemi,
                        'agauche':leftEnnemi,
                        'hauteur': hauteurEnnemi,
                        'largeur':largeurEnnemi,
                        'pasDeplacement':vitesseAlea};
}
//## GESTION DES COLLISIONS
//## GESTION DU TEMPS
var tempsDebutJeux;
var tempsFinJeux;
//## LANCEMENT ET ARRET DU JEU
var partieEnCours = true;
// var demarrer = document.querySelector('input[type=button]');
// demarrer.addEventListener('click', function(){
//     loop();
    // ## TIMESTAMP ####################################
    //tempsDebutJeux = Date.now();
// });
//## COMPTEUR DE POINTS
var compteurScore = 0;
var pointMonstre = 10;
var dureeJeux;
// ## FONCTION LOOP ################################################
function loop(){


    //## POSITION DE LA ZONE DE JEUX A CHAQUE MOMENT ->REACTUALISEE
    positionMini = parseInt(zoneDeJeuxRecupCSS.left.replace("px", ""));
    tailleZoneDeJeux = parseInt(zoneDeJeuxRecupCSS.width.replace("px", ""));
    positionMaxi = parseInt(positionMini + tailleZoneDeJeux - aliceWidth);
    deplacement_bg();
    deplacement_bordure();
    gestion_Clavier();
    deplacement_Alice();
    missile_F();
    ennemi_F();
    collision();
    //# REFRESH
    // if(partieEnCours){
        requestAnimationFrame(loop);
    // }

}
//## FONCTIONS JEUX ################################################
function deplacement_bg(){
    //defini le pas de defilement
    bg_Y -= 1;
    //on replace le bg
    if(bg_Y >= 600) {bg_Y = 0;}
    //on redessinne
    zoneDeJeux.style.backgroundPositionY = bg_Y + 'px';
}
function deplacement_bordure(){
    //on definie le pas
    bordure_Y -= 2;
    //on replace l'image
    if(bordure_Y >= 600) {bordure_Y = 0;}
    //on redessinne les 2 bordures
    bordureG.style.backgroundPositionY = bordure_Y + 'px';
    bordureD.style.backgroundPositionY = bordure_Y + 'px';
}
function gestion_Clavier() {
  // Détection de touche enfoncée
  document.addEventListener('keydown', function(event) {
        touche[event.which] = true;
  });
  // détection de touche non enfoncée
  document.addEventListener('keyup', function(event) {
    touche[event.which] = false;
  });
}
function deplacement_Alice(){
    // Gestion des touches du clavier -> ondefinie le pas
    if (touche[37]===true && posAlice > positionMini) {
        posAlice-=5;
    }
    if (touche[39]===true && posAlice < positionMaxi) {
        posAlice+=5;
    }
    //on redessine
    alice.style.left = posAlice + 'px';
}
function missile_F(){
    //detection de la touche espace et creation d'un missile
    if ((touche[32]===true) && (!missilePresent)) {
        missilePresent = true;
        positionMissileX = posAlice + demialiceWidth -10;
        missile = document.createElement('div');
        missile.setAttribute('class', 'missileTire');
        missile.style.top = 100 + 'px';
        missile.style.left = positionMissileX + 'px';
        cible.appendChild(missile);
    }
    //deplacement du missile et destruction
    if(missilePresent){
        //deplacement
        cibleMissile = document.querySelector('.missileTire');
        missileRecupCSS = getComputedStyle(cibleMissile);
        positionMissileY = parseInt(missileRecupCSS.top.replace("px", ""));
        positionMissileY += 2;
        missile.style.top = positionMissileY + 'px';
        //destruction mmissile en bas
        if(positionMissileY >= 600){
            cible.removeChild(missile);
            missilePresent = false;
        }
    }

}
function ennemi_F(){
    for(var j=0; j<tablMonstre.length; j++){
        //recup valeur ennemi
        cibleEnnemi= document.querySelector('#monstre'+j);
        ennemiRecupCSS = getComputedStyle(cibleEnnemi);
        topEnnemi = parseInt(ennemiRecupCSS.top.replace("px", ""));
        topEnnemi += -2;
        //deplacement
        cibleEnnemi.style.top = topEnnemi + 'px';
        //affichage si sort du haut de la zone de jeu
        if(topEnnemi < -100){
            nouvellePositionEnnemi = Math.floor(Math.random()*700)+100;
            cibleEnnemi.style.left = nouvellePositionEnnemi + 'px';
            nouvellePositionEnnemiTop = Math.floor(Math.random()*800)+600;
            cibleEnnemi.style.top = nouvellePositionEnnemiTop + 'px';
            topEnnemi += -(Math.floor(Math.random()*100)+1);
            tablMonstre[j]= {'enHaut': topEnnemi};
        }
    }

}
function collision(){
    for(var k=0; k<tablMonstre.length ; k++){
        //recup valeur alice
        aliceTop =parseInt(aliceRecupCSS.top.replace("px", ""));
        aliceBottom = aliceTop + aliceHeight;
        aliceGauche = parseInt(aliceRecupCSS.left.replace("px", ""));
        aliceDroit = aliceGauche + aliceWidth;
        //recup valeur ennemi
        cibleEnnemi= document.querySelector('#monstre'+k);
        ennemiRecupCSS = getComputedStyle(cibleEnnemi);
        topEnnemi = parseInt(ennemiRecupCSS.top.replace("px", ""));
        leftEnnemi = parseInt(ennemiRecupCSS.left.replace("px",""));
        largeurEnnemi = parseInt(ennemiRecupCSS.width.replace("px",""));
        droitEnnemi = leftEnnemi + largeurEnnemi;
        hauteurEnnemi = parseInt(ennemiRecupCSS.height.replace("px",""));
        bottomEnnemi = topEnnemi + hauteurEnnemi;
        //collision alice // ennemi
        if((topEnnemi < aliceBottom) && (topEnnemi > aliceTop)){
            if((droitEnnemi>aliceGauche) && (droitEnnemi<aliceDroit) ||
                (leftEnnemi>aliceGauche) && (leftEnnemi<aliceDroit)){
                    youLoose();
            }
        }
        if((bottomEnnemi < aliceBottom) && (bottomEnnemi > aliceTop)){
            if((droitEnnemi>aliceGauche) && (droitEnnemi<aliceDroit) ||
                (leftEnnemi>aliceGauche) && (leftEnnemi<aliceDroit)){
                    youLoose();
            }
        }
        //test existance missile
        cibleMissile = document.querySelector('.missileTire');
        if(cibleMissile){
            //recup valeur missile
            missileRecupCSS = getComputedStyle(cibleMissile);
            topMissile = parseInt(missileRecupCSS.top.replace("px", ""));
            hauteurMissile = parseInt(missileRecupCSS.height.replace("px", ""));
            bottomMissile = topMissile + hauteurMissile;
            largeurMissile = parseInt(missileRecupCSS.width.replace("px", ""));
            gaucheMissile = parseInt(missileRecupCSS.left.replace("px", ""));
            droitMissile = gaucheMissile + largeurMissile;
            //collision
            if((topEnnemi < bottomMissile) && (topEnnemi > topMissile)){
                if((gaucheMissile > leftEnnemi) && (gaucheMissile < droitEnnemi)){
                    //replacement ennemi
                    cibleEnnemi= document.querySelector('#monstre'+k);
                    ennemiRecupCSS = getComputedStyle(cibleEnnemi);
                    nouvellePositionEnnemi = Math.floor(Math.random()*700)+100;
                    cibleEnnemi.style.left = nouvellePositionEnnemi + 'px';
                    nouvellePositionEnnemiTop = Math.floor(Math.random()*800)+600;
                    cibleEnnemi.style.top = nouvellePositionEnnemiTop + 'px';
                    //effacement missile
                    cible.removeChild(missile);
                    missilePresent = false;
                    compteurScore += pointMonstre;
                    //augmentation du nbre de monstre en fct du score
                    //faire un modulo par 100, reste =0
                    if(compteurScore === 50 || compteurScore === 70 || compteurScore || 100){
                        //nbreMonstre
                        //console.log(nbreMonstre);
                    }

                }
            }
        //fin test existance missile
        }
    }
}
function youLoose(){
    console.log("you loooose");
    //tempsFinJeux = Date.now();
    partieEnCours = false;
    //console.log(dureeJeux);
    //console.log(compteurScore);
    //dureeJeux = tempsFinJeux - tempsDebutJeux;
    //console.log(dureeJeux);
}

loop();
// ### FIN DU DOMContentLoaded ############################
});
