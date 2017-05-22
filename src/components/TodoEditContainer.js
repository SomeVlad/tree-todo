import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import CategoryListContainer from './CategoryListContainer';
import TodoEditFormContainer from './TodoEditFormContainer';
import {fillEditTodoForm} from '../redux/actions';

class TodoEdit extends React.Component {

  componentWillMount() {
    const {fillEditTodoForm, editedTodo} = this.props;
    fillEditTodoForm(editedTodo);
  };

  render(){
    const {match, history} = this.props;
    return (
      <div>
        <Row>
          <Col md={12}><h1>To-Do Item #{match.params.id}</h1></Col>
        </Row>
        <Row>
          <Col md={5}>
            <CategoryListContainer editMode/>
          </Col>
          <Col md={7}>
            <TodoEditFormContainer history={history}/>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const findEditedTodo = (state, editedTodoId) => {
    return state.todos.find(todo => todo.id === editedTodoId);
  };
  return {
    editedTodo: findEditedTodo(state, ownProps.match.params.id),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fillEditTodoForm: todo => dispatch(fillEditTodoForm(todo)),
  }
};

const TodoEditContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEdit);

export default TodoEditContainer;
