import { PERSON_ADD } from '../constant'
// 触发用户新增行为
export const personAdd = (person) => ({ type: PERSON_ADD, data: person })
