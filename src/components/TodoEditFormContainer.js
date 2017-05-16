import {connect} from 'react-redux';
import {cancelEditTodo, saveEditTodo} from '../redux/actions';
import TodoEditForm from './TodoEditForm';

const mapStateToProps = (state, ownProps) => {
	const todo = state.todos.find(todo => todo.id === ownProps.id);
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

const TodoEditFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEditForm);

export default TodoEditFormContainer;