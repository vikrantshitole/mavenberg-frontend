import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
instance.interceptors.request.use(
  (config) => {
    // Add any request interceptors here
    return config;
  }
);
instance.interceptors.response.use(
  (response) => {
    // Add any response interceptors here
    return response;
  }
  ,
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("API No Response:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("API Error Message:", error.message);
    }
    return Promise.reject(error);
  }
);
export const api = {
  get: (url: string, params?: any) => {
    return instance.get(url, { params });
  }
  ,
  post: (url: string, data?: any) => {
    return instance.post(url, data);
  }
}