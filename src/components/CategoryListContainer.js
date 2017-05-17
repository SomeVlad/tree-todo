import {connect} from 'react-redux';
import CategoryList from './CategoryList';
import {
  addCategory,
  openAddSubcategoryModal,
  openEditCategoryModal,
  deleteCategories,
  setActiveCategory,
  deleteTodos,
  toggleCollapseCategory,
  moveTodo
} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
    todos: state.todos,
    editTodo: state.editTodo,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: name => dispatch(addCategory(name)),
    openAddSubcategoryModal: id => dispatch(openAddSubcategoryModal(id)),
    openEditCategoryModal: (id, currentName) => dispatch(openEditCategoryModal(id, currentName)),
    deleteCategories: (categoryId, parentId, categories) => dispatch(deleteCategories(categoryId, parentId, categories)),
    setActiveCategory: id => dispatch(setActiveCategory(id)),
    toggleCollapseCategory: id => dispatch(toggleCollapseCategory(id)),
    deleteTodos: todos => dispatch(deleteTodos(todos)),
    moveTodo: (todoId, categoryId) => dispatch(moveTodo(todoId, categoryId)),
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;