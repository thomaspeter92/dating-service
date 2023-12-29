import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Canceler,
} from "axios";
import { getUserToken } from "./firebaseService";

interface ApiResponse<T> {
  code: number;
  message: string;
  data?: T;
}

const axiosParams = {
  baseURL: "http://127.0.0.1:8080/api/v1/",
};

const axiosInstance: AxiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use(async (req) => {
  const token = await getUserToken();
  console.log(token);
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<ApiResponse<T>>(url, config);
    },
    post: <T>(url: string, body: any, config: AxiosRequestConfig = {}) => {
      return axios.post<ApiResponse<T>>(url, body, config);
    },
  };
};

export default api(axiosInstance);