import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

const ToDo = (props) => {
  const {
    toDo: { id, completed, text},
    toggleToDo,
    editToDo,
  } = props;
  return (
    <li className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleToDo(id)}
      />
      <span className="todoTitle">{text}</span>
      <ButtonToolbar className="pull-right">
        <Button bsSize="xsmall" onClick={() => editToDo(id)}>
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
        </Button>
      </ButtonToolbar>
    </li>
  )
};

export default ToDo;