let urlCancion = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"

fetch(urlCancion)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log();

    let cancion = document.querySelector (".detalles-canción")
    let arrayCancion = data.data
    let cancionHTML = ""

    for(let i = 0; i<1; i++){
        cancionHTML += `<article class= "detalles-track">
        <img src= ${arrayCancion[i].artist.picture_big}>
        <h2> ${arrayCancion[i].title}</h2>
        <h3> ${arrayCancion[i].artist.name}</h3>`
    }
    cancion.innerHTML = cancionHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})