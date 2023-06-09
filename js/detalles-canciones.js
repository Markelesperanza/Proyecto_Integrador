let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlCancion = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(urlCancion)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let cancion = document.querySelector (".detalles-canción")
    let cancionHTML = ""

        cancionHTML += `<article class= "detalles-track">
        <img src= ${data.name}>
        <h2> ${data.name}</h2>
        <h3> ${data.name}</h3>`
    cancion.innerHTML = cancionHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})