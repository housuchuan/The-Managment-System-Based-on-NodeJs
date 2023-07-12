// 定义所有的actions
import * as Actions from '../constant'
export const INCREMENT_ACTION = (data) => ({ type: Actions.INCREMENT_REDUCER, data })
export const DECREMENT_ACTION = (data) => ({ type: Actions.DECREMENT_REDUCER, data })
export const MULTIPLICATION_ACTION = (data) => ({ type: Actions.MULTIPLICATION_REDUCER, data })
export const DIVISION_ACTION = (data) => ({ type: Actions.DIVISION_REDUCER, data })
export const ASYNC_INCREMENT_ACTION = (data, time) => (dispatch) => {
   setTimeout(() => {
      dispatch(INCREMENT_ACTION(data))
   }, time)
}
