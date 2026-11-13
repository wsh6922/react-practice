import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
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
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("토큰 만료! 로그아웃 처리 또는 토큰 재요청해야 해요!");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
