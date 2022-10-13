function generationCartes(){
    const COULEURS = ["♦", "♣", "♥", "♠"];
    const VALEURS = ["A"];
    const myArray2 = ["V", "D", "R"];
    for(var i=2; i < 11; i++){
        VALEURS.push(i);
    }
    VALEURS.push.apply(VALEURS, myArray2);
    const cartes = [];0
    for(var i=0; i< COULEURS.length; i++){
        for(var n=0; n < VALEURS.length; n++){
            cartes.push(COULEURS[i]+VALEURS[n]);
        }    
    }
    return cartes}

function  afficherCartes(carte){
    let resultat = document.getElementById("demo");
    resultat.innerHTML = "";
    for (let i = 0; i < 4; i++){
        resultat.innerHTML += "<div>"
        for (let j=0; j<13; j++){
            c = carte[13*i+j]
            resultat.innerHTML += c 
            }
        resultat.innerHTML += "</div>";}}

let button = document.getElementById("brassage");
let carte = generationCartes();

var brassage = function(){
    let resultat = document.getElementById("demo");
    const moitie_deck = carte.length / 2;
    const nouveau_paquet = [];
    for (var i = 0; i < moitie_deck; i++){
        nouveau_paquet.push(carte[i]);
        nouveau_paquet.push(carte[i+moitie_deck]); }   
    carte = nouveau_paquet;
    afficherCartes(carte);}  
    
button.addEventListener('click', brassage);

let carte1 = generationCartes();
console.log(carte1);
afficherCartes(carte1);       

