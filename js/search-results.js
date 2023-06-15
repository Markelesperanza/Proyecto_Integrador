//Probando
let busqueda= new URLSearchParams(location.search)
let buscar= busqueda.get('buscar')
let resultados=document.querySelector('.resultados')
let contenido=''

let titulo=document.querySelector('.titulobusqueda')
titulo.innerHTML += buscar

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(function (response){
  return response .json ()
})

.then(function (data){
console.log(data);

for(let i=0;i<data.data.lenght;i++){
contenido+= `<article class= "conetenidoResultados">
            <p class="titulosCanciones"><a href=detalle-cancion.html?id=${data.data[i].id}>        
</a>
</article>`
}

resultados.innerHTML+=contenido
if(data.data.length ==0){
  alert('La busqueda no trajo resultados ')
}
contenido.innerHTML=contenido
})

.catch(function(error){
console.log("Error:" + error );
})



