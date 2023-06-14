let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

fetch(urlAlbum)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let album = document.querySelector (".detalles-album")
    let albumHTML = ""

        albumHTML += `<article class= "detalles-disco detalles-article-informacion">
        <img src= ${data.cover_big}>
        <ul class="detalles-generos" >
        <li><h2> Album: ${data.title}</h2></li>
        <li><h3> Artista: <a href="detalles-artistas.html?id=${data.artist.id}">${data.artist.name}</a></h3></li>
        <li><h3> Genero: <a href="detail-genres.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a></h3></li>
        <li><h3> Fecha de publicación: ${data.release_date}</h3></li>
        </ul>`

    album.innerHTML = albumHTML;

    let albumTracks = document.querySelector(".detalles-album");
    let idTracks = data.artist.id
    let urlTracklist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${idTracks}/image`

    fetch(urlTracklist)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
    let arrayTracklist = data.data;
    let trackListHTML = ""

        album.innerHTML = trackListHTML
    })
    .catch(function(error){
        console.log("Error: " + error);
    })

})
.catch(function(error){
    console.log("Error: " + error);
})