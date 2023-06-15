let recuperoStorage = localStorage.getItem("MiPlaylist");
let cancionesRecuperadas = JSON.parse(recuperoStorage);

let imagenPlaylist = document.querySelector('.playlist-favoritos');

let tituloPlaylist = document.querySelector('.tituloPlaylist');

if(cancionesRecuperadas.length == 0){
    tituloPlaylist.innerHTML = 'No agregaste ninguna cacion a tu playlist'
} else{

    let urlRecuperados = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionesRecuperadas[i]}`

    for(let i=0 ; i < cancionesRecuperadas.length; i++){
        fetch(urlRecuperados)
        .then(function(response){
            return response.json()
        })
        .then(function(track){
            imagenPlaylist.innerHTML +=  ` <a href="detalles-canciones.html?id=${track.id}"><img src=${track.album.cover_medium}`
        })
        .catch(function(error){
            console.log(error);
        })}}