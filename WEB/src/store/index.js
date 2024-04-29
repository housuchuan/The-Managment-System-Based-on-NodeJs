import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'

export default configureStore({
   reducer: {
      user
   }
})
