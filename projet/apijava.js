const api = "https://www.breakingbadapi.com/api/characters"
async function get(){
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    data.map(function(actor){
        console.log(actor.name);  
    });
    document.querySelector("#content h1").innerHTML = data[0].name;
    document.querySelector("#content h2").innerHTML = data[0].birthday;
    document.querySelector("#content img").src = data[0].img
    document.querySelector("#actor").innerHTML = "papa"
    
}
get();