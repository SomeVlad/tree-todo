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


// const initialCategories = [
//   {
//     name: 'category1',
//     id: 1,
//     parentId: null,
//     children: null,
//   },
//   {
//     name: 'category2',
//     id: 2,
//     parentId: null,
//     children: [3],
//   },
//   {
//     name: 'category3',
//     id: 3,
//     parentId: 2,
//     children: [4],
//   },
//   {
//     name: 'category4',
//     id: 4,
//     parentId: 3,
//     children: null,
//   },
//   {
//     name: 'category5',
//     id: 5,
//     parentId: null,
//     children: [],
//   },
// ];

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
      return [...newState, newCategory];
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