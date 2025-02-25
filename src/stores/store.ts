import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../features/products/products.slice"
import alertReducer from "../features/alert/alert.slice";

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        products: productReducer
    }
})