
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as productAPI from "./products.api";
import { UpdateThunk } from "../../common/types/update-thunk.type";
import { UpdateProduct } from "./types/update-product.type";
import { CreateProduct } from "./types/create-product.type";
import { QueryProduct } from "./interfaces/query-product.interface";
import { UUID } from "../../common/types/uuid.type";

// GET MANY
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (query: QueryProduct, { rejectWithValue }) => {
        try {
            return await productAPI.getProductsAPI(query);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// GET ONE
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id: UUID, { rejectWithValue }) => {
        try {
            return await productAPI.getProductByIdAPI(id);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// CREATE
export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (data: CreateProduct, { rejectWithValue }) => {
        try {
            return await productAPI.createProductAPI(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// UPDATE
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ id, data }: UpdateThunk<UUID, UpdateProduct>, { rejectWithValue }) => {
        try {
            return await productAPI.updateProductAPI(id, data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// REMOVE
export const removeProduct = createAsyncThunk(
    "products/removeProduct",
    async (id: UUID, { rejectWithValue }) => {
        try {
            await productAPI.removeProductAPI(id);
            return id
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
