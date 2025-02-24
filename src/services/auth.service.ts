import { Register } from "../features/auth/types/register.type";
import axiosInstance from "../api/axios";


//REGISTER 
export const register = async (data: Register) => {
    const res = await axiosInstance.post('auth/register',data);
    return res.data.data;
}

//LOGIN 
export const login = async (email: string, password: string) => {
    const res = await axiosInstance.post('auth/login', {
        email,
        password
    })
    return res.data.data;
}

//Logout 
export const logout = async () => {
    await axiosInstance.post('auth/logout')
}