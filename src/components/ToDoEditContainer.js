import {connect} from 'react-redux';
import {cancelEditToDo, saveEditToDo} from '../redux/actions';
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
  	saveEditToDo: toDo => dispatch(saveEditToDo(toDo))
  }
};

const ToDoEditContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoEdit);

export default ToDoEditContainer;