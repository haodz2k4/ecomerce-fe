import { createSlice } from "@reduxjs/toolkit";
import { GeneralInitialState } from "../../common/interfaces/general-initial-state";
import { User } from "./interfaces/user.interface";
import { LoadingConstant } from "../../constants/loading.constant";
import {
    fetchUsers,
    fetchCurrentUser,
    updateCurrentUser,
    createUser,
    updateUser,
    fetchUserById,
    removeUser
} from "./users.thunk";

const initialState: GeneralInitialState<User> = {
    pagination: null,
    items: [],
    item: null,
    currentUser: null,
    loading: LoadingConstant.IDLE,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Fetch users
            .addCase(fetchUsers.pending, (state) => {
                state.loading = LoadingConstant.PENDING;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = LoadingConstant.SUCCEEDED;
                state.items = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = LoadingConstant.FAILED;
                state.error = action.payload;
            })
            //Fetch current user
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })

            //Update current user
            .addCase(updateCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            //Create user
            .addCase(createUser.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            //Update user
            .addCase(updateUser.fulfilled, (state, action) => {
                state.items = state.items.map(user => user.id === action.payload.id ? action.payload : user);
            })

            //Fetch user by ID
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.item = action.payload;
            })
            //Remove user
            .addCase(removeUser.fulfilled, (state, action) => {
                state.items = state.items.filter(user => user.id !== action.payload);
            }
        );
    }
})

export default userSlice.reducer
