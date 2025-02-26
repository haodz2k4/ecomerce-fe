import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerAPI, loginAPI, logoutAPI } from "./auth.api";
import { Register } from "./types/register.type";
import { Login } from "./interfaces/login.interface";

// Register Thunk
export const registerUser = createAsyncThunk(
    "auth/register",
    async (data: Register, { rejectWithValue }) => {
        try {
            return await registerAPI(data);
            
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Registration failed");
        }
    }
);

// Login Thunk
export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }: Login, { rejectWithValue }) => {
        try {
            return await loginAPI(email, password);
            
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// Logout Thunk
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await logoutAPI();
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Logout failed");
        }
    }
);
