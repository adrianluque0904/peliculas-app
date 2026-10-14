const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const contenedorResultados = document.getElementById('resultados');

btnBuscar.addEventListener('click', buscarPeliculas);

inputBusqueda.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    buscarPeliculas();
  }
});

async function buscarPeliculas() {
  const texto = inputBusqueda.value.trim();

  if (!texto) return;

  try {
    const respuesta = await fetch(`/api/buscar?q=${encodeURIComponent(texto)}`);
    const datos = await respuesta.json();

    mostrarResultados(datos.results);
  } catch (error) {
    console.error('Error al buscar:', error);
    contenedorResultados.innerHTML = '<p>Hubo un error al buscar. Intentá de nuevo.</p>';
  }
}

function mostrarResultados(peliculas) {
  contenedorResultados.innerHTML = '';

  if (peliculas.length === 0) {
    contenedorResultados.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  peliculas.forEach((pelicula) => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const urlPoster = pelicula.poster_path
      ? `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
      : 'https://via.placeholder.com/180x270?text=Sin+imagen';

    const anio = pelicula.release_date
      ? pelicula.release_date.split('-')[0]
      : 'N/D';

    tarjeta.innerHTML = `
      <img src="${urlPoster}" alt="${pelicula.title}">
      <div class="tarjeta-info">
        <h3>${pelicula.title}</h3>
        <p>${anio} · ⭐ ${pelicula.vote_average.toFixed(1)}</p>
      </div>
    `;

    contenedorResultados.appendChild(tarjeta);
  });
}