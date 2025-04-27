import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://dev.codeleap.co.uk",
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
