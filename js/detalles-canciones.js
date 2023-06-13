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

    let cancion = document.querySelector (".detalles-cancion")
    let cancionHTML = ""

        cancionHTML += `<article class= "detalles-track detalles-article-informacion">
        <img src= ${data.album.cover_big}>
        <ul class="detalles-generos" >
        <li><h2> Cancion: ${data.title}</h2></li>
        <li><h3> Artista: ${data.artist.name}</h3></li>
        <li><h3> Album: ${data.album.title}</h3></li>
        </ul>`
    cancion.innerHTML = cancionHTML;
})
//La posibilidad de agregar la canción a “mi playlist”.
//El link para ver la playlist personal.

.catch(function(error){
    console.log("Error: " + error);
})

//<button class="" >Agregar a Mi Playlist</button>
//<a href="file:///Users/markel/Desktop/Proyecto_Integrador/playlist.html">Ver Playlist Personal</a>