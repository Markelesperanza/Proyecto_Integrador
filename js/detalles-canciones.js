let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlCancion = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(urlCancion)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let cancion = document.querySelector (".detalles-cancion")
    let cancionHTML = ""

        cancionHTML += `<article class= "detalles-track detalles-article-informacion">
        <img src= ${data.album.cover_big}>
        <ul class="detalles-generos" >
        <li><h2> Cancion: ${data.title}</h2></li>
        <li><h3> Artista: ${data.artist.name}</h3></li>
        <li><h3> Album: ${data.album.title}</h3></li>
        </ul>`
    cancion.innerHTML = cancionHTML;

    let linkFavoritos = document.querySelector (".etiqueta-playlist");
    
    let recuperoStorage = localStorage.getItem(".link-playlist-section");
    let storageToArray = JSON.parse(recuperoStorage);

    let cancionesFavoritos = [];
    if(recuperoStorage !== null){
        cancionesFavoritos = storageToArray
    }
    
    linkFavoritos.addEventListener('click', function(e){
        e.preventDefault();
        
        if (cancionesFavoritos.includes(id)) {
            
            let arrayIncluye = cancionesFavoritos.indexOf(id);
            if (arrayIncluye !== -1) {
              cancionesFavoritos.splice(arrayIncluye, 1);
            }
            cancionesAJson = JSON.stringify(cancionesFavoritos);
            localStorage.setItem("MiPlaylist", cancionesAJson);


            console.log("Eliminada");
          } else {
            
            cancionesFavoritos.push(id);
            cancionesAJson = JSON.stringify(cancionesFavoritos);
            localStorage.setItem("MiPlaylist", cancionesAJson);


            console.log("Agregada");
          }
        
        console.log(localStorage);
    })
})
.catch(function(error){
    console.log("Error: " + error);
})

//.includes() retorna si el elemento de encunetra en el array y retorna True o False
//.indexOf() retorna en que indice del array se encuentra
// retorna -1 si no encuentra el elemento
//.splice() eimina el elemento existente en el array
//cancionesFavoritos.push(id);
//localStorage.setItem(".detalles-cancion", cancionesAJson)