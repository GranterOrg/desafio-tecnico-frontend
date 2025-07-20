import axios from "axios";
import { config } from "@/config";

export const httpClient = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
