import axios from "axios";

const api = axios.create({
  baseURL: "https://primeira-api-livros.onrender.com", // Sua API
});

export const getLivros = async () => {
  try {
    const response = await api.get("/livros");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
};

export const addLivro = async (novoLivro) => {
  try {
    const response = await api.post("/livros", novoLivro);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    return null;
  }
};

export default api;
