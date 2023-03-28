import axios from "axios";
const httpClient = axios.create({
  baseURL: "http://localhost:5000/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
