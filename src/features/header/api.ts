import axios from "axios";
import { ApiResponse } from "./types";

const api = axios.create({
  baseURL: "https://www1.minuc.se/",
  headers: {
    Accept: "application/json",
  },
});

export const getMenu = async () => {
  const response = await api.get<ApiResponse>("/frontendapi/getmenu");
  return response.data;
};
