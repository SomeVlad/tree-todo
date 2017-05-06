import {connect} from 'react-redux';
import CategoryList from './CategoryList';
import {addCategory, addSubcategory, editCategory} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: name => dispatch(addCategory(name)),
    addSubcategory: parentId => dispatch(addSubcategory(parentId)),
    editCategory: (id, currentName) => dispatch(editCategory(id, currentName)),
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;