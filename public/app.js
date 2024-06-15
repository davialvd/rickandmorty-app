document.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch('/api/personajes');
    const datos = await respuesta.json();
    const contenedorPersonajes = document.getElementById('personajes');
  
    datos.results.forEach(personaje => {
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
  });
  