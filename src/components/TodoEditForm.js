import React from 'react';
import {ButtonToolbar, Button, Col, Form, FormControl} from 'react-bootstrap';

class TodoEditForm extends React.Component {

  handleSave = e => {
    const {editedTodo, saveEditTodo, history, resetEditTodoForm} = this.props;
    saveEditTodo(editedTodo);
    resetEditTodoForm();
    history.push(`/${editedTodo.categoryId}`);
  };

  handleValueChange = e => {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const todoField = {[key]: value};
    this.props.changeTodoEditValue(todoField);
  };

  handleCancel = () => {
    const {resetEditTodoForm, history} = this.props;
    resetEditTodoForm();
    history.push('/');
  }

  render() {
    const {
      editedTodo: {name, completed, description},
    } = this.props;
    return (
      <div>
        <Col md={12}>
          <ButtonToolbar className="pull-right">
            <Button onClick={this.handleSave}>
              Save changes
            </Button>
            <Button onClick={this.handleCancel}>
              Cancel
            </Button>
          </ButtonToolbar>
        </Col>
        <Col md={12}>
          <Form className="addForm" inline>
            <FormControl
              type="text"
              value={name}
              name="name"
              onChange={this.handleValueChange}
            />
          </Form>
        </Col>
        <Col md={12}>
          <label>
            <input
              onChange={this.handleValueChange}
              type="checkbox"
              name="completed"
              checked={completed}
              style={{marginBottom: "20px"}}
            />{" "}done
          </label>
        </Col>
        <Col md={12}>
          <FormControl
            onChange={this.handleValueChange}
            value={description}
            name="description"
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