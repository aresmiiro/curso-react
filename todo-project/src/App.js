import react from "react";
import { CreateTodoButtom } from "./CreateTodoButton.js";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem.js";
import { TodoList } from "./TodoList.js";
import { TodoSearch } from "./TodoSearch.js";
//import './App.css';
const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
        <TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButtom />      
   </react.Fragment>
  );
}

export default App;
