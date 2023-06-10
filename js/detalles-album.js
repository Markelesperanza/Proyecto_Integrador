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

        albumHTML += `<article class= "detalles-disco">
        <img src= ${data.cover_big}>
        <h2> ${data.title}</h2>
        <h3> ${data.artist.name}</h3>
        <h3>${data.genres.data[0].name}</h3>
        <h3>${data.release_date}</h3>`

    album.innerHTML = albumHTML;
})
//Lista de canciones/ temas del disco.
.catch(function(error){
    console.log("Error: " + error);
})