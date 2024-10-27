import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './categorySlice'

const store = configureStore({ reducer: categoryReducer })

console.log(store.getState())

export default store