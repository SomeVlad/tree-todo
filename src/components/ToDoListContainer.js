import {connect} from 'react-redux';
import {addToDo, toggleToDo, editToDo} from '../redux/actions';
import ToDoList from './ToDoList';


const mapStateToProps = (state) => {
  return {
    toDos: state.toDos.filter(toDo => toDo.categoryId === state.activeCategory),
    activeCategory: state.activeCategory,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (categoryId, text) => dispatch(addToDo(categoryId, text)),
    toggleToDo: id => dispatch(toggleToDo(id)),
    editToDo: id => dispatch(editToDo(id)),
  }
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;