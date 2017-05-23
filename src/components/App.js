import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import {Grid} from 'react-bootstrap';

import ModalContainer from './ModalContainer';
import Home from './Home';
import TodoEditContainer from './TodoEditContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/categories"/>
            )}/>
            <Route exact path="/categories/:categoryId?" component={Home}/>
            <Route path="/todo/:id" component={TodoEditContainer} />
            <Route render={() => <h1 style={{textAlign: 'center'}}>Запрашиваемой страницы не существует</h1>} />
          </Switch>
          <ModalContainer/>
        </Grid>
      </Router>
    );
  }
}

export default App;
