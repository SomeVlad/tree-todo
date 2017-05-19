import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Todo = (props) => {
  const {
    todo: { id, completed, text},
    toggleTodo,
    history,
    match,
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
        <Button
          onClick={() => {history.push(`edit-todo/${id}`)}}
          bsSize="xsmall"
        >
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
        </Button>
      </ButtonToolbar>
    </li>
  )
};

export default Todo;