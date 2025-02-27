
export const filterGender = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.gender === string); //
  return nuevoArray;
};


export const filterSpecies = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.species === string); // 
  return nuevoArray;
};

export const filterOrigin = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.origin.name === string); //
  return nuevoArray;
};


export const filterCharacters = (dataAll,string) => {
  const nuevoArray = dataAll.filter((obj)=> obj.name.toLowerCase().startsWith(string));
  return nuevoArray;
};

export const filterLocation= (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.location.name === string); //
  return nuevoArray;
};

export const filterStatus= (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.status === string); // 
  return nuevoArray;
};

// Ordenar de la A-Z y Z-A
export const oderAlphabetically=(dataAll, string) =>{
  const orderAZ= dataAll.sort((name1,name2)=>((name1.name>name2.name)?1:-1));
  if (string==='A-Z'){
    return orderAZ;
  }

  else if (string=== 'Z-A'){
    return orderAZ.reverse();
  }

}


