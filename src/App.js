import React, { Component } from 'react';
import {Col, Grid} from 'react-bootstrap';
import {connect} from 'react-redux';
// import FilterContainer from './FilterContainer';
// import StatusBarContainer from './StatusBarContainer';
import CategoryListContainer from './components/CategoryListContainer';
import ToDoListContainer from './components/ToDoListContainer';
import ModalContainer from './components/ModalContainer';
import ToDoEditContainer from './components/ToDoEditContainer';

class App extends Component {
  render() {
    const {showEditToDo} = this.props;
    return (
      <Grid>
        {/*<FilterContainer />*/}
        {/*<StatusBarContainer />*/}
        <Col md={5}>
          <CategoryListContainer />
        </Col>
        <Col md={7}>
          {!showEditToDo ? 
            <ToDoListContainer />
            :
            <ToDoEditContainer />
          }
        </Col>
        <ModalContainer />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    showEditToDo: state.editToDo.show,
  }
}

export default connect(mapStateToProps)(App);
