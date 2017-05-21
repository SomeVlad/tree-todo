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
} from '../redux/actions';


const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    todos: state.todos,
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
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;