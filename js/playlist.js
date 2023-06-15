let recuperoStorage = localStorage.getItem("MiPlaylist");
let cancionesRecuperadas = JSON.parse(recuperoStorage);

let imagenPlaylist = document.querySelector('.playlist-favoritos');

let tituloPlaylist = document.querySelector('.tituloPlaylist');

if(cancionesRecuperadas.length == 0){
    tituloPlaylist.innerHTML = 'No agregaste ninguna canción a tu playlist'
} else{

    for(let i=0 ; i < cancionesRecuperadas.length; i++){

        let urlRecuperados = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionesRecuperadas[i]}`

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