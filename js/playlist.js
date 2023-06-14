let cancionesPlaylist = document.querySelector(".canciones-playlist");

let recuperoStorage = localStorage.getItem("MiPlaylist");
let cancionesRecuperadas = JSON.parse(recuperoStorage);

let urlLocalStorage = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${recuperoStorage}`

let localStorageHTML = ""
for(let i=0; i<cancionesRecuperadas.length; i++){
    localStorageHTML += `<li>${cancionesRecuperadas[i].recuperoStorage}</li>`
}