import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () =>{
    alert('You added a new task');

  }
  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
   
    >
      +
    </button>
  );
}

export { CreateTodoButton };
