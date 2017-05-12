import React from 'react';

const ToDo = (props) => {
  const {
    toDo: { id, completed, text},
    toggleToDo,
  } = props;
  return (
    <li className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => { toggleToDo(id)}} />
      <span className="todoTitle">{text}</span>
    </li>
  )
};

export default ToDo;