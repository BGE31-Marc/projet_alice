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
// ## GESTION DU MISSILE
let missilePresent = false;

var cibleMissile;
var missileRecupCSS;
var positionMissileX;
var positionMissileY;
// ## GESTION D UN ENNEMI
let ennemiVivant = false;

var ennemi;
var cibleEnnemi;
var ennemiRecupCSS;
var positionEnnemiX;
var positionEnnemiY;
var positionEnnemiAleaX;

// ## FONCTION LOOP ################################################
function loop(){

    //## POSITION DE LA ZONE DE JEUX A CHAQUE MOMENT ->REACTUALISEE
    positionMini = parseInt(zoneDeJeuxRecupCSS.left.replace("px", ""));
    tailleZoneDeJeux = parseInt(zoneDeJeuxRecupCSS.width.replace("px", ""));
    positionMaxi = parseInt(positionMini + tailleZoneDeJeux - aliceWidth);


deplacement_bg();
deplacement_bordure();
gestionClavier();
deplacementAlice();
missileF();
ennemiF();

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
function deplacementAlice(){
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
}
function missileF(){
    if ((touche[32]===true) && (!missilePresent)) {
        // console.log('touche 32');
        missilePresent = true;
          //## CREATION MISSILE
        positionMissileX = posAlice + demialiceWidth -10;
        missile = document.createElement('div');
        missile.setAttribute('class', 'missileTire');
        missile.style.top = 100 + 'px';
        missile.style.left = positionMissileX + 'px';
        cible.appendChild(missile);
    }
    //deplacement du missile
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
            // console.log("atteint 400 px");
        }
    }
}
function ennemiF(){
    if(!ennemiVivant){
        //fabrique un ennemi, passe vivant a true
        //console.log('touche 139');
        ennemiVivant = true;
        ennemi = document.createElement('div');
        ennemi.setAttribute('class', 'ennemiFabrique');
        ennemi.style.top = 500 + 'px' ;
        //la position en Y aleatoire, 100 correspond a la largeur de la div
        //plus tard, on affectera une var monstre1; var monstre2; chaque monstre aura une width definie
        //en fnction du monstre genere, la largeur sera connue; propriete des monstres ->tab??
        positionEnnemiAleaX = Math.floor(Math.random() * (800-100));
        ennemi.style.left = positionEnnemiAleaX + 'px' ;
        cible.appendChild(ennemi);
        console.log("ligne 144");
    }
    //deplacement
    if(ennemiVivant){
        cibleEnnemi= document.querySelector('.ennemiFabrique');
        ennemiRecupCSS = getComputedStyle(cibleEnnemi);
        positionEnnemiY = parseInt(ennemiRecupCSS.top.replace("px", ""));
        // console.log("ligne 156" + positionEnnemiY);
        positionEnnemiY -= 3;
        ennemi.style.top = positionEnnemiY + 'px';
    }
    //tue si ennemi arrive en haut
    if(positionEnnemiY <= -100){
        cible.removeChild(ennemi);
        ennemiVivant = false;
        // console.log("atteint 400 px");
    }

}
//let ennemiVivant = false;

// var ennemi;
// var cibleEnnemi;
// var ennemiRecupCSS;
// var positionEnnemiX;
// var positionEnnemiY;


loop();
// ### FIN DU DOMContentLoaded ############################
});
