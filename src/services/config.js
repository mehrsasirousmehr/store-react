import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

api.interceptors.response.url(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default api;
