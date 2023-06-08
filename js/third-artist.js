let urlArtista = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artist"

fetch(urlArtista)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log();

    let artista = document.querySelector (".detalles-artista")
    let arrayArtista = data.data
    let artistaHTML = ""

    for(let i=0; i<1; i++){
        artistaHTML += `<article class= "detalles-cantante">
        <img src= ${arrayArtista[i].picture}>
        <h2> ${arrayArtista[i].name}</h2>
        <ul>
        <li> ${arrayArtista[i].album}</li>
        <li> ${arrayArtista[i].album}</li>
        <li> ${arrayArtista[i].album}</li>
        <li> ${arrayArtista[i].album}</li>
        </ul>`
    }

    artista.innerHTML = artistaHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})