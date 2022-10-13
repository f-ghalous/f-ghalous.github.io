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

let button = document.getElementById("brassage");
let carte = generationCartes();
//let affiche = document.getElementById("demo");
//affiche.innerHTML = carte;
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

function  afficherCartes(carte){
    //liste d'images ici 
    let resultat = document.getElementById("demo");
    resultat.innerHTML = "";
    for (let i = 0; i < 4; i++){
        //resultat.innerHTML += "<div>"
        for (let j=0; j<13; j++){
            c = carte[i+j]
            resultat.innerHTML += c //"<img src="+carte[13*i+j]+"> </img>"  
            //fait attention carte[] ne retourne pâs la source d'un image
        }
        resultat.innerHTML += "</div>";}}

let carte1 = generationCartes();
afficherCartes(carte1);       
/*let buttonEtat = document.getElementById("etat");
buttonEtat.addEventListener('click', afficherCartes);   */     
