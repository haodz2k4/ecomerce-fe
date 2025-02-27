import { RcFile } from "antd/es/upload";
import axiosInstance from "../../api/axios"



export const uploadSingleAPI = async (file: File | RcFile) => {
    const res = await axiosInstance.post('upload/single',file);
    return res.data.data;
}

export const uploadMultiAPI = async (files: File[] | RcFile[]) => {
    const res = await axiosInstance.post('upload/multi',files);
    return res.data.data;
}