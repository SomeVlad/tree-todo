import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  </Provider >,
  document.getElementById('root')
);
