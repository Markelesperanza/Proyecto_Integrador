let urlDetallesGenero= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13/top?limit=50"

fetch(urlDetallesGenero)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let detallesGeneros= document.querySelector(".detail-genres-section");
    let arrayDetallesGeneros= data.data
    let detallesGenerosHTML= ''

    for(let i=0; i<arrayDetallesGeneros.length; i++){
        detallesGenerosHTML += `<article class="">
        <h2>${arrayDetallesGeneros[i].}</h2>
        <ul>
            <li>
             <img src=${arrayDetallesGeneros[i].}>
             <h3>${arrayDetallesGeneros[i].}</h3>
            </li>
        </ul>
        </article>`
    }
    canciones.innerHTML= cancionesHTML;

})
.catch(function(error){
    console.log("Error: " + error);
})