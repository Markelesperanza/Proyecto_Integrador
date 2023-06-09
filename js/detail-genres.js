
let urlDetallesGenero= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13/top?limit=50"


fetch(urlDetallesGenero)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let detallesGenero= document.querySelector(".detail-genres-section");
    let arrayDetallesGenero= data.data
    let detallesGeneroHTML= ''

    for(let i=0; i<arrayDetallesGenero.length; i++){
        detallesGeneroHTML += `<article>
        <img src= ${arrayCanciones[i].album.cover_medium}>
        <h1>${arrayDetallesGenero[i].d}</h1>
        <h3>${arrayCanciones[i].artist.title}</h3>
        </a>
        </article>`
    }
    detallesGenero.innerHTML= detallesGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})

let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`