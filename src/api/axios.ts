import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(async function (config) {
    const { store } = await import("../stores/store");
    const authState = store.getState();
    const accessToken = authState.auth.accessToken;
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


export default axiosInstance;
