import { Mongoose } from "mongoose"
import * as C from '../constants'

export const changePage = (toPage) => dispatch => {
  return new Promise(resolve => {
    dispatch({
        type: C.CHANGE_PAGE,
        page: toPage
    })
    resolve(toPage)
  })

}