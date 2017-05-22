import {connect} from 'react-redux';
import TodoEditForm from './TodoEditForm';
import {saveEditTodo, changeTodoEditValue, resetEditTodoForm} from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	return {
    editedTodo: state.todoEditForm,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveEditTodo: todo => dispatch(saveEditTodo(todo)),
    changeTodoEditValue: todoField => dispatch(changeTodoEditValue(todoField)),
    resetEditTodoForm: () => dispatch(resetEditTodoForm()),
	}
};

const TodoEditFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoEditForm);

export default TodoEditFormContainer;