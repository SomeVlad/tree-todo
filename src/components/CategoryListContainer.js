import {connect} from 'react-redux';
import CategoryList from './CategoryList';
import {addCategory, addSubcategory, editCategory, deleteCategories, setActiveCategory} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: name => dispatch(addCategory(name)),
    addSubcategory: parentId => dispatch(addSubcategory(parentId)),
    editCategory: (id, currentName) => dispatch(editCategory(id, currentName)),
    deleteCategories: categories => dispatch(deleteCategories(categories)),
    setActiveCategory: id => dispatch(setActiveCategory(id)),
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;