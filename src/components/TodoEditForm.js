import React from 'react';
import {ButtonToolbar, Button, Col, Form, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class TodoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      completed: this.props.completed,
      description: this.props.description,
    }
  }

  handleSave = e => {
    const {text, completed, description} = this.state;
    const {id, saveEditTodo} = this.props;
    const todo = { id, text, completed, description };
    saveEditTodo(todo);
  };

  handleTextChange = e => {
    this.setState({text: e.target.value})
  };

  handleDescriptionChange = e => {
    this.setState({description: e.target.value})
  };

  handleCompletedChange = e => {
    this.setState({completed: !this.state.completed})
  };

  render() {
    return (
      <div>
        <Col md={12}>
          <ButtonToolbar className="pull-right">
            <Link to="/">
              <Button onClick={this.handleSave}>
                Save changes
              </Button>
            </Link>
            <Link to="/">
              <Button>
                Cancel
              </Button>
            </Link>
          </ButtonToolbar>
        </Col>
        <Col md={12}>
          <Form className="addForm" inline>
            <FormControl
              type="text"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </Form>
        </Col>
        <Col md={12}>
          <label>
            <input
              onChange={this.handleCompletedChange}
              type="checkbox"
              checked={this.state.completed}
              style={{marginBottom: "20px"}}
            />{" "}done
          </label>
        </Col>
        <Col md={12}>
          <FormControl
            onChange={this.handleDescriptionChange}
            value={this.state.description}
            rows={10}
            componentClass="textarea"
            placeholder="textarea"
          />
        </Col>
      </div>
    )
  }
}

export default TodoEditForm;