import { Mongoose } from "mongoose"
import * as C from '../constants'

export const changePage = (toPage) => dispatch => {
  console.log('changing page')
  return new Promise(resolve => {
    resolve(dispatch({
        type: C.CHANGE_PAGE,
        page: toPage
    }))
  })

}

export const addCustomer = customer => dispatch => {
  return new Promise(resolve => {
    resolve(dispatch({
      type: C.CUSTOMER_ADDED,
      customer
    }))
  })
}