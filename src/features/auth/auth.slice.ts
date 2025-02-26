import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./interfaces/auth.state";
import { LoadingConstant } from "../../constants/loading.constant";
import { registerUser, loginUser, logoutUser } from "./auth.thunk";

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    isAuth: false,
    loading: LoadingConstant.IDLE,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthState: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuth = false;
            state.loading = LoadingConstant.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            //REGISTER
            .addCase(registerUser.pending, (state) => {
                state.loading = LoadingConstant.PENDING;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = LoadingConstant.SUCCEEDED;
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log(action)
                state.loading = LoadingConstant.FAILED;
                state.error = action.payload as string;
            })
            //LOGIN
            .addCase(loginUser.pending, (state) => {
                state.loading = LoadingConstant.PENDING;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = LoadingConstant.SUCCEEDED;
                state.isAuth = true;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = LoadingConstant.FAILED;
                state.error = action.payload as string;
            })
            //LOGOUT
            .addCase(logoutUser.fulfilled, (state) => {
                state.accessToken = null;
                state.refreshToken = null;
                state.isAuth = false;
                state.loading = LoadingConstant.IDLE;
                state.error = null;
            });
    }
})

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
