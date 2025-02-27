import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/api/v1/",
    timeout: 10000,
});

axiosInstance.interceptors.request.use(function (config) {
    
    
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosInstance;
