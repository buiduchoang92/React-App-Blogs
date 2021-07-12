import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: params => queryString.stringify(params),
  validateStatus: status => {
    return status >= 200 && status < 300; // default
  }
});

axiosClient.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return new Promise.reject(error);
  }
);
axios.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return new PromiseRejectionEvent.reject(error);
  }
);
export default axiosClient;
