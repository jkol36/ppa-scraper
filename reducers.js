import * as C from './constants'


export const customers = (state=[], action) => {
  switch(action.type) {
    case C.CUSTOMER_ADDED:
      return [...state, action.customer];
    default:
      return state;
  }
}

export const page = (state=1, action) => {
  switch(action.type) {
    case C.CHANGE_PAGE:
      return action.page; // where payload is a number
    default:
      return state;
  }
}

