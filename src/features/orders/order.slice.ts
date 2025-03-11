import { createSlice } from "@reduxjs/toolkit";
import { GeneralInitialState } from "../../common/interfaces/general-initial-state";
import { Order } from "./interfaces/order.interface";
import { LoadingConstant } from "../../constants/loading.constant";
import { fetchOrderById, fetchOrders, statsOrder } from "./orders.thunk";
import { StatsOrder } from "./interfaces/stats-order.interface";


const initialState: GeneralInitialState<Order, StatsOrder> = {
    pagination: null,
    items: [],
    item: null,
    loading: LoadingConstant.IDLE,
    error: null,
    stats: null
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        //FETCH ORDERS 
        .addCase(fetchOrders.pending, (state) => {
            state.loading = LoadingConstant.PENDING
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            state.items = action.payload.items;
            state.pagination = action.payload.pagination;
        })
        .addCase(fetchOrders.rejected, (state, action) => {
            state.loading = LoadingConstant.FAILED;
            state.error = action.payload;
        })
        //FETCH ORDER BY ID 
        .addCase(fetchOrderById.pending, (state) => {
            state.loading = LoadingConstant.PENDING
        })
        .addCase(fetchOrderById.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED
            state.item = action.payload;
        })
        .addCase(fetchOrderById.rejected, (state, action) => {
            state.loading = LoadingConstant.FAILED;
            state.error = action.payload;
        })
        //STATS ORDER 
        .addCase(statsOrder.fulfilled, (state, action) => {
            state.loading = LoadingConstant.SUCCEEDED;
            state.stats = action.payload;
        })

    },

})

export default orderSlice.reducer