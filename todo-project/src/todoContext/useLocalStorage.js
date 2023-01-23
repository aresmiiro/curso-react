import React from "react";


function useLocalStorage(itemName, initialValue) {
  // itemName -> nombre del valor del local storage - initialValue -> valor inicial en caso de que no exista
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() =>{
  setTimeout(() =>{
  try{
      const localStorageItem = localStorage.getItem(itemName); // obtiene el valor del local storage con el nombre que le hemos pasado
  let parsedItem; // variable para guardar el valor del local storage como string en formato json
  
  if (!localStorageItem) { // comprobamos si existe el valor en el local storage o no 
// en caso de que no exista, guardamos en el local storage el valor que le hemos pasado como parámetro (initialValue)
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue; // guardamos el valor en parsedItem
  } else {
    // en caso de que exista simplemente lo guardamos en parsedItem
    parsedItem = JSON.parse(localStorageItem);
  }
  setItem(parsedItem);
  setLoading(false)
  
    }catch(error){
      setError(error)

    }
  
  },1000)

  });
  

  // creamos un estado con el valor del local storage
  

  // función para guardar el valor en el local storage y actualizar el estado
  const saveItem = (newItem) => {
    try{
    //formateamos el valor a string en formato json
    const stringifiedItem = JSON.stringify(newItem);
    // guardamos el valor en el local storage
    localStorage.setItem(itemName, stringifiedItem);
    // actualizamos el estado
    setItem(newItem);
    }catch(error){
      setError(error)
    }
  };

  // devolvemos el valor del estado (item) y la función para guardar en el local storage y actualizar el estado (saveItem)
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };

