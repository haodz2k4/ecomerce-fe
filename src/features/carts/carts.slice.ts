import { LoadingConstant } from '../../constants/loading.constant';
import { clearCart, createCart, fetchCart, removeCart, updateCart } from './carts.thunk';
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
            const index = state.cart?.cart_items.items.findIndex((item) => item.id === action.payload.id);
            if(index !== -1) {
                state.cart?.cart_items.items[index] = action.payload;
            } else {
                state.cart?.cart_items.items.unshift(action.payload);
            }
        })
        //UPDATE CART 
        .addCase(updateCart.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            const index = state.cart?.cart_items.items.findIndex((item) => item.id === action.payload.id);
            state.cart?.cart_items.items[index] = action.payload;
        })
        //DELETE CART 
        .addCase(removeCart.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            state.cart?.cart_items.items = state.cart?.cart_items.items.filter((item) => item.id !== action.payload);
        })
        //CLEAR CART 
        .addCase(clearCart.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            state.cart?.cart_items.items = []
        })
    }
})


export default cartSlice.reducer