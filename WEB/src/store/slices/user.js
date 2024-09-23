/**
 * @Description: 用户信息
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2024-04-28 18:17
 * @LastEditors: housc
 */
import { createSlice } from '@reduxjs/toolkit';

const initUser = localStorage.getItem('USER_INFO') ? JSON.parse(localStorage.getItem('USER_INFO')) : null

export const user = createSlice({
   name: 'user',
   initialState: {
      userInfo: initUser
   },
   reducers: {
      getUser: (state) => state.userInfo,
      updateUser: (state,action)=>{
         state.userInfo = { ...state.userInfo, ...action.payload }
         localStorage.setItem('USER_INFO',JSON.stringify(state.userInfo))
      },
      clearUser: (state) => {
         state.userInfo = null
         localStorage.removeItem('USER_INFO')
         window.location.replace('/')
      }
   }
})

export const { getUser,updateUser,clearUser } = user.actions
export default user.reducer
