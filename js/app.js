// NUMERO DE LA PAGINA INICIAL
let page = 1;

// BOTONES PARA AVANZAR Y RETROCEDDER LA PAGINA
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", ()=>{
    if (page < 1000) {
        page++
        cargarPeliculasPopulares()
    }
})

btnAnterior.addEventListener("click", ()=>{
    if (page > 1) {
        page--
        cargarPeliculasPopulares()
    }
})

// CARGAR PELICULAS POPULARES
const cargarPeliculasPopulares = async () => {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=26d7c3ad9ac69722750c1e6701ab2bb8&language=es-MX&page=${page}`);

    const datos = await respuesta.json();

    const pelis = document.getElementById("peliculas");

    let peliculas = '';

    datos.results.forEach(pelicula => {
        peliculas += `
            <div class="card" id="card">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="Poster pelicula">
                <h1 class="titulo">${pelicula.title}</h1>
            </div>`
        });

    pelis.innerHTML = peliculas;
}

cargarPeliculasPopulares()

