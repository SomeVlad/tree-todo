import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

const Todo = (props) => {
  const {
    todo: { id, completed, text},
    toggleTodo,
    editTodo,
  } = props;
  return (
    <li className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span className="todoTitle">{text}</span>
      <ButtonToolbar className="pull-right">
        <Button bsSize="xsmall" onClick={() => editTodo(id)}>
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
        </Button>
      </ButtonToolbar>
    </li>
  )
};

export default Todo;