import axios from "axios";

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
  function (error) {
    if (error.response && error.response.status === 401) {
      console.log("Token hết hạn. Vui lòng đăng nhập lại.");
    }
    return Promise.reject(error);
  },
);
