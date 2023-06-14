let recuperoStorage = localStorage.getItem("MiPlaylist");
let cancionesRecuperadas = JSON.parse(recuperoStorage);

let cancionesPlaylist = document.querySelector("Miplaylist");


//let urlPlaylist = `https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/track/${cancionesPlaylist}`