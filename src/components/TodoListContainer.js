import {connect} from 'react-redux';
import {addTodo, toggleTodo, editTodo} from '../redux/actions';
import TodoList from './TodoList';


const mapStateToProps = (state) => {
  return {
    todos: state.todos.filter(todo => todo.categoryId === state.activeCategory),
    activeCategory: state.activeCategory,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (categoryId, text) => dispatch(addTodo(categoryId, text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
  }
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;