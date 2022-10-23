const api = "https://www.breakingbadapi.com/api/characters"
async function get(){
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
   
    document.querySelector("#content1 h1").innerHTML = data[1].name;
    document.querySelector("#content1 h2").innerHTML = data[1].occupation;
    document.querySelector("#content1 img").src = data[1].img;
    document.querySelector("#content2 h1").innerHTML = data[4].name;
    document.querySelector("#content2 h2").innerHTML = data[4].occupation;
    document.querySelector("#content2 img").src = data[4].img;
    document.querySelector("#content3 h1").innerHTML = data[27].name;
    document.querySelector("#content3 h2").innerHTML = data[27].occupation;
    document.querySelector("#content3 img").src = data[27].img;
    document.querySelector("#content4 h1").innerHTML = data[5].name;
    document.querySelector("#content4 h2").innerHTML = data[5].occupation;
    document.querySelector("#content4 img").src = data[5].img;
}
get();