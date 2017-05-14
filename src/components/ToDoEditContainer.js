import {connect} from 'react-redux';
import {cancelEditToDo} from '../redux/actions';
import ToDoEdit from './ToDoEdit';

const mapStateToProps = state => {
	const toDo = state.toDos.find(toDo => toDo.id === state.editToDo.id);
  return {
  	id: toDo.id,
  	text: toDo.text,
  	completed: toDo.completed,
  	description: toDo.description,
  }
};

const mapDispatchToProps = dispatch => {
  return {
  	cancelEditToDo: () => dispatch(cancelEditToDo()),
  }
};

const ToDoEditContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoEdit);

export default ToDoEditContainer;