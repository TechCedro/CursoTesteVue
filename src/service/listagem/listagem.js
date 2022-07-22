import axios from "../axios";

export const listarUsuarios = () => {
  return axios.get("https://randomuser.me/api/?page=1&results=30");
};
