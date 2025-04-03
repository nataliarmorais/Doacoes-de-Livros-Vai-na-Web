import { useState } from "react";
import axios from "axios";
import s from "./querodoar.module.scss";
import iconelivro from "../../assets/iconelivro.png";

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [image_url, setImage_url] = useState("");

    const capturaTitulo = (e) => setTitulo(e.target.value);
    const capturaCategoria = (e) => setCategoria(e.target.value);
    const capturAutor = (e) => setAutor(e.target.value);
    const capturaImage_url = (e) => setImage_url(e.target.value);

    const envioDados = async () => {
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url,
        };

        try {
            const resposta = await axios.post("http://127.0.0.1:5000/doar", dadosPEnviar);

            if (resposta.status === 201) {
                alert("Livro cadastrado com sucesso!");
                setTitulo("");
                setCategoria("");
                setAutor("");
                setImage_url("");
            } else {
                alert("Erro ao cadastrar o livro.");
            }
        } catch (erro) {
            console.error("Erro ao cadastrar o livro:", erro);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do livro.</p>
            <form onSubmit={(e) => { e.preventDefault(); envioDados(); }}>
                <div>
                    <img src={iconelivro} alt="Ícone de livro aberto com borda azul" />
                    <h2>Informações do livro</h2>
                </div>
                <input type="text" id="titulo" placeholder="Título" value={titulo} onChange={capturaTitulo} required />
                <input type="text" id="categoria" placeholder="Categoria" value={categoria} onChange={capturaCategoria} required />
                <input type="text" id="autor" placeholder="Autor" value={autor} onChange={capturAutor} required />
                <input type="text" id="linkImagem" placeholder="Link da Imagem" value={image_url} onChange={capturaImage_url} required />
                <button type="submit">Doar</button>
            </form>
        </section>
    );
}
