function generation_cartes(){
    const COULEURS = ["♦", "♣", "♥", "♠"];
    const VALEURS = ["A"];
    const myArray2 = ["V", "D", "R"];
    for(var i=2; i < 11; i++){
        VALEURS.push(i);
    }
    VALEURS.push.apply(VALEURS, myArray2);
    const cartes = [];
    for(var i=0; i< COULEURS.length; i++){
        for(var n=0; n < VALEURS.length; n++){
            cartes.push(COULEURS[i]+VALEURS[n]);
        }    
    }
    return cartes}
let button = document.getElementById("brassage");
let carte = generation_cartes();
var brassage = function(){
    let resultat = document.getElementById("demo");
    const moitie_deck = carte.length / 2;
    const nouveau_paquet = [];
    for (var i = 0; i < moitie_deck; i++){
        nouveau_paquet.push(carte[i]);
        nouveau_paquet.push(carte[i+moitie_deck]); }   
    carte = nouveau_paquet;
    resultat.innerHTML = nouveau_paquet;}

button.addEventListener('click', brassage);
let buttonEtat = document.getElementById("etat");

var etat = function(){
    let resultat1 = document.getElementById("afficher");
        resultat1.innerHTML = carte;}

buttonEtat.addEventListener("click",etat);

let imgage= document.querySelectorAll("img");
for(i=0; i< image.length; i++){
    imgage[i].src;
}
