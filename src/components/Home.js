import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import FilterContainer from './FilterContainer';
// import StatusBarContainer from './StatusBarContainer';
import CategoryListContainer from './CategoryListContainer';
import TodoListContainer from './TodoListContainer';
import ModalContainer from './ModalContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}><h1>To-Do List</h1></Col>
        </Row>
        <Row>
          <Col md={12}><FilterContainer/></Col>
        </Row>
        <Row>
          <Col md={5}>
            <CategoryListContainer />
          </Col>
          <Col md={7}>
            <TodoListContainer />
          </Col>
        </Row>
        <ModalContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showEditTodo: state.editTodo.show,
  }
};

export default connect(mapStateToProps)(Home);
