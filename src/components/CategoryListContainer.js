import {connect} from 'react-redux';
import CategoryList from './CategoryList';
import {
  addCategory,
  addSubcategory,
  editCategory,
  deleteCategories,
  setActiveCategory,
  deleteToDos
} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
    toDos: state.toDos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: name => dispatch(addCategory(name)),
    addSubcategory: parentId => dispatch(addSubcategory(parentId)),
    editCategory: (id, currentName) => dispatch(editCategory(id, currentName)),
    deleteCategories: categories => dispatch(deleteCategories(categories)),
    setActiveCategory: id => dispatch(setActiveCategory(id)),
    deleteToDos: toDos => dispatch(deleteToDos(toDos)),
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;