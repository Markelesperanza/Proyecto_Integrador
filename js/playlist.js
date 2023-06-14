let recuperoStorage = localStorage.getItem("MiPlaylist");
let cancionesRecuperadas = JSON.parse(recuperoStorage);

let cancionesPlaylist = document.querySelector(".canciones-playlist");
