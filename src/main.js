
import POKEMON from './data/pokemon/pokemon.js';

//Filter
const dataPokemon=POKEMON;
let result = dataPokemon.filter (function(los) {
return (los.name === "Caterpie");
})
console.log(result);

//Map
dataPokemon.map((personaje)=>{
let span = document.createElement("span");
const template = `<div class= "name"> ${personaje.name} </div>
<img src= "${personaje.img}"> </img>`
span.innerHTML=template;
document.getElementById("nombreImagen").appendChild(span);

});