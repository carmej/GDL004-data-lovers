import POKEMON from './data/pokemon/pokemon.js';

const dataPokemon=POKEMON.pokemon;
let result = dataPokemon.filter (function(los) {
return (los.name === "Caterpie");
});
console.log(result);


