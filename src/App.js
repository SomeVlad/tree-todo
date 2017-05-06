import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
// import FilterContainer from './FilterContainer';
// import StatusBarContainer from './StatusBarContainer';
import CategoryListContainer from './components/CategoryListContainer';
// import ToDoListContainer from './ToDoListContainer';
import ModalContainer from './components/ModalContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/*<FilterContainer />*/}
        {/*<StatusBarContainer />*/}
        <CategoryListContainer />
        {/*<ToDoListContainer />*/}
        <ModalContainer />
      </div>
    );
  }
}

export default App;