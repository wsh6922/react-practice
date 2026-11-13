import axios from "axios";

export const VITE_API_BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      alert("401 Unauthorized - 로그인 필요");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
