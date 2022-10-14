var images = ["image/1.gif", "image/2.gif","image/3.gif",
"image/4.gif","image/5.gif","image/6.gif","image/7.gif",
"image/8.gif","image/9.gif","image/10.gif","image/11.gif",
"image/12.gif","image/13.gif","image/14.gif","image/15.gif",
"image/16.gif","image/17.gif","image/18.gif","image/19.gif",
"image/20.gif","image/21.gif","image/22.gif","image/23.gif",
"image/24.gif","image/25.gif","image/26.gif","image/27.gif",
"image/28.gif","image/29.gif","image/30.gif","image/31.gif",
"image/32.gif","image/33.gif","image/34.gif","image/35.gif",
"image/36.gif","image/37.gif","image/38.gif","image/39.gif",
"image/40.gif","image/41.gif","image/42.gif","image/43.gif",
"image/44.gif","image/45.gif","image/46.gif","image/47.gif",
"image/48.gif","image/49.gif","image/50.gif", "image/51.gif",
 "image/52.gif"];

function  afficherCartes(){
    let resultat = document.getElementById("demo");
    resultat.innerHTML = "";
    for (let i = 0; i < 4; i++){
        resultat.innerHTML += "<div>"
        for (let j=0; j<13; j++){
            resultat.innerHTML += '<img src ="' + images[13*i+j] + '"/>';}
                    }
        resultat.innerHTML += "</div>";}       

let button = document.getElementById("brassage");
var brassage = function(){
    const moitieDeck = images.length / 2;
    const nouveauPaquet = [];
    for (var i = 0; i < moitieDeck; i++){
        nouveauPaquet.push(images[i]);
        nouveauPaquet.push(images[i+moitieDeck]); }   
        images = nouveauPaquet;
        afficherCartes();}  

button.addEventListener('click', brassage);

afficherCartes();       

