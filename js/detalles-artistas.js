
let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

fetch(urlArtista)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let artista = document.querySelector (".detalles-artista")
    let artistaHTML = ""

        artistaHTML += `<article class= "detalles-cantante detalles-article-informacion">
        <img src= ${data.picture_big}>
        <ul class="detalles-generos" >
        <li><h2> Artista: ${data.name}</h2></li>
        </ul>`

    artista.innerHTML = artistaHTML;
})
//Lista de máximo 5 albums.
.catch(function(error){
    console.log("Error: " + error);
})