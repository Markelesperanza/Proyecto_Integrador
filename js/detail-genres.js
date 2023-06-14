

let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlDetallesGenero = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`

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
        <a href="detalles-artistas.html?id=${arrayDetallesGenero[i].id}">
        <img src=${arrayDetallesGenero[i].picture_medium}>
        <h3>${arrayDetallesGenero[i].name}</h3></a>
        </article>`
    }
    detallesGenero.innerHTML= detallesGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})

let qsGenero = window.location.search
let qsGeneroObj = new URLSearchParams(qsGenero);
let idGenero = qsGeneroObj.get("id");

let urlGenero= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenero}`

fetch(urlGenero)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let dGenero= document.querySelector(".genero-titulo");
    let dGeneroHTML= ''

        dGeneroHTML += `<article>
        <h2>${data.name}</h2>
        </article>`
    
    dGenero.innerHTML= dGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})