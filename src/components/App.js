import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Grid} from 'react-bootstrap';

import ModalContainer from './ModalContainer';
import Home from './Home';
import TodoEdit from './TodoEdit';


class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Route exact path="/:categoryId?" component={Home}/>
          <Route path="/edit-todo/:id" component={TodoEdit} />
          <ModalContainer/>
        </Grid>
      </Router>
    );
  }
}

export default App;
