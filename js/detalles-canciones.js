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

        cancionHTML += `<article class= "detalles-canciones-informacion">
        <img class="detalles-canciones-iamgen" src= ${data.album.cover_big}>
        <ul class="detalles-canciones-texto" >
        <li><h2> Cancion: ${data.title}</h2></li>
        <li><h3>Artista: <a class="detalles-canciones-link" href="detalles-artistas.html?id=${data.artist.id}">${data.artist.name}</a></h3></li>
        <li><h3> Album: <a class="detalles-canciones-link" href="detalles-album.html?id=${data.album.id}">${data.album.title}</a></h3></li>
        </ul>`
    cancion.innerHTML = cancionHTML;

    let cancionesMiPlaylist = document.querySelector(".etiqueta-playlist")

    let recuperoStorage = localStorage.getItem("MiPlaylist")
    let storageToarray = JSON.parse(recuperoStorage);
    
    let arrayPlaylist = [];
    
    if(recuperoStorage !== null){
    arrayPlaylist = storageToarray
    }
    if(arrayPlaylist.includes(id)){
    cancionesMiPlaylist.innerText = "Eliminar de Mi Playlist"
    }
    
    cancionesMiPlaylist.addEventListener('click', function(e){
        e.preventDefault
        
        if(arrayPlaylist.includes(id)){

        let listaCanciones = arrayPlaylist.indexOf(id)
        arrayPlaylist.splice(listaCanciones,1)   

        cancionesMiPlaylist.innerText = "Agregar a Mi Playlist"

        }else{
            arrayPlaylist.push(id)
            cancionesMiPlaylist.innerText = "Eliminar de Mi Playlist"
        }
        
        let informacionArray = JSON.stringify(arrayPlaylist)
        localStorage.setItem("MiPlaylist",informacionArray)
        
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

/***** BUSCADOR *****/
let formulario = document.querySelector(".buscador")
let buscador = document.querySelector('[name=buscar]')

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    if(buscador.value === ''){

        let vacio = "Que el campo no esté vacío!"
        alert(vacio);
    } else if (buscador.value.length < 3){

        let caracteres = "Que el término buscado tenga al menos 3 caracteres!"
        alert(caracteres);

    } else {

        formulario.submit()
    }
})
/***** BUSCADOR *****/