import React, { Component } from 'react';
import {Col, Grid} from 'react-bootstrap';
// import FilterContainer from './FilterContainer';
// import StatusBarContainer from './StatusBarContainer';
import CategoryListContainer from './components/CategoryListContainer';
import ToDoListContainer from './components/ToDoListContainer';
import ModalContainer from './components/ModalContainer';

class App extends Component {
  render() {
    return (
      <Grid>
        {/*<FilterContainer />*/}
        {/*<StatusBarContainer />*/}
        <Col md={6}>
          <CategoryListContainer />
        </Col>
        <Col md={6}>
          <ToDoListContainer />
        </Col>
        <ModalContainer />
      </Grid>
    );
  }
}

export default App;