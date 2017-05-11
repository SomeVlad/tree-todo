import React from 'react';
import {connect} from 'react-redux';
import {Form, FormControl, Button} from 'react-bootstrap';
import {} from '../redux/actions';

class ToDoList extends React.Component {
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
    this.props.addCategory(name);
    this.setState({input: ''});
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Enter text"
          value={this.state.input}
          onChange={this.handleInputChange}/>
        <Button type="submit">
          Add ToDo
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;