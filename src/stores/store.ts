import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../features/products/products.slice"
import alertReducer from "../features/alert/alert.slice";
import authReducer from "../features/auth/auth.slice";
import notificationReducer from "../features/notifications/notification.slice";
export const store = configureStore({
    reducer: {
        alert: alertReducer,
        notification: notificationReducer,
        products: productReducer,
        auth: authReducer
    }
})