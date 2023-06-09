
let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let urlDetallesGenero= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`


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
        <h2></h2>
        <img src=${arrayDetallesGenero[i].picture_medium}>
        <h3>${arrayDetallesGenero[i].name}</h3>
        </article>`
    }
    detallesGenero.innerHTML= detallesGeneroHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})