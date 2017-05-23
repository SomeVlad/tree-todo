import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { Route } from 'react-router-dom'

import FilterContainer from './FilterContainer';
import CategoryListContainer from './CategoryListContainer';
import TodoListContainer from './TodoListContainer';


const Home = (props) => {
  const { match, history, location } = props;
  return (
    <div>
      <Row>
        <Col md={6}><h1>Todo List</h1></Col>
        <Col md={6}>
          <FilterContainer location={location} match={match}  history={history}/>
        </Col>
      </Row>
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

export default Home;