document.addEventListener('DOMContentLoaded', function() {
// ## DECLARATION DES CONSTANTES####################################

// ## DECLARATION DES VARIABLES#####################################
var zoneDeJeux = document.querySelector('#zoneDeJeux');
var bordureG = document.querySelector('#bordureG');
var bordureD = document.querySelector('#bordureD');
var alice = document.querySelector('#alice');
var cible = document.querySelector('.jeuxALICE');
var aliceRecupCSS = getComputedStyle(alice);
var missile;
//largeur de alice
var aliceWidth = parseInt(aliceRecupCSS.width.replace("px", ""));
//demi alice
var demialiceWidth = aliceWidth/2;
// ## taille de le zone de jeux
var zoneDeJeuxRecupCSS = getComputedStyle(zoneDeJeux);
var positionMini;
var tailleZoneDeJeux;
var positionMaxi;
//## DEPLACEMENT DU DECORS##
var bg_Y = 0;
var bordure_Y = 0;
//## DEPLACEMENT ALICE ##
var pasAlice;
let posAlice = parseInt(aliceRecupCSS.left.replace("px", ""));
let touche = [];

let missilePresent = false;
var positionMissile;
var cibleMissile;
var missileRecupCSS;
var positionMissileY;



// ## FONCTION LOOP ################################################
function loop(){

    //## POSITION DE LA ZONE DE JEUX A CHAQUE MOMENT ->REACTUALISEE
    positionMini = parseInt(zoneDeJeuxRecupCSS.left.replace("px", ""));
    tailleZoneDeJeux = parseInt(zoneDeJeuxRecupCSS.width.replace("px", ""));
    positionMaxi = parseInt(positionMini + tailleZoneDeJeux - aliceWidth);


deplacement_bg();
deplacement_bordure();
//pascal detection touches-> attribution du pas
    // Gestion des touches du clavier
    if (touche[37]===true && posAlice > positionMini) {
        // console.log(posAlice+' '+positionMini);
        posAlice-=5;
        alice.style.left = posAlice + 'px';
    }
    if (touche[39]===true && posAlice < positionMaxi) {
        // console.log(posAlice+' '+positionMaxi);
        posAlice+=5;
        alice.style.left = posAlice + 'px';
    }


    if ((touche[32]===true) && (!missilePresent)) {
        console.log('touche 32');
        missilePresent = true;
          //## CREATION MISSILE
        positionMissile = posAlice + demialiceWidth -10;
        missile = document.createElement('div');
        missile.setAttribute('class', 'missileTire');
        missile.style.top = 100 + 'px';
        missile.style.left = positionMissile + 'px';
        cible.appendChild(missile);
    }


if(missilePresent){
    cibleMissile = document.querySelector('.missileTire');
    missileRecupCSS = getComputedStyle(cibleMissile);
    positionMissileY = parseInt(missileRecupCSS.top.replace("px", ""));
    positionMissileY += 2;
    missile.style.top = positionMissileY + 'px';

    if(positionMissileY >= 600){
        cible.removeChild(missile);
        missilePresent = false;
        // console.log("atteint 400 px");
    }
}


gestionClavier();
//# REFRESH
requestAnimationFrame(loop);
}













//## FONCTIONS JEUX ################################################
function deplacement_bg(){
    bg_Y -= 1;
    if(bg_Y >= 600) {bg_Y = 0;}
        zoneDeJeux.style.backgroundPositionY = bg_Y + 'px';
}
function deplacement_bordure(){
    bordure_Y -= 2;
    if(bordure_Y >= 600) {bordure_Y = 0;}
        bordureG.style.backgroundPositionY = bordure_Y + 'px';
        bordureD.style.backgroundPositionY = bordure_Y + 'px';
}
function gestionClavier() {
  // Initialisation
  // Détection de touche enfoncée
  document.addEventListener('keydown', function(event) {
        touche[event.which] = true;
  });
  // détection de touche non enfoncée
  document.addEventListener('keyup', function(event) {
    touche[event.which] = false;
  });
}




loop();
// ### FIN DU DOMContentLoaded ############################
});
