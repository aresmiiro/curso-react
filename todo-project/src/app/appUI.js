import React from 'react';
import { CreateTodoButton } from '../createTodoButtons/CreateTodoButton';
import { TodoCounter } from '../todoCounter/TodoCounter';
import { TodoItem } from '../todoItem/TodoItem';
import { TodoList } from '../todoList/TodoList';
import { TodoSearch } from '../todoSearch/TodoSearch';


function AppUI({
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
}) {
    return (
        <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
    )
}

export { AppUI };

