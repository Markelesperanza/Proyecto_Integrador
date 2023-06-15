let recuperoStorage = localStorage.getItem("MiPlaylist");
let cancionesRecuperadas = JSON.parse(recuperoStorage);

let imgplaylist = document.querySelector(".canciones-de-la-playlist");

let tituloplaylist = document.querySelector(".playlist-titulo");

if(cancionesRecuperadas.length == 0){
  tituloplaylist.innerHTML = "Tu Playlist esta vacía"

}else{
  for(let i=0 ; i < cancionesRecuperadas.length; i++){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionesRecuperadas[i]}`)
    
    .then(function(response){
    return response.json()

    })
    .then(function(track){
      imgplaylist.innerHTML += `<a href="detalles-canciones.html?id=${track.id}">
      <img src="${track.album.cover}">
      <h3>${track.title}</h3>
      </a>`
    

    })
    .catch(function(error){
      console.log("Error: " + error);
    })
  }
}