import POKEMON from './data/pokemon/pokemon.js';

const dataPoke= POKEMON;
// Template
const template = (lista) => {
    let templateListaPoke = '';
    // recorremos array con forEach
    list.forEach((dataPoke) => {
      // template
      const card = `
        <div class='card-link'>
          <article class='blog-card'>
            <img class='post-image' src='${dataPoke.img}' />
            <h3 class='post-id'>${dataPoke.id}</h3>
            <div class='article-details'>
              <h4 class='post-title'>${dataPoke.name}</h4>
              <h6 class='post-category'>${dataPoke.type}</h6>
            </div>
          </article>
        </div>
      `;
      templateListaPoke += card;
    });
    document.getElementById('todosLosPokemones').innerHTML = templateListaPoke;
  };
  template(dataPoke);

// menu de inicio
document.getElementById('inicio').addEventListener('click', () => {
    document.getElementById('banner').style.display = 'block';
    document.getElementById('BIENVENIDOS').style.display = 'none';
    document.getElementById('blog').style.display = 'none'; 
    document.getElementById('info').style.display = 'none'; 
  });
  // mostrar todos los pokemones
document.getElementById('mostrarPokemones').addEventListener('click', () => {  
    document.getElementById('listadePokemones').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('tipokemon').style.display = 'none';
  });
  


  // filtrado por tipo
document.getElementById('tipoPokemon').addEventListener('change', (evt) => {
    const selectedIndex = evt.currentTarget.selectedIndex;
    if (selectedIndex === 1) {
      template(POKEMON.filterData(dataPoke, 'Water'));
    } else if (selectedIndex === 2) {
      template(POKEMON.filterData(dataPoke, 'Bug'));
    } else if (selectedIndex === 3) {
      template(POKEMON.filterData(dataPoke, 'Dragon'));
    } else if (selectedIndex === 4) {
      template(POKEMON.filterData(dataPoke, 'Electric'));
    } else if (selectedIndex === 5) {
      template(POKEMON.filterData(dataPoke, 'Ghost'));
    } else if (selectedIndex === 6) {
      template(POKEMON.filterData(dataPoke, 'Fire'));
    } else if (selectedIndex === 7) {
      template(POKEMON.filterData(dataPoke, 'Ice'));
    } else if (selectedIndex === 8) {
      template(POKEMON.filterData(dataPoke, 'Fighting'));
    } else if (selectedIndex === 9) {
      template(POKEMON.filterData(dataPoke, 'Normal'));
    } else if (selectedIndex === 10) {
      template(POKEMON.filterData(dataPoke, 'Grass'));
    } else if (selectedIndex === 11) {
      template(POKEMON.filterData(dataPoke, 'Psychic'));
    } else if (selectedIndex === 12) {
      template(POKEMON.filterData(dataPoke, 'Rock'));
    } else if (selectedIndex === 13) {
      template(POKEMON.filterData(dataPoke, 'Ground'));
    } else if (selectedIndex === 14) {
      template(POKEMON.filterData(dataPoke, 'Poison'));
    } else if (selectedIndex === 15) {
      template(POKEMON.filterData(dataPoke, 'Flying'));
    } 
  });
  