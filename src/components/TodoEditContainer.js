import React from 'react';
import {Row, Col} from 'react-bootstrap';
import CategoryListContainer from './CategoryListContainer';
import TodoEditFormContainer from './TodoEditFormContainer';

class TodoEdit extends React.Component {

  componentWillMount = () => {

  }

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
  return {
    todos: 
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fillEditTodoForm: todo => dispatch(fillEditTodoForm(todo)),
  }
};

const TodoEditContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEdit);

export default TodoEditContainer;
