// 用于处理计算机计算的reducer
import * as Actions from '../constant'
const initState = 0
export default function miniComputerReducer (preState = initState, action) {
   const { type, data } = action
   switch (type) {
   case Actions.INCREMENT_REDUCER:
      return preState + data
   case Actions.DECREMENT_REDUCER:
      return preState - data
   case Actions.MULTIPLICATION_REDUCER:
      return preState * data
   case Actions.DIVISION_REDUCER:
      return preState / data
   default:
      return preState
   }
}
