
import POKEMON from './data/pokemon/pokemon.js';


const dataPokemon=POKEMON;

//Ocultar primera historia a través del botón 'verTodos'

const primeraHistoria0 = document.querySelector('#primeraHistoria');
const botonVerTodos = document.querySelector('#verTodos');

botonVerTodos.addEventListener('click', () => {
    primeraHistoria0.style.display = 'none';
  });

//Map ver todos
const verTodosPokemon = () => {

  dataPokemon.map((personaje)=>{
  let span = document.createElement("div");
  const template = `
  <div class= "contenedor1">
  <div class= "card">
  <img src= "${personaje.img}"> </img>
  <div class= name> ${personaje.name} </div>
  <div class= id> Tipo: ${personaje.type} </div>
  <div class= id> Estatura: ${personaje.height} </div>
  <div class= id> Peso: ${personaje.weight} </div>
  </div>
  </div>`
  span.innerHTML=template;
  document.querySelector("#verTodosId").appendChild(span);

})
};

document.querySelector("#verTodos").addEventListener("click", verTodosPokemon);

//Ocultar primera historia a través del botón 'porId'

const primeraHistoria1 = document.querySelector('#primeraHistoria');
const botonPorId = document.querySelector('#porId');

botonPorId.addEventListener('click', () => {
    primeraHistoria1.style.display = 'none';
  });

  //Map por id
const mostrarPorId = () => {

   dataPokemon.map((personaje)=>{
   let span = document.createElement("div");
   const template = `
   <div class= "contenedor1">
   <div class= "card">
   <img src= "${personaje.img}"> </img>
   <div class= name> ${personaje.name} </div>
   <div class= id> ID: ${personaje.id} </div>
   </div>
   </div>`
   span.innerHTML=template;
   document.querySelector("#nombreImagen").appendChild(span);

})
};

document.querySelector("#porId").addEventListener("click",mostrarPorId);

//Ocultar primera historia a través del botón 'porTipo'

const primeraHistoria11 = document.querySelector('#primeraHistoria');
const botonPorTipo = document.querySelector('#porTipo');

botonPorTipo.addEventListener('click', () => {
    primeraHistoria11.style.display = 'none';
  });

//Map por tipo

const mostrarPorTipo = () => {
  //Sort A-Z (por tipo)
  const ordenAAZZ = dataPokemon.sort((personaje1, personaje2) =>{
    return (personaje1.type < personaje2.type) ? - 1 : 1})
    
    dataPokemon.map((personaje)=>{
    let span = document.createElement("div");
    const template = `
    <div class= "contenedor1">
    <div class= "card">
    <div class= name> ${personaje.name} </div>
    <div class= id> Tipo: ${personaje.type} </div>
    <img src= "${personaje.img}"> </img>
    </div>
    </div>`
    span.innerHTML=template;
    document.querySelector("#nombreTipo").appendChild(span);
    document.querySelector("#porTipo").addEventListener("click", ordenAAZZ);
    })
    };
    
    document.querySelector("#porTipo").addEventListener("click",mostrarPorTipo);

    //Ocultar primera historia a través del botón 'btn btn-info' para mostrar función del indexOf

const primeraHistoria111 = document.querySelector('#primeraHistoria');
const botonboton1 = document.querySelector('.boton');

botonboton1.addEventListener('click', () => {
    primeraHistoria111.style.display = 'none';
  });

    //IndexOf búsqueda personalizada

    const formulario = document.querySelector('#formulario');
    const resultado = document.querySelector('#busquePerso');
    const resultadoNoPoke = document.querySelector('#busquePerso1');

    const filtrar = () =>{
    //Sort A-Z (por nombre)
      const ordenAAZZ = dataPokemon.sort((personaje1, personaje2) =>{
        return (personaje1.name < personaje2.name) ? - 1 : 1})

       resultado.innerHTML = '';
    
     const texto = formulario.value.toLowerCase();

     for(let personaje of dataPokemon){
       let nombre = personaje.name.toLowerCase();
       if(nombre.indexOf(texto) !== -1){ 
          resultado.innerHTML +=`
          <div class= "contenedor1">
          <div class= "card">
          <div class= name> ${personaje.name} </div>
          <div class= id> Tipo: ${personaje.type} </div>
          <div class= id> Debilidad: <br> ${personaje.weaknesses} </div>
          <img src= "${personaje.img}"> </img>
          </div>
          </div>`
          document.querySelector("#AZ").addEventListener("click", ordenAAZZ);
       }
     }
    if(resultado.innerHTML === ''){
      resultadoNoPoke.innerHTML +=`
          <h1>'Pokemon no encontrado...'</h1>
      `
    }
    }
    document.querySelector('.boton').addEventListener('click', filtrar)

//Ocultar primera historia a través del botón 'AZ'

const primeraHistoria1111 = document.querySelector('#primeraHistoria');
const botonAZ = document.querySelector('#AZ');

botonAZ.addEventListener('click', () => {
    primeraHistoria1111.style.display = 'none';
  });    

//Map A-Z

const mapOrdenarAZ = () => {
//Sort A-Z (por nombre)
const ordenAAZZ = dataPokemon.sort((personaje1, personaje2) =>{
    return (personaje1.name < personaje2.name) ? - 1 : 1})

  dataPokemon.map((personaje)=>{
  let span = document.createElement("div");
  const template = `
  <div class= "contenedor1">
  <div class= "card">
  <img src= "${personaje.img}"> </img>
  <div class= name> ${personaje.name} </div>
  <div class= id> Tipo: ${personaje.type} </div>
  <div class= id> Estatura: ${personaje.height} </div>
  <div class= id> Peso: ${personaje.weight} </div>
  </div>
  </div>`
  span.innerHTML=template;
  document.querySelector("#AZordenar").appendChild(span);

document.querySelector("#AZ").addEventListener("click", ordenAAZZ);

})
};

document.querySelector("#AZ").addEventListener("click", mapOrdenarAZ);

//Ocultar primera historia a través del botón 'ZA'

const primeraHistoria11111 = document.querySelector('#primeraHistoria');
const botonZA = document.querySelector('#ZA');

botonZA.addEventListener('click', () => {
    primeraHistoria11111.style.display = 'none';
  });    

//Map Z-A

const mapOrdenarZA = () => {
  //Sort Z-A (por nombre)
  const ordenZZAA = dataPokemon.sort((personaje1, personaje2) =>{
      return (personaje1.name > personaje2.name) ? - 1 : 1});
  
    dataPokemon.map((personaje)=>{
    let span = document.createElement("div");
    const template = `
    <div class= "contenedor1">
    <div class= "card">
    <img src= "${personaje.img}"> </img>
    <div class= name> ${personaje.name} </div>
    <div class= id> Tipo: ${personaje.type} </div>
    <div class= id> Estatura: ${personaje.height} </div>
    <div class= id> Peso: ${personaje.weight} </div>
    </div>
    </div>`
    span.innerHTML=template;
    document.querySelector("#ZAordenar").appendChild(span);
  
  document.querySelector("#ZA").addEventListener("click", ordenZZAA);
  
  })
  };
  
  document.querySelector("#ZA").addEventListener("click", mapOrdenarZA);

