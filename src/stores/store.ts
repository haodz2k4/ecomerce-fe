import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/products/products.slice";
import alertReducer from "../features/alert/alert.slice";
import authReducer from "../features/auth/auth.slice";
import notificationReducer from "../features/notifications/notification.slice";
import userReducer from "../features/users/users.slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import uploadReducer from "../features/upload/upload.slice"

const rootReducer = combineReducers({
    alert: alertReducer,
    notification: notificationReducer,
    products: productReducer,
    auth: authReducer,
    users: userReducer,
    upload: uploadReducer
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
