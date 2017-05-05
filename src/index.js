import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
