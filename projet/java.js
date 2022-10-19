// clculate imc
// inspirer d'une chaine youtub indienne.
button = document.getElementById("imc");

button.addEventListener("click", ()=>{
    let taille = parseInt(document.getElementById("taille").value);
    let poids = parseInt(document.getElementById("poids").value);
    let resultat = document.getElementById("output");
    let result_taille = false, result_poids = false;
if(taille === "" || isNaN(taille) || (taille <= 0)){
    document.getElementById("taille_erreur").innerHTML = "taille incorrect, veuillez donner une taille en cm";
} else{document.getElementById("taille_erreur").innerHTML = "";
result_taille = true;
}
if(poids === "" || isNaN(poids) || (poids <= 0)){
    document.getElementById("poids_erreur").innerHTML = "poids incorrect, veuillez donner un poids en kg";
} else{document.getElementById("poids_erreur").innerHTML = "";
result_poids = true;
}
if(result_poids && result_taille){
    const imc = (poids/ ((taille * taille)/10000)).toFixed(2);
    if(imc < 18.5){
        resultat.innerHTML = "Maigreur:" +""+ imc;
    }else if(imc > 18.5 && imc <= 25){
        resultat.innerHTML = "Normal:" +""+ imc;
    }else if(imc > 25 && imc <= 30){
        resultat.innerHTML = "En surpoids" +""+ imc;
    } 
    else{
        resultat.innerHTML = "Obésité:" +""+ imc;
    }
   
 }});