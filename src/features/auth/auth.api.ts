import axiosInstance from "../../api/axios";
import { Register } from "./types/register.type";



//REGISTER 
export const registerAPI = async (data: Register) => {
    const res = await axiosInstance.post('auth/register',data);
    return res.data.data;
}

//LOGIN 
export const loginAPI = async (email: string, password: string) => {
    const res = await axiosInstance.post('auth/login', {
        email,
        password
    })
    return res.data.data;
}

//Logout 
export const logoutAPI = async () => {
    await axiosInstance.post('auth/logout')
}

//VERIFY EMAIL 
export const verifyAPI = async (token: string) => {
    console.log(token)
    await axiosInstance.get('auth/verify',{
        params: {
            token
        }
    })
}