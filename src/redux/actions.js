import shortid from 'shortid'

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';


export function addCategory(name, parentId) {
  return {
    type: ADD_CATEGORY,
    payload: {
      name,
      id: shortid.generate(),
      parentId: parentId || null,
      children: [],
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
    type: SAVE_CATEGORY,
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

