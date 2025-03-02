import { LoadingConstant } from '../../constants/loading.constant';
import { createCart, fetchCart, removeCart, updateCart } from './carts.thunk';
import { CartState } from './interfaces/cart-state.interface';
import { createSlice } from "@reduxjs/toolkit";



const initialState: CartState  = {
    cart: null,
    loading: LoadingConstant.IDLE,
    error: null
}
const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //GET CART 
        builder
        .addCase(fetchCart.pending, (state) => {
            state.loading = LoadingConstant.PENDING
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            state.cart = action.payload;
        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.loading = LoadingConstant.FAILED;
            state.error = action.payload as string;
        })
        //CREATE CART
        .addCase(createCart.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            state.cart?.cartsItems.unshift(action.payload)
        })
        .addCase(updateCart.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            const index = state.cart?.cartsItems.findIndex((item) => item.id === action.payload);
            state.cart?.cartsItems[index] = action.payload;
        })
        .addCase(removeCart.fulfilled, (state, action) => {
            
        })
    }
})


export default cartSlice.reducer