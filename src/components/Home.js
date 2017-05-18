import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import FilterContainer from './FilterContainer';
import CategoryListContainer from './CategoryListContainer';


const Home = (props) => {
  return (
    <Grid>
      <Row>
        <Col md={6}><h1>Todo List</h1></Col>
        <Col md={6}><FilterContainer/></Col>
      </Row>
      <Row>
        <Col md={5}><CategoryListContainer history={props.history}/></Col>
      </Row>
    </Grid>
  )
};

export default Home;