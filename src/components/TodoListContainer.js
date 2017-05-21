import {connect} from 'react-redux';
import {addTodo, toggleTodo, fillEditTodoForm} from '../redux/actions';
import TodoList from './TodoList';


const mapStateToProps = (state, ownProps) => {
  const categoryId = ownProps.match.params.categoryId;
  return {
    todos: state.todos.filter(todo => todo.categoryId === categoryId),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (categoryId, text) => dispatch(addTodo(categoryId, text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    fillEditTodoForm: todo => dispatch(fillEditTodoForm(todo)),
  }
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;