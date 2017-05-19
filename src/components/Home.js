import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import { Route } from 'react-router-dom'

import FilterContainer from './FilterContainer';
import CategoryListContainer from './CategoryListContainer';
import TodoListContainer from './TodoListContainer';


const Home = (props) => {
  return (
    <Grid>
      <Row>
        <Col md={6}><h1>Todo List</h1></Col>
        <Col md={6}>
          <FilterContainer/>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <CategoryListContainer history={props.history}/>
        </Col>
        <Col md={7}>
          <Route path="/:categoryId" component={TodoListContainer}/>
        </Col>
      </Row>
    </Grid>
  )
};

export default Home;