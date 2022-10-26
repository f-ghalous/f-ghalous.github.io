// calculer imc

function calculeImc(){
    let taille = parseFloat(document.getElementById("taille").value);
    let poids = parseFloat(document.getElementById("poids").value);
    let resultat = document.getElementById("output");
    const imc = (poids/ ((taille * taille)/10000)).toFixed(2);
    if(imc < 18.5){
        resultat.innerHTML = "Maigreur:" + " " + imc;}
    else if(imc >= 18.5 && imc < 25)
    {resultat.innerHTML = "Normal:" + " " + imc; }
    else if(imc >= 25 && imc < 30){
            resultat.innerHTML = "En surpoids" + " " + imc;}  
              else if(imc >= 30 && imc < 35){
                resultat.innerHTML = "Obésité modérè:" + " " + imc;}
                else if(imc >= 35 && imc < 40)
                { resultat.innerHTML = "Obésité sévère:" + " " + imc;}
                     else{
                        resultat.innerHTML = "Obésité morbide:" + " " + imc;
                     }
   
    };
 
button = document.getElementById("imc");
button.addEventListener('click', calculeImc);