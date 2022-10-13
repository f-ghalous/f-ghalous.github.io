function generationCartes(){
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

function afficherCartes(carte){
    //liste d'images ici 
    let resultat = document.getElementById("demo");
    resultat.innerHTML = "";
    for (let i = 0; i < 4; i++){
        resultat.innerHTML += "<div>"
        for (let j=0; j<13; j++){
            resultat.innerHTML += "<img src="+carte[13*i+j]+"> </img>"  
            //fait attention carte[] ne retourne pâs la source d'un image
        }
        resultat.innerHTML += "</div>"
    }
}
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
    //resultat.innerHTML = nouveau_paquet;}
    

button.addEventListener('click', brassage);

//let buttonEtat = document.getElementById("etat");
//buttonEtat.addEventListener('click', afficherCartes(carte));
/*var etat = function(){
    let resultat1 = document.getElementById("afficher");
        resultat1.innerHTML = carte;}*/

//buttonEtat.addEventListener("click",etat);


let afficherCartes = function(){
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

let buttonEtat = document.getElementById("etat");
buttonEtat.addEventListener('click', afficherCartes);        
