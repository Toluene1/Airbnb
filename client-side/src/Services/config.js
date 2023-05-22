import axios from "axios";
const server_URL = import.meta.env.VITE_SERVER_URL;

const httpAuth = axios.create({
  baseURL: `${server_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

httpAuth.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default httpAuth;
