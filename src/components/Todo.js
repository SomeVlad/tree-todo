import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Todo = (props) => {
  const {
    todo: { id, completed, text},
    toggleTodo,
    history,
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
        <Link to={`/edit/${id}`}>
          <Button onClick={history.push(`/edit/${id}`)} bsSize="xsmall">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
          </Button>
        </Link>
      </ButtonToolbar>
    </li>
  )
};

export default Todo;