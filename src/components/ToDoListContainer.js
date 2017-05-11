import React from 'react';
import {connect} from 'react-redux';
import {Form, FormControl, Button} from 'react-bootstrap';
import {addToDo} from '../redux/actions';

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
    const categoryId = this.props.activeCategory;
    this.props.addToDo(categoryId,name);
    this.setState({input: ''});
  };

  render() {
    const {toDos, activeCategory} = this.props;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Enter text"
          value={this.state.input}
          onChange={this.handleInputChange}/>
        <Button type="submit" disabled={this.props.activeCategory ? false : true}>
          Add ToDo
        </Button>
        <ul>
          {toDos.map(toDo => (
            toDo.categoryId === activeCategory && <li>{toDo.text}</li>
          ))}
        </ul>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
    toDos: state.toDos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (categoryId, text) => {dispatch(addToDo(categoryId, text))},
  }
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;