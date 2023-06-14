
let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

fetch(urlArtista)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let artista = document.querySelector (".detalles-artista")
    let artistaHTML = ""

        artistaHTML += `<article class= "detalles-cantante detalles-article-informacion">
        <img src= ${data.picture_big}>
        <ul class="detalles-generos" >
        <li><h2> Artista: ${data.name}</h2></li>
        </ul>`

    artista.innerHTML = artistaHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})


let qsLista = window.location.search
let qsListaObj = new URLSearchParams(qsLista);
let idListaAlbum = qsListaObj.get("id");

let urlListaAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

fetch(urlListaAlbum)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let listaAlbum = document.querySelector(".listado-artista-albums");
    let arrayListaAlbum = data.data //ver API
    let listaAlbumHTML = ""

    for(let i=0; i<5; i++){
        listaAlbumHTML += `<li><h3>${arrayListaAlbum[i].title}</h3></li>`
    }
    listaAlbum.innerHTML=listaAlbumHTML

 })
.catch(function(error){
    console.log("Error: " + error);
})