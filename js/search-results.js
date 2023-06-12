



//Probando
let form = document.querySelector("form");
let inputDeBusqueda = document.querySelector("input");


form.addEventListener("submit", function(e) {
  e.preventDefault();

  let results = inputDeBusqueda.value();

  if (results.length >= 5) {
    let results = buscarResultados(results);

    if (results.length > 0) {
      results.innerHTML = 'Resultados de búsqueda para: ';

      for (let i = 0; i < results.length; i++) {
        
      }
    } else {
      results.innerHTML = 'No se encontraron resultados para: ';
    }
  } else {
    results.innerHTML = 'Por favor, ingresa un término de búsqueda de al menos 5 caracteres.';
  }
});

function buscarResultados() {
  // Aquí implementa la lógica para buscar los resultados
  // Retorna un array de objetos con los resultados encontrados
  // Ejemplo ficticio:
  return [
    { title: 'Canciones', url: '.html' },
    { title: 'Albumes', url: 'album.html' },
    { title: 'Artistas', url:  }
  ];
}


