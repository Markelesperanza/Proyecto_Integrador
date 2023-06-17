
let busqueda= new URLSearchParams(location.search)
let buscar= busqueda.get('buscar')
let resultados=document.querySelector('.resultados')
let contenido=''

let titulo=document.querySelector('.titulobusqueda')
titulo.innerHTML += buscar

let loader = document.getElementById('loader'); // Obtener el elemento del loader

loader.style.display = 'block'; // Mostrar el loader antes de hacer la búsqueda

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(function (response){
  return response.json ()
})

.then(function (data){
console.log(data);

for(let i=0;i<data.data.length;i++){
contenido+= `<article class= "resultados">
            <p class="titulobusqueda">
              <a class="search-results-color" href="detalles-canciones.html?id=${data.data[i].id}">   
              ${data.data[i].title}
              </a>
            </p>
          </article>`
}

resultados.innerHTML+=contenido
if(data.data.length == 0){
  alert('La busqueda no trajo resultados ')
}
resultados.innerHTML=contenido

loader.style.display = 'none'; // Ocultar el loader después de cargar los resultados
})

.catch(function(error){
console.log("Error:" + error );

loader.style.display = 'none'; // Ocultar el loader en caso de error
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