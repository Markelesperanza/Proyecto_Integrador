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
    
    for(let i=1;i<arrayGeneros.length;i++){
        generosHTML += `
        <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade">
        <article class= "home-article uk-text-center">
        <a class="link-color" href="detail-genres.html?id=${arrayGeneros[i].id}">
        <img src= ${arrayGeneros[i].picture_medium}>
        <h2 class="home-texto" >${arrayGeneros[i].name}</h2>
        </a>
        </article>
        </div>
        </div>`
    }
    generos.innerHTML=generosHTML
})

.catch(function(error){
    console.log("Error:"+ error);
})


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