import {
    createStore,
    combineReducers,
    applyMiddleware
  } from 'redux'
  import thunk from 'redux-thunk'
  import {
    customers,
    page
  } from './reducers'
  
  export const store = createStore(combineReducers({
    customers,
    page

  }), applyMiddleware(thunk));