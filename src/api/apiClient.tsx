import axios from "axios";
import { API_PATHS } from "./apiPath";

export const API_CLIENT = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm request interceptor để cập nhật token trước mỗi request
API_CLIENT.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Thêm response interceptor để xử lý lỗi
API_CLIENT.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const refreshToken = {
      refreshToken: localStorage.getItem("refreshToken"),
    };

    // Nếu nhận được lỗi 401 (token hết hạn)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gọi API để lấy access token mới bằng refresh token
        const response = await axios.post(API_PATHS.AUTH.REFRESH_TOKEN, refreshToken);

        // Cập nhật access token mới
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("token", newAccessToken);

        // sau khi lấy được token mới lập tức cập nhật lại Bearer token ở header
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return API_CLIENT(originalRequest);
      } catch (err) {
        // Nếu refresh token cũng hết hạn, điều hướng người dùng về trang đăng nhập
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
