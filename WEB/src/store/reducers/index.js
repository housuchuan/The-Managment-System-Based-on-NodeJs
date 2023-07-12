import { combineReducers } from 'redux'
import miniComputerReducer from './mini_computer'
import personReducer from './person'
export default combineReducers({
   computer: miniComputerReducer,
   person: personReducer
})
