import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';

import FilterContainer from './FilterContainer';
import CategoryListContainer from './CategoryListContainer';
import TodoListContainer from './TodoListContainer';
import CompletedProgressBar from './CompletedProgressBar';

let Home = (props) => {
  const { match, history, location, completedProgress} = props;
  return (
    <div>
      <Row>
        <Col md={6}><h1>Todo List</h1></Col>
        <Col md={6}>
          <FilterContainer location={location} match={match} history={history}/>
        </Col>
      </Row>
      <Row><Col md={12}><CompletedProgressBar now={completedProgress} /></Col></Row>
      <Row>
        <Col md={5}>
          <CategoryListContainer
            activeCategory={match.params.categoryId}
            history={props.history}
            location={location}
            match={match}
          />
        </Col>
        <Col md={7}>
          <Route exact path="/categories/:categoryId" component={TodoListContainer}/>
        </Col>
      </Row>
    </div>
  )
};

const calcCompleted = (todos) => {
  let completed = 0;
  todos.forEach(todo => {
    if(todo.completed) {
      completed++
    }
  });
  return Math.round(completed/todos.length * 100) || 0
};

const mapStateToProps = (state, ownProps) => {
  const todos = state.todos.filter(todo => todo.categoryId === ownProps.match.params.categoryId);
  return {
    completedProgress: calcCompleted(todos)
  }
};


export default Home = connect(mapStateToProps)(Home);