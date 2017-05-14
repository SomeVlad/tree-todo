import { combineReducers } from 'redux';
import {
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  CLOSE_MODAL,
  EDIT_CATEGORY,
  SAVE_EDIT_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  DELETE_TODOS,
  TOGGLE_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  SAVE_EDIT_TODO,
} from './actions';

const initialCategories = [
  {
    name: 'category1',
    id: 1,
    parentId: null,
    children: [],
  },
  {
    name: 'category2',
    id: 2,
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

const initialEditTodo = {
  show: false,
  id: null,
};

const initialToDos = [
  {
    categoryId: 1,
    text: 'buy some milk',
    id: 1,
    completed: false,
    description: 'some boring description',
  }
];

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
    case SAVE_EDIT_CATEGORY:
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

const toDos = (state = initialToDos, action) => {
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
    case SAVE_EDIT_TODO:
      const newTodo = action.payload;
      return state.map(todo => {
        if(todo.id === newTodo.id) {
          return {
            ...todo,
            text: newTodo.text,
            completed: newTodo.completed,
            description: newTodo.description,
          }
        }
        return todo;
      });
    default:
      return state;
  }
};

const editToDo = (state = initialEditTodo, action) => {
  switch (action.type) {
    case EDIT_TODO:
      return {
        ...state,
        show: true,
        id: action.payload,
      }
    case CANCEL_EDIT_TODO:
      return {
        ...state,
        show: false,
        id: null,
      }
    case SAVE_EDIT_TODO:
      return {
        ...state,
        show: false,
        id: null,
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({toDos,categories, modal, activeCategory, editToDo});

export default rootReducer;