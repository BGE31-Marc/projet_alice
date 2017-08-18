document.addEventListener('DOMContentLoaded', function() {
// ## DECLARATION DES CONSTANTES####################################

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
var aliceHeight; // alice.style.height
//demi alice
var demialiceWidth = aliceWidth/2;



// ## GESTION DU MISSILE
var missilePresent = false;
var cibleMissile;
var missileRecupCSS;
var missile;
var positionMissileX;
var positionMissileY;
// ## GESTION D UN ENNEMI
// var cibleEnnemi;
// var ennemiRecupCSS;
var ennemi;
var positionEnnemiX;
var positionEnnemiY;
var positionEnnemiAleaX;
var ennemiWidth; // ennemi.style.width
var ennemiHeight; // ennemi.style.height









var tablMonstre = [];
var nbreMonstre = 3;
var enHaut;
var agauche;
var hauteur;
var largeur;
var vitesse;
var vitesseAlea;



for(var i=0; i<nbreMonstre; i++){
    //on fabrique un ennemi, on defini ces proprietes
    ennemi = document.createElement('div');
    ennemi.setAttribute('class', 'ennemiFabrique');
    ennemi.setAttribute('id', 'monstre'+i);
    ennemi.style.top = 500 + 'px' ;
    positionEnnemiAleaX = Math.floor(Math.random() * 600) + 100;
    ennemi.style.left = positionEnnemiAleaX + 'px' ;
    //on ajoute l'ennemi dans le DOM
    cible.appendChild(ennemi);
    //on recupere l'ennemi en question et ces proprietes CSS
    var cibleEnnemi= document.querySelector('#monstre'+i);
    var ennemiRecupCSS = getComputedStyle(cibleEnnemi);
    //stock les donnees propres a chaque ennemi dans le tableau -> initialisation du tableau
    var topEnnemi = parseInt(ennemiRecupCSS.top.replace("px", ""));
    var leftEnnemi = parseInt(ennemiRecupCSS.left.replace("px", ""));
    var hauteurEnnemi = parseInt(ennemiRecupCSS.height.replace("px", ""));
    var largeurEnnemi = parseInt(ennemiRecupCSS.width.replace("px", ""));
    //vitesseAlea =  Math.floor(Math.random() 1); // pas entre 1 et 2
    tablMonstre[i]= {   'enHaut':topEnnemi,
                        'agauche':leftEnnemi,
                        'hauteur': hauteurEnnemi,
                        'largeur':largeurEnnemi};
    // console.log("ligne 64 | " + tablMonstre[i].vitesse);
}


//## GESTION DES COLLISIONS

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
    for(var j=0; j<tablMonstre.length; j++){
        // topEnnemi = tablMonstre[j].enHaut;
        // // console.log( i + " | 120 | " + topEnnemi);
        // topEnnemi += -1 ;
        // // console.log( i + " | 122 | " + topEnnemi);
        // tablMonstre[j]= {'enHaut': topEnnemi};
        // console.log( j + " | 124 | " + tablMonstre[j].enHaut);
        cibleEnnemi= document.querySelector('#monstre'+j);
        // console.log("ligne 179 | " + typeof{cibleEnnemi});
        ennemiRecupCSS = getComputedStyle(cibleEnnemi);
        topEnnemi = parseInt(ennemiRecupCSS.top.replace("px", ""));
        topEnnemi += -1 ;
        tablMonstre[j]= {'enHaut': topEnnemi};
        cibleEnnemi.style.top = topEnnemi + 'px';
        if(topEnnemi < 100){
            cibleEnnemi.style.top = 400 + 'px';
        }
    }
    // alert("l 127 ");
    //# REFRESH
    requestAnimationFrame(loop);
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
    //on redessinne les 2 bordure
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
    //on redessinne
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
    //deplacement
        // cibleEnnemi= document.querySelector('#monstre'+i);
        // console.log("ligne 179 | " + typeof{cibleEnnemi});
        // ennemiRecupCSS = getComputedStyle(cibleEnnemi);
        // positionEnnemiY = parseInt(ennemiRecupCSS.top.replace("px", ""));
        // positionEnnemiY -= 3;
        // ennemi.style.top = positionEnnemiY + 'px';
        //tue si ennemi arrive en haut
        // if(positionEnnemiY <= -100){
        //     cible.removeChild(ennemi);
        //     ennemiVivant = false;
        //     nbreMonstre --;
        // }
    //}

}
function collision(){
    //collision entre alice et ennemi : alice  perdu
        //entre cote G alice et cote D ennemi
        //entre cote G ennemi et cote G ennemi
        //entre bas alice et haut ennemi
    //collision entre bas missile et haut ennemi
}

loop();
// ### FIN DU DOMContentLoaded ############################
});
