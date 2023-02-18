import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';


const axiosInstance = axios.create({
  baseURL: 'https://api.coparentingplus.com/user'
});

// request interceptor
axiosInstance.interceptors.request.use(async function (config: any) {
  if (!config.headers) return;

  const token = getCookie("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// request interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error?.response?.status === 401) {
      deleteCookie('token');
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/";
    }

    if (!error?.response?.status) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance 