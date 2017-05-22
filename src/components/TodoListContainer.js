import {connect} from 'react-redux';
import {addTodo, toggleTodo, fillEditTodoForm} from '../redux/actions';
import TodoList from './TodoList';

const filterTodos = (todos, categoryId, filters) => {
  return todos.filter(todo => {
    return (
      todo.categoryId === categoryId
      && todo.name.toLowerCase().indexOf(filters.searchQuery.toLowerCase()) !== -1
      && (filters.showDone ? todo.completed : true)
    )
  })
};

const mapStateToProps = (state, ownProps) => {
  const categoryId = ownProps.match.params.categoryId;
  return {
    todos: filterTodos(state.todos, categoryId, state.filters),
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