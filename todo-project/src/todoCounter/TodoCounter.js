

  import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <React.Fragment>
    <h1 className='CounterTitle'>Your tasks</h1>
    <h2 className="TodoCounter">You completed {completed} of {total} TODOs</h2>
    </React.Fragment>
  );
}

export { TodoCounter };

