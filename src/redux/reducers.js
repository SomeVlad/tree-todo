import { combineReducers } from 'redux';
import {
  ADD_CATEGORY,
  OPEN_ADD_SUBCATEGORY_MODAL,
  CLOSE_MODAL,
  OPEN_EDIT_CATEGORY_MODAL,
  SAVE_EDIT_CATEGORY,
  DELETE_CATEGORY,
  ADD_TODO,
  DELETE_TODOS,
  TOGGLE_TODO,
  SAVE_EDIT_TODO,
  TOGGLE_COLLAPSE_CATEGORY,
  CHANGE_EDIT_TODO_VALUE,
  FILL_EDIT_TODO_FORM,
} from './actions';


const initialModal = {
  show: false,
  mode: null,
  parentId: null,
  categoryId: null,
};

const initialTodoEditForm = {
  id: null,
  categoryId: null,
  completed: false,
  name: '',
  description: '',
}

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const newCategory = action.payload;
      const newState = state.map(category => {
        if(category.id === newCategory.parentId) {
          return {
            ...category,
            children: [...category.children, newCategory.id]
          }
        } else {
          return category
        }
      });
      return [newCategory, ...newState];
    case SAVE_EDIT_CATEGORY:
      return state.map(category => {
        if(category.id === action.payload.id) {
          return {
            ...category,
            name: action.payload.name
          }
        } else {
          return category;
        }
      });
    case DELETE_CATEGORY:
      return state
        .filter(category => action.categories.indexOf(category.id) === -1)
        .map(category => {
          if(category.id === action.parentId){
            return {
              ...category,
              children: category.children.filter(child => child !== action.categoryId),
            }
          }
          return category;
        });
    case TOGGLE_COLLAPSE_CATEGORY:
      return state.map(category => {
        if(category.id === action.id) {
          return {
            ...category,
            collapsed: !category.collapsed,
          }
        } else {
          return category;
        }
      });
    default:
      return state;
  }
};

const modal = (state = initialModal, action) => {
  switch (action.type) {
    case OPEN_ADD_SUBCATEGORY_MODAL:
      return {
        ...state,
        show: true,
        mode: 'add',
        parentId: action.parentId,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
        parentId: null,
        categoryId: null,
        mode: null,
      };
    case OPEN_EDIT_CATEGORY_MODAL:
      return {
        ...state,
        show: true,
        mode: 'edit',
        categoryId: action.id,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_TODOS:
      return state.filter(todo => action.payload.indexOf(todo.id) === -1);
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        } else {
          return todo;
        }
      });
    case SAVE_EDIT_TODO:
      return state.map(todo => {
        if(todo.id === action.todo.id) {
          return {...action.todo}
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const todoEditForm = (state = initialTodoEditForm, action) => {
  switch (action.type) {
    case FILL_EDIT_TODO_FORM:
      return {
        ...state,
        ...action.todo,
      }
    case CHANGE_EDIT_TODO_VALUE:
      return {
        ...state,
        ...action.todoField,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({todos, categories, modal, todoEditForm});

export default rootReducer;