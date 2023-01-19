import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
      <p>{props.notFound}</p>
    </section>
  );
}

export { TodoList };
