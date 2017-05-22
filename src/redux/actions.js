import shortid from 'shortid'

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const OPEN_ADD_SUBCATEGORY_MODAL = 'OPEN_ADD_SUBCATEGORY_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_EDIT_CATEGORY_MODAL = 'OPEN_EDIT_CATEGORY_MODAL';
export const SAVE_EDIT_CATEGORY = 'SAVE_EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = "EDIT_TODO";
export const CANCEL_EDIT_TODO = 'CANCEL_EDIT_TODO';
export const SAVE_EDIT_TODO = 'SAVE_EDIT_TODO';
export const TOGGLE_COLLAPSE_CATEGORY = 'TOGGLE_COLLAPSE_CATEGORY';
export const CHANGE_EDIT_TODO_VALUE = "CHANGE_EDIT_TODO_VALUE";
export const FILL_EDIT_TODO_FORM = "FILL_EDIT_TODO_FORM";
export const RESET_EDIT_TODO_FORM = 'RESET_EDIT_TODO_FORM';
export const CHANGE_FILTER = "CHANGE_FILTER";

export function addSubCategory(name, parentId) {
  return (dispatch, getState) => {
    const parentCategory = getState().categories.find(category => category.id === parentId);
    dispatch(addCategory(name, parentId));
    if(!parentCategory.collapsed){
      dispatch(toggleCollapseCategory(parentId))
    }
  }
}

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

export function openAddSubcategoryModal(parentId) {
  return {
    type: OPEN_ADD_SUBCATEGORY_MODAL,
    parentId,
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function openEditCategoryModal(id) {
  return {
    type: OPEN_EDIT_CATEGORY_MODAL,
    id,
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

export function deleteCategories(categoryId, parentId, categories) {
  return {
    type: DELETE_CATEGORY,
    categoryId,
    parentId,
    categories,
  }
}

export function addTodo(categoryId, name) {
  return {
    type: ADD_TODO,
    payload: {
      categoryId,
      name,
      id: shortid.generate(),
      completed: false,
      description: '',
    },
  }
}

export function deleteTodos(todos) {
  return {
    type: DELETE_TODOS,
    payload: todos,
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}

export function saveEditTodo(todo) {
  return {
    type: SAVE_EDIT_TODO,
    todo,
  }
}

export function toggleCollapseCategory(id) {
  return {
    type: TOGGLE_COLLAPSE_CATEGORY,
    id,
  }
}

export function fillEditTodoForm(todo) {
  return {
    type: FILL_EDIT_TODO_FORM,
    todo,
  }
}

export function changeTodoEditValue(todoField) {
  return {
    type: CHANGE_EDIT_TODO_VALUE,
    todoField,
  }
}

export function resetEditTodoForm() {
  return {
    type: RESET_EDIT_TODO_FORM,
  }
}

export function changeFilters(filters) {
  return {
    type: CHANGE_FILTER,
    filters,
  }
}