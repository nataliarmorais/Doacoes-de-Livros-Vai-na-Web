import s from  './querodoar.module.scss'
import iconelivro from '../../assets/iconelivro.png'    
export default function QueroDoar(){
    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do livro. </p>
            <form action ="">
                <div>
                    <img src={iconelivro} alt="Imagem com icone de livro aberto  com borda azul"/>   
                <h2>Informações do livro</h2>
                </div>
                <input type="text" name="" id="titulo" placeholder="Título"/>
                <input type="text" name="" id="categoria" placeholder="Categoria" />
                <input type="text" name="" id="autor" placeholder="Autor" />
                <input type="text" name="" id="linkImagem" placeholder="Link da Imagem" />
                <input type="submit" value="Doar" />
            </form>
        </section>
           
    )
}