import shortid from 'shortid'

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function addCategory(name, parentId) {
  return {
    type: ADD_CATEGORY,
    payload: {
      name: name,
      id: shortid.generate(),
      parentId: parentId || null,
      children: [],
    }
  }
}

export function showModal(parentId) {
  return {
    type: SHOW_MODAL,
    payload: parentId,
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}