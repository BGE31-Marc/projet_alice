class Etoile
{
    constructor(cible){
        this.cible = cible; // endroit ou on injecte l'etoile
        this.zoneJeu = 800;
        this.bordure = 100;
        this.maxHeight =this.zoneJeu - 2*(this.bordure); // 600px
        this.bordDroitZoneJeu = this.zoneJeu - this.bordure; //700px

        this.vitesseEtoile = -10;
    }

    createEtoile(){
        this.etoile = document.createElement('div');
        this.etoile.setAttribute('class', 'etoile');
        this.etoile.style.top = 800 + 'px' ;
        var positionEtoile = Math.floor(Math.random() * this.maxHeight) + this.bordure;
        this.etoile.style.left = positionEtoile + 'px' ;
        //on ajoute l'etoile dans le DOM
        this.cible.appendChild(this.etoile);
        //accede proprietes CSS
        this.cibleEtoile = document.querySelector('etoile');
        this.etoileRecupCSS = getComputedStyle(this.cibleEtoile);
    }
//deplacementEtoile
    // deplaceEtoile(){
    //     //recup la position ennemi
    //     this.topEtoile = parseInt(this.etoileRecupCSS.top.replace("px", ""));
    //     //deplacement
    //     this.topEtoile += this.vitesseEtoile;
    //     this.cibleEtoile.style.top = this.topEtoile + 'px';
    //     //affichage si sort du haut de la zone de jeu qui est a -150px en hauteur
    //     if(this.topEtoile < -150){
    //         this.nouvellePositionEtoile = Math.floor(Math.random()*this.bordDroitZoneJeu)+this.bordure;
    //         this.cibleEtoile.style.left = this.nouvellePositionEtoile + 'px';
    //         this.nouvellePositionEtoileTop = Math.floor(Math.random()*this.maxHeight)+this.zoneJeu ;
    //         this.cibleEtoile.style.top = this.nouvellePositionEtoileTop + 'px';
    //         this.topEtoile += -(Math.round(Math.random()*this.bordure) + 1 );
    //     }
    //
    //
    // }
//replacementEtoile


 //fin de la class
 }
