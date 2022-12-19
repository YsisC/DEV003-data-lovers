
// estas funciones son de ejemplo
// const dataAll = data.results;

export const filterGender = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.gender === string); //female Male
  return nuevoArray;
};


export const filterSpecies = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.species === string); // Alien Humanoide
  return nuevoArray;
};

export const filterOrigin = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.origin.name === string); // Alien Humanoide
  return nuevoArray;
};


export const filterCharacters = (dataAll,string) => {
  const nuevoArray = dataAll.filter((obj)=> obj.name.toLowerCase().startsWith(string));
  return nuevoArray;
};

 export const filterLocation= (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.location.name === string); // Alien Humanoide
  return nuevoArray;
};

export const filterStatus= (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.status === string); // Alien Humanoide
  return nuevoArray;
};


