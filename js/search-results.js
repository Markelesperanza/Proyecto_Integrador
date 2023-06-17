
let busqueda= new URLSearchParams(location.search)
let buscar= busqueda.get('buscar')
let resultados=document.querySelector('.resultados')
let contenido=''

let titulo=document.querySelector('.titulobusqueda')
titulo.innerHTML += buscar

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(function (response){
  return response.json ()
})

.then(function (data){
console.log(data);

for(let i=0;i<data.data.length;i++){
contenido+= `<article class= "resultados">
            <p class="titulobusqueda">
              <a href="detalles-canciones.html?id=${data.data[i].id}">   
              ${data.data[i].title}
              </a>
            </p>
          </article>`
}

contenido.innerHTML+=contenido
if(data.data.length == 0){
  alert('La busqueda no trajo resultados ')
}
resultados.innerHTML=contenido
})

.catch(function(error){
console.log("Error:" + error );
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