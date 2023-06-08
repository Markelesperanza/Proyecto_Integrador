let urlArtistas = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"

fetch(urlArtistas)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log();

    let artistas = document.querySelector (".detalles-canción")
    let arrayAlbum = data.data
    let albumHTML = ""

    for(let i = 0; i<1; i++){
        albumHTML += `<article class= "detalles-track">
        <img src= ${arrayAlbum[i].artist.picture_big}>
        <h2> ${arrayAlbum[i].title}</h2>
        <h3> ${arrayAlbum[i].artist.name}</h3>`
    }
    artistas.innerHTML = albumHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})