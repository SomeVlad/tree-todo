import React from 'react';
import {ButtonToolbar, Button, Col, Form, FormControl} from 'react-bootstrap';

class ToDoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {text, completed, description, cancelEditToDo} = this.props;
    return (
      <div>
        <Col md={12}>
          <ButtonToolbar className="pull-right">
            <Button>
              Save changes
            </Button>
            <Button onClick={cancelEditToDo}>
              Cancel
            </Button>
          </ButtonToolbar>
        </Col>
        <Col md={12}>
          <Form className="addForm" inline>
            <FormControl
              type="text"
              value={text}
            />
          </Form>
        </Col>
        <Col md={12}>
          <label>
            <input
              type="checkbox"
              checked={completed}
              style={{marginBottom: "20px"}}
            />{" "}Done
          </label>
        </Col>
        <Col md={12}>
          <FormControl value={description} rows={10} componentClass="textarea" placeholder="textarea" />
        </Col>
      </div>
    )
  }
}

export default ToDoEdit;