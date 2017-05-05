import { combineReducers } from 'redux';
import shortid from 'shortid';
import {
  ADD_CATEGORY,
  SHOW_MODAL,
  CLOSE_MODAL,
} from './actions';

const initialCategories = [
  {
    name: 'category1',
    id: shortid.generate(),
    parentId: null,
    children: [],
  },
  {
    name: 'category2',
    id: shortid.generate(),
    parentId: null,
    children: [],
  }
];

const initialModal = {
  show: false,
  parentId: null,
};

const categories = (state = initialCategories, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const newCategory = action.payload;
      const newState = state.map(category => {
        if(category.id !== newCategory.parentId) {
          return category
        }
        return {
          ...category,
          children: [...category.children, newCategory.id]
        }
      });
      return [newCategory, ...newState];
    default:
      return state;
  }
};

const modal = (state = initialModal, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        parentId: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
        parentId: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({categories, modal});

export default rootReducer;