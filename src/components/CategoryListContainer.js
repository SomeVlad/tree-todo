import {connect} from 'react-redux';
import CategoryList from './CategoryList';
import {
  addCategory,
  addSubcategory,
  editCategory,
  deleteCategories,
  setActiveCategory,
  deleteToDos,
  toggleCollapseCategory
} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
    toDos: state.toDos,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: name => dispatch(addCategory(name)),
    addSubcategory: (e, id) => {
      e.stopPropagation();
      dispatch(addSubcategory(id))
    },
    editCategory: (e, id, currentName) => {
      e.stopPropagation();
      dispatch(editCategory(id, currentName))
    },
    deleteCategories: categories => dispatch(deleteCategories(categories)),
    setActiveCategory: (e, id) => {
      e.stopPropagation();
      dispatch(setActiveCategory(id))
    },
    deleteToDos: toDos => dispatch(deleteToDos(toDos)),
    toggleCollapseCategory: (e, id) => {
      e.stopPropagation();
      dispatch(toggleCollapseCategory(id))
    }
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;