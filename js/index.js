/***** HOME *****/
/***** CANCIONES *****/
let urlCanciones= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"

fetch(urlCanciones)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let canciones= document.querySelector(".home-listado-canciones");
    let arrayCanciones= data.data
    let cancionesHTML= ''

    for(let i=0; i<arrayCanciones.length; i++){
        cancionesHTML += `<article class="home-article-canciones">
        <a href="detalles-canciones.html?id=${arrayCanciones[i].id}">
        <img src= ${arrayCanciones[i].album.cover_medium}>
        <h2>${arrayCanciones[i].title}</h2>
        <h3>${arrayCanciones[i].artist.name}</h3>
        </a>
        </article>`
    }
    canciones.innerHTML= cancionesHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})
/***** CANCIONES *****/

/***** ALBUM *****/
let urlAlbum= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"

fetch(urlAlbum)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let album= document.querySelector(".home-listado-albumes");
    let arrayAlbum= data.data
    let albumHTML= ''

    for(let i=0; i<arrayAlbum.length; i++){
        albumHTML += `<article class="home-article-album">
        <a href="detalles-album.html?id=${arrayAlbum[i].id}">
        <img src= ${arrayAlbum[i].cover_medium}>
        <h2>${arrayAlbum[i].title} </h2>
        <h3>${arrayAlbum[i].artist.name}</h3>
        </a>
        </article>`

    }
    album.innerHTML= albumHTML;
})
.catch(function(error){
    console.log("Error: " + error);
})
/***** ALBUM *****/

/***** ARTISTAS *****/
let urlArtistas= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"

fetch(urlArtistas)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let artistas= document.querySelector(".home-listado-artistas");
    let arrayArtistas= data.data
    let artistasHTML= ''

    for(let i=0; i<arrayArtistas.length; i++){
        artistasHTML += `<article class="home-article-artistas">
        <a href="detalles-artistas.html?id=${arrayArtistas[i].id}">
        <img src= ${arrayArtistas[i].picture_medium}>
        <h2>${arrayArtistas[i].name} </h2>
        </a>
        </article>`
    }
    artistas.innerHTML= artistasHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})
/***** ARTISTAS *****/

/***** HOME *****/