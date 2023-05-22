import axios from "axios";
const server_URL = import.meta.env.VITE_SERVER_URL;

const httpClient = axios.create({
  baseURL: `${server_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
