import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../HouseDetails/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})