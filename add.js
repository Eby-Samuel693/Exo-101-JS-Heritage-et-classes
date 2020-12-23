class Vehicule {
    constructor(couleur,roues,marque,demarre,arreter) {
        this.couleur = "red";
        this.roues = 4;
        this.marque = "cacahuete";
        this.demarre = "elle demarre bien";
        this.arreter = "elle s'arrete aussi";
    }
    demarre() {
        console.log(demarre);
    };

    arreter(param1, param2) {
        console.log("elle s'arrete aussi" + param1 + param2);
    }
}

console.log(Vehicule);

//
// let Velo = {
//     couleur : "blue",
//     roues: 2,
//     monter: function (){
//         console.log("je monte sur mon velo blue");
//     }
// }
//
// Vehicule.prototype.present = function(){
//     return "couleur"+ this.couleur +"roues :"+this.roues+ "marque"+ this.marque
//         +"demarre"+ this.demarre()+"arret :"+this.arreter();
// }
//
// Vehicule.prototype.couleur= "red";
// Vehicule.prototype.roues = 4;
// Vehicule.prototype.marque = "cacahuete";
//
// let Voiture = new Vehicule();
// Voiture.assurance = "maaf";
// Voiture.proprietaire ="samuel";
// Voiture.passerAuCarWash = function () {
//     console.log("oui ...")
// }
// console.log(Voiture);
// console.log(Vehicule);