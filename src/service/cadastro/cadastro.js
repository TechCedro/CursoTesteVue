import axios from "../axios";

export const salvar = (dados) => {
  return axios.post("https://jsonplaceholder.typicode.com/comments", dados);
};
