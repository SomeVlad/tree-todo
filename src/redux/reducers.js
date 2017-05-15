import { combineReducers } from 'redux';
import {
  ADD_CATEGORY,
  OPEN_ADD_SUBCATEGORY_MODAL,
  CLOSE_MODAL,
  OPEN_EDIT_CATEGORY_MODAL,
  SAVE_EDIT_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  DELETE_TODOS,
  TOGGLE_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  SAVE_EDIT_TODO,
  TOGGLE_COLLAPSE_CATEGORY,
  MOVE_TODO,
} from './actions';

const initialCategories = [
  {
    name: 'category1',
    id: 1,
    parentId: null,
    children: [],
    collapsed: false,
  },
  {
    name: 'category2',
    id: 2,
    parentId: null,
    children: [],
    collapsed: false,
  }
];

const initialModal = {
  show: false,
  mode: null,
  parentId: null,
  categoryId: null,
};

const initialEditTodo = {
  show: false,
  id: null,
};

const initialTodos = [
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
      return state.filter(category => action.payload.indexOf(category.id) === -1);
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

const activeCategory = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

const todos = (state = initialTodos, action) => {
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
      const newTodo = action.payload;
      return state.map(todo => {
        if(todo.id === newTodo.id) {
          return {
            ...todo,
            text: newTodo.text,
            completed: newTodo.completed,
            description: newTodo.description,
          }
        } else {
          return todo;
        }
      });
    case MOVE_TODO:
      return state.map(todo => {
        if(todo.id === action.todoId) {
          return {
            ...todo,
            categoryId: action.categoryId,
          }
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const editTodo = (state = initialEditTodo, action) => {
  switch (action.type) {
    case EDIT_TODO:
      return {
        ...state,
        show: true,
        id: action.payload,
      };
    case CANCEL_EDIT_TODO:
      return {
        ...state,
        show: false,
        id: null,
      };
    case SAVE_EDIT_TODO:
      return {
        ...state,
        show: false,
        id: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({todos,categories, modal, activeCategory, editTodo});

export default rootReducer;