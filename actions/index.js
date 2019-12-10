import { Mongoose } from "mongoose"
import * as C from '../constants'

export const changePage = (toPage) => dispatch => {
    dispatch({
        type: C.CHANGE_PAGE,
        page: toPage
    })
    return toPage

}