import {connect} from 'react-redux';
import CategoryList from './CategoryList';
import {addCategory, showModal} from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name) => {
      dispatch(addCategory(name));
    },
    showModal: (parentId) => {
      dispatch(showModal(parentId));
    }
  }
};

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;