import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Todo from './Todo';
import AddForm from './AddForm';

class TodoList extends React.Component {

  handleSubmit = (name) => {
    const categoryId = this.props.activeCategory;
    this.props.addTodo(categoryId, name);
  };

  render() {
    const {todos, toggleTodo, editTodo, activeCategory} = this.props;
    return (
      <div>
        <Row>
          <Col md={12}>
            <div className="pull-right">
              <AddForm onSumbitForm={this.handleSubmit} buttonText="Add Todo" disabled={!activeCategory}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo}/>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TodoList;