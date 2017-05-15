import React from 'react';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.input;
    const categoryId = this.props.activeCategory;
    this.props.addTodo(categoryId,name);
    this.setState({input: ''});
  };

  render() {
    const {todos, toggleTodo, editTodo, activeCategory} = this.props;
    return (
      <div>
        <Row>
          <Col md={12}>
            <Form className="addForm pull-right" inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Enter text"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
              {' '}
              <Button bsStyle="primary" type="submit" disabled={!activeCategory}>
                Add Todo
              </Button>
            </Form>
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