import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { loadState, saveState } from '../localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
  saveState({
    categories: store.getState().categories,
    todos: store.getState().todos,
  });
});

export default store;