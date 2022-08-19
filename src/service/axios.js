import axios from "axios";

let config = {
  // baseURL: "https...",
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

let configJsonPlaceholder = {
  baseURL: "https://jsonplaceholder.typicode.com"
};
const _axios = axios.create(config);
export default _axios;

export const apiJsonPlaceholder = axios.create(configJsonPlaceholder);