import {
    createStore,
    combineReducers,
    applyMiddleware
  } from 'redux'
  import thunk from 'redux-thunk'
  import {
    customers,
    page,
    locations
  } from './reducers'
  
  export const store = createStore(combineReducers({
    customers,
    page,
    locations
  }), applyMiddleware(thunk));