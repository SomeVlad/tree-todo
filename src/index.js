import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux';
import {Grid} from 'react-bootstrap';
import Home from './components/Home';
import TodoEdit from './components/TodoEdit';
import './index.css';
import {clearState} from './localStorage';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Grid>
        <button onClick={clearState}>clear localStorage</button>
        <Route exact path="/" component={Home} />
        <Route path="/edit/:id" component={TodoEdit}/>
      </Grid>
    </Router>
  </Provider >,
  document.getElementById('root')
);
