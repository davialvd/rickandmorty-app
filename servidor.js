document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        mostrarPersonajes(data);
    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }
});

function mostrarPersonajes(data) {
    const contenedorPersonajes = document.getElementById('personajes');
  
    data.results.forEach(personaje => {
      const tarjetaPersonaje = document.createElement('div');
      tarjetaPersonaje.classList.add('col-md-4', 'mb-4');
      tarjetaPersonaje.innerHTML = `
        <div class="card">
          <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
          <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Estado: ${personaje.status}</p>
            <p class="card-text">Especie: ${personaje.species}</p>
            <p class="card-text">Género: ${personaje.gender}</p>
          </div>
        </div>
      `;
      contenedorPersonajes.appendChild(tarjetaPersonaje);
    });
}
