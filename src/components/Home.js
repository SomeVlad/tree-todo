import React, { Component } from 'react';
import {Col, Grid} from 'react-bootstrap';
import {connect} from 'react-redux';
// import FilterContainer from './FilterContainer';
// import StatusBarContainer from './StatusBarContainer';
import CategoryListContainer from './CategoryListContainer';
import TodoListContainer from './TodoListContainer';
import ModalContainer from './ModalContainer';
import TodoEditContainer from './TodoEditContainer';

class Home extends Component {
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

export default connect(mapStateToProps)(Home);
