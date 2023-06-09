let urlAlbum = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"

fetch(urlAlbum)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log();

    let album = document.querySelector (".detalles-album")
    let arrayAlbum = data.data
    let albumHTML = ""

    for(let i=0; i<1; i++){
        albumHTML += `<article class= "detalles-disco">
        <img src= ${arrayAlbum[i].cover_big}>
        <h2> ${arrayAlbum[i].title}</h2>
        <h3> ${arrayAlbum[i].artist.name}</h3>`
    }

    album.innerHTML = albumHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})
    