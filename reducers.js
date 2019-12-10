import * as C from './constants'


export const customers = (state=[], action) => {
  switch(action.type) {
    case C.INITIAL_CUSTOMERS:
    case C.CUSTOMERS_ADDED:
      return action.customers
    default:
      return state
  }
}

export const page = (state=1, action) => {
  switch(action.type) {
    case C.INCREMENT:
      return state + action.payload // where payload is a number
    default:
      return state
  }
}