import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import FilterContainer from './FilterContainer';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import CategoryListContainer from './CategoryListContainer';
import TodoListContainer from './TodoListContainer';
import ModalContainer from './ModalContainer';
import {clearState} from '../localStorage';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
	        <Route path="/:id?" component={Home} />
	        <ModalContainer />
      	</div>
      </Router>
    );
  }
}

export default App;
