import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.STRAPI_BASE_URL,
});

export { axiosInstance as default };
