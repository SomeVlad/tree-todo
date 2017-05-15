import React, { Component } from 'react';
import {Col, Grid} from 'react-bootstrap';
import {connect} from 'react-redux';
// import FilterContainer from './FilterContainer';
// import StatusBarContainer from './StatusBarContainer';
import CategoryListContainer from './components/CategoryListContainer';
import TodoListContainer from './components/TodoListContainer';
import ModalContainer from './components/ModalContainer';
import TodoEditContainer from './components/TodoEditContainer';

class App extends Component {
  render() {
    const {showEditTodo} = this.props;
    return (
      <Grid>
        {/*<FilterContainer />*/}
        {/*<StatusBarContainer />*/}
        <Col md={5}>
          <CategoryListContainer />
        </Col>
        <Col md={7}>
          {!showEditTodo ?
            <TodoListContainer />
            :
            <TodoEditContainer />
          }
        </Col>
        <ModalContainer />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    showEditTodo: state.editTodo.show,
  }
}

export default connect(mapStateToProps)(App);
