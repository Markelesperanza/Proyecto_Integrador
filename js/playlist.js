let linkFavs = localStorage.getItem("MiPlaylist");
let storageToArray = JSON.parse(linkFavs);

let tracksFavoritos = document.querySelector(".canciones-de-la-playlist");

let tituloPlaylist = document.querySelector(".playlist-titulo");

if(storageToArray.length == 0){
  tituloPlaylist.innerHTML = "Tu Playlist esta vacía"

}else{
  for(let i=0 ; i < storageToArray.length; i++){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${storageToArray[i]}`)
    
    .then(function(response){
    return response.json()

    })
    .then(function(track){ //track
      tracksFavoritos.innerHTML += `<a href="detalles-canciones.html?id=${track.id}">
      <img src="${track.album.cover_small}">
      <h3>${track.title}</h3>
      </a>`
    
    })
    .catch(function(error){
      console.log("Error: " + error);
    })
  }
}