import { useState } from "react";
import axios from "axios";
import s from "./querodoar.module.scss";
import iconelivro from "../../assets/iconelivro.png";

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("");
    const [categoria,setCategoria] = useState("");
    const [autor,setAutor] = useState("");
    const [image_url,setImage_url] = useState("");

    const capturaTitulo =(e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImage_url = (e) =>{
        setImage_url(e.target.value)
    }

    const envioDados = async () => {
        const dadosPEnviar={
            titulo,
            categoria,
            autor,
            image_url,
        }
        
        await axios.post("http://localhost:3000/livros",dadosPEnviar)
    };

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do livro. </p>
            <form onSubmit={(e) => { e.preventDefault(); envioDados(); }}>
                <div>
                    <img src={iconelivro} alt="Imagem com ícone de livro aberto com borda azul" />   
                    <h2>Informações do livro</h2>
                </div>
                <input type="text" name= "" id="titulo" placeholder="Título" onChange={capturaTitulo} />
                <input type="text" name= "" id="categoria" placeholder="Categoria"onChange={capturaCategoria}/>
                <input type="text" name= "" id="autor" placeholder="Autor" onChange={capturAutor}/>
                <input type="text" name= "" id="linkImagem" placeholder="Link da Imagem"onChange={capturaImage_url}/>
                <button type="submit">Doar</button>
            </form>
        </section>
    )
}
