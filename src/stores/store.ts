import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/products/products.slice";
import alertReducer from "../features/alert/alert.slice";
import authReducer from "../features/auth/auth.slice";
import notificationReducer from "../features/notifications/notification.slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    alert: alertReducer,
    notification: notificationReducer,
    products: productReducer,
    auth: authReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
});

export const persistor = persistStore(store);
