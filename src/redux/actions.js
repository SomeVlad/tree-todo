import shortid from 'shortid'

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const SAVE_EDIT_CATEGORY = 'SAVE_EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = "EDIT_TODO";
export const CANCEL_EDIT_TODO = 'CANCEL_EDIT_TODO';
export const SAVE_EDIT_TODO = 'SAVE_EDIT_TODO';
export const TOGGLE_COLLAPSE_CATEGORY = 'TOGGLE_COLLAPSE_CATEGORY';

export function addCategory(name, parentId) {
  return {
    type: ADD_CATEGORY,
    payload: {
      name,
      id: shortid.generate(),
      parentId: parentId || null,
      children: [],
      collapsed: false,
    }
  }
}

export function addSubcategory(parentId) {
  return {
    type: ADD_SUBCATEGORY,
    payload: parentId,
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function editCategory(id, currentName) {
  return {
    type: EDIT_CATEGORY,
    payload: {
      id,
      currentName, 
    },
  }
}

export function saveCategory(id, name) {
  return {
    type: SAVE_EDIT_CATEGORY,
    payload: {
      id,
      name,
    }
  }
}

export function deleteCategories(categories) {
  return {
    type: DELETE_CATEGORY,
    payload: categories,
  }
}

export function setActiveCategory(id) {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: id,
  }
}

export function addToDo(categoryId, text) {
  return {
    type: ADD_TODO,
    payload: {
      categoryId,
      text,
      id: shortid.generate(),
      completed: false,
      description: '',
    },
  }
}

export function deleteToDos(toDos) {
  return {
    type: DELETE_TODOS,
    payload: toDos,
  }
}

export function toggleToDo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}

export function editToDo(id) {
  return {
    type: EDIT_TODO,
    payload: id,
  }
}

export function cancelEditToDo() {
  return {
    type: CANCEL_EDIT_TODO,
  }
}

export function saveEditToDo(todo) {
  return {
    type: SAVE_EDIT_TODO,
    payload: todo,
  }
}

export function toggleCollapseCategory(id) {
  return {
    type: TOGGLE_COLLAPSE_CATEGORY,
    id,
  }
}