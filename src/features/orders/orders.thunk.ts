import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryOrder } from "./interfaces/query-order.interface";
import { createOrderAPI, getOrderByIdAPI, getOrdersAPI, removeOrderAPI, statsOrderAPI, updateOrderAPI } from "./orders.api";
import { CreateOrder } from "./interfaces/create-order.interface";
import { UpdateOrder } from "./types/update-order.type";
import { QueryStatsOrder } from "./interfaces/query-stats-order.interface";

//FETCH ORDERS 
export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async (queryOrder: QueryOrder, {rejectWithValue}) => {

        try {
            return await getOrdersAPI(queryOrder);
        } catch (error) {
            return rejectWithValue(error.response.message);
        }
    }
)

//FETCH ORDER BY ID
export const fetchOrderById = createAsyncThunk(
    'orders/fetchOrderById',
    async (id: string, {rejectWithValue}) => {
        try {
            return await getOrderByIdAPI(id);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

//CREATE ORDER
export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async(data: CreateOrder, {rejectWithValue}) => {
        try {
            return await createOrderAPI(data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

//UPDATE ORDER
export const updateOrder = createAsyncThunk(
    'orders/updateOther',
    async ({id, data}:{id: string, data: UpdateOrder}, {rejectWithValue}) => {
        try {
            return await updateOrderAPI(id, data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

//DELETE ORDER
export const deleteOrder = createAsyncThunk(
    'orders/deleteOrder',
    async (id: string, {rejectWithValue}) => {
        try {
            await removeOrderAPI(id);
            return id;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

//STATS ORDER
export const statsOrder = createAsyncThunk(
    'orders/statsOrder',
    async (query: QueryStatsOrder, {rejectWithValue}) => {
        try {
            return await statsOrderAPI(query)
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)