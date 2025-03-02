import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartAPI, createCartAPI, updateCartAPI, removeCartAPI } from "./carts.api";
import { CreateCart } from "./types/create-cart.type";
import { UpdateCart } from "./types/update-cart.type";

//FETCH CART
export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue }) => {
    try {
        const data = await getCartAPI();
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// CREATE CART
export const createCart = createAsyncThunk("cart/createCart", async (createCartData: CreateCart, { rejectWithValue }) => {
    try {
        const data = await createCartAPI(createCartData);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// UPDATE CART
export const updateCart = createAsyncThunk("cart/updateCart", async (updateCartData: UpdateCart, { rejectWithValue }) => {
    try {
        const data = await updateCartAPI(updateCartData);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// REMOVE CART 
export const removeCart = createAsyncThunk("cart/removeCart", async (productId: string, { rejectWithValue }) => {
    try {
        await removeCartAPI(productId);
        return productId;
    } catch (error) {
        return rejectWithValue(error);
    }
});
