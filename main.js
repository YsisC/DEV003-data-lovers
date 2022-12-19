import {   filterGender,filterSpecies,filterOrigin,filterCharacters,filterLocation,
  filterStatus,oderAlphabetically
       
} from './data.js';
// import rickandmorty from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);


//La data tomada del archivo './data/rickandmorty/rickandmorty.js'
const dataResult = data.results;

// console.log(dataResult, typeof dataResult);
//  document.addEventListener("pantalla de inicio").style.display='';
// document.addEventListener("filter").style.display='none';

// Crear una funcion para que me tome los datos del objeto y mediante un div los va agregar

const containerElement = (obj) =>{

  //Crear Nodos
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'cardDiv');
  divElement.innerHTML=`<div class='cardBoxDiv'>
  <img src="${obj.image}"/>
<h2>${obj.name}h</h2>
</div>
<div class="contenedorModal">
    <span class="close">&times;</span>
    <h2>${obj.name}</h2>
    <img src="${obj.image}"/>
    <p> Status: ${obj.status}</p>
    <p> Species: ${obj.species}</p>
    <p> Gender: ${obj.gender}</p>
    <p> Origin: ${obj.origin.name}</p>
    <p> Location: ${obj.location.name}</p>
  </div>`;

  //Mostrar el Modal con todos los datos completos
  divElement.querySelector('.cardBoxDiv').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'block';
    document.querySelector('.my-modal').style.display = 'block';
  });
 
  //Ocultar el modal con todos los datos
  divElement.querySelector('.close').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'none';
    document.querySelector('.my-modal').style.display = 'none';
  });

  return divElement;
}

//Seleccionar el padre
const insertAllResult= document.querySelector('.resultCard');

const verPersonajes = (data) =>{
  data.forEach(obj => {
    insertAllResult.appendChild(containerElement(obj))
  });
}
// verPersonajes(dataResult);
// const verPersonajes = (data) =>{
//   data.map(obj => {
//     insertAllResult.appendChild(containerElement(obj))
//   });
// }
verPersonajes(dataResult);



// El boton del Genero en HTML
const filterGenderEl = document.querySelector("#gender");

//Filtro por genero
filterGenderEl.addEventListener('click', function() {
  insertAllResult.innerHTML = "";
  const gender = verPersonajes(filterGender(dataResult,filterGenderEl.value));
  return gender;
});

// Filtro por especie

// El boton de especie en HTML

const filterSpeciesEl= document.querySelector("#species");

// Filtro por especie
filterSpeciesEl.addEventListener('click',function(){
  insertAllResult.innerHTML="";
  const specie =verPersonajes(filterSpecies(dataResult,filterSpeciesEl.value))
  return specie;
});

// Boton por origin 

const filterOriginEl= document.querySelector("#origin");
// Filtro por origin

filterOriginEl.addEventListener('click',function(){
  insertAllResult.innerHTML="";
  const origin=verPersonajes(filterOrigin(dataResult,filterOriginEl.value))
  return origin;
})

// Boton por locacion

const filterLocationEl= document.querySelector("#location");
 // Filtro por locacion

filterLocationEl.addEventListener('click',function(){
  insertAllResult.innerHTML="";
  const location=verPersonajes(filterLocation(dataResult,filterLocationEl.value))
  return location;
})

// Boton por Status

const filterStatusEl= document.querySelector("#status");
 // Filtro por locacion

 filterStatusEl.addEventListener('click',function(){
  insertAllResult.innerHTML="";
  const status=verPersonajes(filterStatus(dataResult,filterStatusEl.value))
  return status;
})
// Buscador por personaje

const searchCharacthersEl= document.querySelector("#search");

//Filtro por personajes

searchCharacthersEl.addEventListener('input',function(){
  insertAllResult.innerHTML="";
  const characters = searchCharacthersEl.value.toLowerCase();
  verPersonajes(filterCharacters(dataResult,characters));
})

// Ordenar alfabeticamente

const orderCharacthersEl= document.querySelector("#order");

// filtro alfabeto

orderCharacthersEl.addEventListener('click',function(){
  insertAllResult.innerHTML="";
  const orderCharacther =verPersonajes(oderAlphabetically(dataResult,orderCharacthersEl.value));
  return orderCharacther
})






