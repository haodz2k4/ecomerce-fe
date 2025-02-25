import axiosInstance from "../api/axios";
import { QueryProduct } from "../features/products/interfaces/query-product.interface";
import { CreateProduct } from "../features/products/types/create-product.type";
import { UpdateProduct } from "../features/products/types/update-product.type";

//GET MANY
export const getProducts = async (query: QueryProduct) => {
    const res = await axiosInstance.get('products',{
        params: query
    });
    return res.data.data;
}
//GET ONE
export const getProductById = async (id: string) => {
    const res = await axiosInstance.get(`products/${id}`);
    return res.data.data;
}

//GET ONE BY SLUG
export const getProductBySlug = async (slug: string) => {
    const res = await axiosInstance.get(`products/slug/${slug}`);
    return res.data.data;
}

//CREATE
export const createProduct = async (data: CreateProduct) => {
    const res = await axiosInstance.post('products',data);
    return res.data.data;
}

//UPDATE
export const updateProduct = async (id: string, data: UpdateProduct) => {
    const res = await axiosInstance.patch(`products/${id}`,data);
    return res.data.data;
}

//REMOVE
export const removeProduct = async (id: string) => {
    const res = await axiosInstance.delete(`products/${id}`);
    return res.data.data;
}

