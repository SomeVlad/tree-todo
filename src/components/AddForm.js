import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class AddForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }

  handleInputChange = e => {
    this.setState({value: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = this.state.value;
    this.props.onSubmit(value);
    this.setState({value: ''});
  };

  render() {
    return (
      <Form className="addForm" onSubmit={this.handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Enter text"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        {' '}
        <Button bsStyle="primary" type="submit">
          {this.props.buttonText}
        </Button>
      </Form>
    )
  }
}

export default AddForm;