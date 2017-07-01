import Todo from './Todo';
import React from 'react';

const TodoList = ({
  todos,
  onTodoClick
}) => (
    <ul>
      {todos.map(todo => 
        <Todo 
          key={todo.id.toString()}
          onClick={() => {
            onTodoClick(todo.id);
          }}
          {...todo}
        />
       )}
    </ul>
);

export default TodoList;