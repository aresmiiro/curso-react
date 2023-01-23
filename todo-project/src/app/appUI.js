import React from 'react';
import { CreateTodoButton } from '../createTodoButtons/CreateTodoButton';
import { TodoContext } from '../todoContext';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoItem } from '../todoItem/TodoItem';
import { TodoList } from '../todoList/TodoList';
import { TodoSearch } from '../todoSearch/TodoSearch';

function AppUI() {
  const {
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
