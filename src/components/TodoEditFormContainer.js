import {connect} from 'react-redux';
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
  return {}
};

const TodoEditFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEditForm);

export default TodoEditFormContainer;