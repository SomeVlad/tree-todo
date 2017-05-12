import React from 'react';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  componentDidMount() {
    this.props.addToDo(this.props.categories[0].id, 'buy some milk');
  }

  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.input;
    const categoryId = this.props.activeCategory;
    this.props.addToDo(categoryId,name);
    this.setState({input: ''});
  };

  render() {
    const {toDos, activeCategory, toggleToDo} = this.props;
    return (
      <div>
        <Row>
          <Col md={12}>
            <Form className="addForm pull-right" inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Enter text"
                value={this.state.input}
                onChange={this.handleInputChange}/>
              <Button type="submit" disabled={!this.props.activeCategory}>
                Add ToDo
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              {toDos.map(toDo => (
                toDo.categoryId === activeCategory && <ToDo toDo={toDo} toggleToDo={toggleToDo} />
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ToDoList;