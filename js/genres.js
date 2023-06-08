let urlGeneros= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (urlGeneros)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let generos= document.querySelector (".listado-generos");
    let arrayGeneros= data.data
    let generosHTML= ""
    
    for(let i=0;i<arrayGeneros.length;i++){
        generosHTML += `<article class= "article-generos">
        <a href:"detail-genres.html?id=${arrayGeneros[i].id}">
        <h2>${arrayGeneros[i].name}</h2>
        <img src= ${arrayGeneros[i].picture_medium}>
        </a>
        </article>`
    }
    generos.innerHTML=generosHTML
})

.catch(function(error){
    console.log("Error:"+ error);
})


