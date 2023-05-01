import { configureStore } from '@reduxjs/toolkit'
import amazoneReducer from "../redux/amazonSlice"

const store = configureStore({
  reducer: {
    cartreducer :   amazoneReducer , 
  },
})
export default store;