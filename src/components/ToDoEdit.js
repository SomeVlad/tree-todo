import React from 'react';
import {ButtonToolbar, Button, Col, Form, FormControl} from 'react-bootstrap';

class ToDoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Col md={12}>
          <ButtonToolbar className="pull-right">
            <Button>
              Save changes
            </Button>
            <Button>
              Reset
            </Button>
          </ButtonToolbar>
        </Col>
        <Col md={12}>
          <Form className="addForm" inline>
            <FormControl
              type="text"
              value={''}
            />
          </Form>
        </Col>
        <Col md={12}>
          <label>
            <input
              type="checkbox"
              checked={false}
              style={{marginBottom: "20px"}}
            />
            {" "}Done
          </label>
        </Col>
        <Col md={12}>
          <FormControl rows={10} componentClass="textarea" placeholder="textarea" />
        </Col>
      </div>
    )
  }
}

export default ToDoEdit;