import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoSearch.css';



function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  } ;
  
  return (
    <input 
    className="TodoSearch"
    placeholder="Search your task..."
    value ={searchValue}
    onChange={onSearchValueChange}
     />
  );
}

export { TodoSearch };
