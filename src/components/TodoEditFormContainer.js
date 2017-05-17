import {connect} from 'react-redux';
import TodoEditForm from './TodoEditForm';
import {saveEditTodo} from '../redux/actions';

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
    saveEditTodo: todo => { dispatch(saveEditTodo(todo))}
	}
};

const TodoEditFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEditForm);

export default TodoEditFormContainer;