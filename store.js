import {
    createStore,
    combineReducers,
    applyMiddleware
  } from 'redux'
  import thunk from 'redux-thunk'
  import {
    customers,
    page,
    locations,
    badges
  } from './reducers'
  
  export const store = createStore(combineReducers({
    customers,
    page,
    locations,
    badges
  }), applyMiddleware(thunk));