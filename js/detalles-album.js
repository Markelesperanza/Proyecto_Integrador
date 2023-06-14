let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

fetch(urlAlbum)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let album = document.querySelector (".detalles-album")
    let albumHTML = ""

        albumHTML += `<article class= "detalles-disco detalles-article-informacion">
        <img src= ${data.cover_big}>
        <ul class="detalles-generos" >
        <li><h2> Album: ${data.title}</h2></li>
        <li><h3> Artista: <a href="detalles-artistas.html?id=${data.artist.id}">${data.artist.name}</a></h3></li>
        <li><h3> Genero: <a href="detail-genres.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a></h3></li>
        <li><h3> Fecha de publicación: ${data.release_date}</h3></li>
        </ul>`

    album.innerHTML = albumHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})

let qsLista = window.location.search
let qsListaObj = new URLSearchParams(qsLista);
let idListaCanciones = qsListaObj.get("id");

let urlListaCanciones = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`

fetch(urlListaCanciones)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let listaCanciones = document.querySelector (".listado-canciones-album");
    let arrayListaCanciones = data.data
    let listaCancionesHTML = ""

    for(let i=0; i<arrayListaCanciones.length; i++){
        listaCancionesHTML += `<li><h3><a href="detalles-canciones.html?id=${arrayListaCanciones[i].id}">${arrayListaCanciones[i].title_short}</a></h3></li>`
    }
    listaCanciones.innerHTML=listaCancionesHTML

 })
.catch(function(error){
    console.log("Error: " + error);
})