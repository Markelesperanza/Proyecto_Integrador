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
        cancionesHTML += `<li>
        <article class="home-article-canciones home-article">
        <a class="link-color" href="detalles-canciones.html?id=${arrayCanciones[i].id}">
        <img src= ${arrayCanciones[i].album.cover_medium} width="400" height="600">
        <h2 class="home-texto" >${arrayCanciones[i].title}</h2>
        <h3 class="home-texto" >${arrayCanciones[i].artist.name}</h3></a>
        </article>
        </li>`
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
        albumHTML += `<li>
        <article class="home-article-album home-article">
          <a class="link-color" href="detalles-album.html?id=${arrayAlbum[i].id}">
             <img src= ${arrayAlbum[i].cover_medium} width="400" height="600">
             <div>
                  <h2 class="home-texto" >${arrayAlbum[i].title} </h2>
                  <h3 class="home-texto" >${arrayAlbum[i].artist.name}</h3>
             </div>
          </a>
        </article>
        </li>`

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
        artistasHTML += `<li>
        <article class="home-article-artistas home-article">
        <a class="link-color" href="detalles-artistas.html?id=${arrayArtistas[i].id}">
        <img src= ${arrayArtistas[i].picture_medium} width="400" height="600">
        <h2 class="home-texto" >${arrayArtistas[i].name} </h2>
        </a>
        </article>
        </li>`
    }
    artistas.innerHTML= artistasHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})
/***** ARTISTAS *****/
/***** HOME *****/

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
