import { combineReducers } from 'redux';
import shortid from 'shortid';
import {
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  CLOSE_MODAL,
  EDIT_CATEGORY,
  SAVE_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  DELETE_TODOS,
  TOGGLE_TODO,
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
  mode: null,
  parentId: null,
  id: null,
  defaultValue: null,
};

const categories = (state = initialCategories, action) => {
  switch (action.type) {

    case ADD_CATEGORY:
      const newCategory = action.payload;
      const newState = state.map(category => {
        if(category.id === newCategory.parentId) {
          return {
            ...category,
            children: [...category.children, newCategory.id]
          }
        }
        return category
      });
      return [newCategory, ...newState];

    case SAVE_CATEGORY:
      return state.map(category => {
        if(category.id === action.payload.id) {
          return {
            ...category,
            name: action.payload.name
          }
        }
        return category;
      });

      case DELETE_CATEGORY:
        return state.filter(category => action.payload.indexOf(category.id) === -1);

    default:
      return state;
  }
};

const modal = (state = initialModal, action) => {
  switch (action.type) {
    case ADD_SUBCATEGORY:
      return {
        ...state,
        show: true,
        mode: 'add',
        parentId: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
        parentId: null,
        mode: null,
        id: null,
        defaultValue: null,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        show: true,
        mode: 'edit',
        id: action.payload.id,
        defaultValue: action.payload.currentName,
      };
    default:
      return state;
  }
};

const activeCategory = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

const toDos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_TODOS:
      return state.filter(toDo => action.payload.indexOf(toDo.id) === -1);
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({toDos,categories, modal, activeCategory});

export default rootReducer;