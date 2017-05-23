import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Todo extends React.Component {

  handleEditTodo = () => {
    const {
      todo,
      history,
      fillEditTodoForm,
    } = this.props;
    history.push(`/todo/${todo.id}`);
    fillEditTodoForm(todo);
  };

  render(){
    const {
      todo: { id, completed, name},
      toggleTodo,
    } = this.props;
    return (
      <li className="todo">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span className="todoTitle">{name}</span>
        <ButtonToolbar className="pull-right">
          <Button
            onClick={this.handleEditTodo}
            bsSize="xsmall"
          >
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
          </Button>
        </ButtonToolbar>
      </li>
    )
  }
};

export default Todo;