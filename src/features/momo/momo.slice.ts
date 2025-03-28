import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateOrder } from "../orders/interfaces/create-order.interface";
import axiosInstance from "../../api/axios";


export const payment = async (createOrder: any) => {
    const res = await axiosInstance.post('/momo/payment', createOrder);
    return res.data.data 
}

const momoSlice = createSlice({
    name: 'momo',
    initialState: {
        orderId: "",
        payUrl: "",
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})


export default momoSlice;