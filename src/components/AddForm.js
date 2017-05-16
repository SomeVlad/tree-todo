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
    this.props.onSumbitForm(value);
    this.setState({value: ''});
  };

  render() {
    return (
      <Form className="addForm" onSubmit={this.handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Enter text"
          value={this.state.value}
          onChange={this.handleInputChange}
          disabled={this.props.disabled}
        />
        {' '}
        <Button bsStyle="primary" type="submit" disabled={this.props.disabled || !this.state.value.trim()}>
          {this.props.buttonText}
        </Button>
      </Form>
    )
  }
}

export default AddForm;