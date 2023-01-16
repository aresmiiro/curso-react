//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter.js';


const todos = [
 
  {text:'cortar cebolla', completed: false},
  {text:'tomar curso React', completed: false},
  {text:'Llorar un poquito', completed: false}
];


function App(props) {
  return (
    <React.Fragment>
    <TodoCounter />

    {/*<TodoSearch />*/}
    <input placeholder="Cebolla" />
    {/*<TodoList>
      {todos.map(todo =>(
        <TodoItem />
      ))}
      </TodoList>*/}

    {/*<CreateTodoButton/>*/}
    <button>+</button>
    </React.Fragment>
  );
}

export default App;
