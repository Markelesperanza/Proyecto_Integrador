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
        <img src= ${data.album.cover_big}>
        <h2> ${data.title}</h2>
        <h3> ${data.artist.name}</h3>`
    cancion.innerHTML = cancionHTML;
})
//La posibilidad de agregar la canción a “mi playlist”.
//El link para ver la playlist personal.

.catch(function(error){
    console.log("Error: " + error);
})