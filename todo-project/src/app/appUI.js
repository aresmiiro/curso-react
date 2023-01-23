import React from 'react';
import { CreateTodoButton } from '../createTodoButtons/CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../modal';
import { TodoContext } from '../todoContext';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoForm } from '../todoForm';
import { TodoItem } from '../todoItem/TodoItem';
import { TodoList } from '../todoList/TodoList';
import { TodoSearch } from '../todoSearch/TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error= {error}/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        
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

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
