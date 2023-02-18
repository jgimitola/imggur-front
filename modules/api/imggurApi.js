import axios from "axios";

const immggurApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default immggurApi;
