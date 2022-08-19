import { apiJsonPlaceholder } from "../axios";

export const editar = (id, dados) => {
  return apiJsonPlaceholder.put(`todos/${id}`, dados);
};
export const carregar = (id) => {
  return apiJsonPlaceholder.get(`todos/${id}`);
};
