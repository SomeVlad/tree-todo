import {connect} from 'react-redux';
import {addToDo, toggleToDo} from '../redux/actions';
import ToDoList from './ToDoList';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
    toDos: state.toDos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (categoryId, text) => {dispatch(addToDo(categoryId, text))},
    toggleToDo: id => {dispatch(toggleToDo(id))},
  }
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;