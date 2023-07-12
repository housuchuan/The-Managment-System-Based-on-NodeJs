import { PERSON_ADD } from '../constant'
// 用户数据
const initPerson = []
export default function person (preState = initPerson, action) {
   const { type, data } = action
   console.log(11122)
   switch (type) {
   case PERSON_ADD:
      return [...preState, data]
   default:
      return preState
   }
}
