import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../features/products/products.slice"
import alertReducer from "../features/alert/alert.slice";
import authReducer from "../features/auth/auth.slice";
export const store = configureStore({
    reducer: {
        alert: alertReducer,
        products: productReducer,
        auth: authReducer
    }
})