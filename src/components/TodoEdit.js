import React from 'react';
import {Row, Col} from 'react-bootstrap';
import CategoryListContainer from './CategoryListContainer';
import TodoEditFormContainer from './TodoEditFormContainer';

const TodoEdit = (props) => {
  const {match, history} = props;
  return (
    <div>
      <Row>
        <Col md={12}><h1>To-Do Item #{match.params.id}</h1></Col>
      </Row>
      <Row>
        <Col md={5}>
          <CategoryListContainer editedTodoId={match.params.id} editMode/>
        </Col>
        <Col md={7}>
          <TodoEditFormContainer id={match.params.id} history={history}/>
        </Col>
      </Row>
    </div>
  )
}

export default TodoEdit;