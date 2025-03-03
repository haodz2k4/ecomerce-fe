import axiosInstance from "../../api/axios"
import { CreateCart } from "./interfaces/create-cart.type";
import { UpdateCart } from "./types/update-cart.type";



export const getCartAPI = async () => {
    const res = await axiosInstance.get('carts');
    return res.data.data;
}

export const createCartAPI = async (createCart: CreateCart) => {
    const res = await axiosInstance.post('carts',createCart);
    return res.data.data;
}

export const updateCartAPI = async (updateCart: UpdateCart) => {
    const res = await axiosInstance.patch('carts',updateCart);
    return res.data.data;
}

export const removeCartAPI = async (productId: string) => {
    await axiosInstance.delete(`carts/${productId}`);
}