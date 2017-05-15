import {connect} from 'react-redux';
import {cancelEditTodo, saveEditTodo} from '../redux/actions';
import TodoEdit from './TodoEdit';

const mapStateToProps = state => {
	const todo = state.todos.find(todo => todo.id === state.editTodo.id);
  return {
  	id: todo.id,
  	text: todo.text,
  	completed: todo.completed,
  	description: todo.description,
  }
};

const mapDispatchToProps = dispatch => {
  return {
  	cancelEditTodo: () => dispatch(cancelEditTodo()),
  	saveEditTodo: todo => dispatch(saveEditTodo(todo))
  }
};

const TodoEditContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEdit);

export default TodoEditContainer;