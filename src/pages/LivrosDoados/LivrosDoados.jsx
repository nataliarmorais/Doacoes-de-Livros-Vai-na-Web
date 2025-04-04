import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./livrosdoados.module.scss";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5001/livros")
      .then(response => {
        console.log("📚 Livros recebidos do backend:", response.data); // log correto aqui
        setLivros(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar os livros:", error);
      });
  }, []);

  return (
    <section className={styles.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <div className={styles.containerCards}>
        {livros.map((livro, index) => (
          <div key={index} className={styles.card}>
            <img src={livro.image_url} alt={livro.titulo} />
            <h3>{livro.titulo}</h3>
            <p>Autor: {livro.autor}</p>
            <p>Categoria: {livro.categoria}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
