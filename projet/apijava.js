const api = "https://www.breakingbadapi.com/api/characters"
async function get(){
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
   
    document.querySelector("#content1 h1").innerHTML = data[0].name;
    document.querySelector("#content1 h2").innerHTML = data[0].birthday;
    document.querySelector("#content1 img").src = data[0].img;
    document.querySelector("#content2 h1").innerHTML = data[1].name;
    document.querySelector("#content2 h2").innerHTML = data[1].birthday;
    document.querySelector("#content2 img").src = data[1].img;

    }
get();