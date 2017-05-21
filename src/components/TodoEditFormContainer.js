import {connect} from 'react-redux';
import TodoEditForm from './TodoEditForm';
import {saveEditTodo, changeTodoEditValue, resetEditTodoForm} from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	return {
    todo: state.todoEditForm,
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