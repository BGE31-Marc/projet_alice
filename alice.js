document.addEventListener('DOMContentLoaded', function() {
// ## DECLARATION DES CONSTANTES####################################

// ## DECLARATION DES VARIABLES#####################################
var zoneDeJeux = document.querySelector('#zoneDeJeux');
var bordureG = document.querySelector('#bordureG');
var bordureD = document.querySelector('#bordureD');
var alice = document.querySelector('#alice');
var cible = document.querySelector('.jeuxALICE');
var aliceRecupCSS = getComputedStyle(alice);
//largeur de alice
var aliceWidth = parseInt(aliceRecupCSS.width.replace("px", ""));
//demi alice
var demialiceWidth = aliceWidth/2;
// ## taille de le zone de jeux
var zoneDeJeuxRecupCSS = getComputedStyle(zoneDeJeux);
//## DEPLACEMENT DU DECORS##
var bg_Y = 0;
var bordure_Y = 0;
//## DEPLACEMENT ALICE ##
var pasAlice;
let posAlice = aliceRecupCSS.left.replace("px", "");
let touche = [];



// ## FONCTION LOOP ################################################
function loop(){

    //## POSITION DE LA ZONE DE JEUX A CHAQUE MOMENT ->REACTUALISEE
    var positionMini = parseInt(zoneDeJeuxRecupCSS.left.replace("px", ""));
    var tailleZoneDeJeux = parseInt(zoneDeJeuxRecupCSS.width.replace("px", ""));
    var positionMaxi = parseInt(positionMini + tailleZoneDeJeux - aliceWidth);


deplacement_bg();
deplacement_bordure();
//pascal detection touches-> attribution du pas
    // Gestion des touches du clavier
    if (touche[37]===true && posAlice > positionMini) {
      posAlice-=5;
      alice.style.left = posAlice + 'px';
    }
    if (touche[39]===true && posAlice < positionMaxi) {
      posAlice+=5;
      alice.style.left = posAlice + 'px';
    }
    if (touche[32]===true) {
      console.log('touche 32');
      //## CREATION MISSILE
      var positionMissile = posAlice + demialiceWidth;
      var missile = document.createElement('div');
      missile.setAttribute('class', 'missileTire');
      missile.style.top = 100 + 'px';
      missile.style.left = positionMissile + 'px';
      cible.appendChild(missile);
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
