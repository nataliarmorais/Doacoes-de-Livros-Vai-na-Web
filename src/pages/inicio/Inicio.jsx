import s from './inicio.module.scss'    
import imagem1 from '../../assets/imagem1doacao.png'
import imagem2 from '../../assets/imagem2doacao.png' 
import imagem3 from '../../assets/imagem3doacao.png'
import imagem4 from '../../assets/imagem4doacao.png'


export default function Inicio() {
    return (
        <main>
          <section className = {s.primeiraSessaoInicio}>

            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h2>  
        </section>
        <section className = {s.porqueDoarSection}>
            <h2>Porque devo doar?</h2>
            <div className={s.cardsMotivos}>
            <section>
                <img src={imagem1} alt="Imagem ilustrando circulo social de quatro pessoas" />     
                <p>Oferece livros a quem não tem aceso. ajudando a reduzir a exclusão social</p> 
                </section>
                <section>
                    <img src={imagem2} alt="Imagem ilustrando pessoa lendo" />
                    <p>Estimula o hábito de leitura e o prendizado continuo, </p>
               </section>
                <section>  
                    <img src={imagem3} alt="Imagem ilustrando seis pessoas transformando vidas" /> 
                    <p>Fornece conhecimento e inspiração , permitindo que individuos transformem suas vidas</p>
            </section> 
            <section>
                <img src={imagem4} alt="Imagem ilustrando um livro com um coracao" />
                <p>Garante que todos, independente da condicao social, tenham oportunidades de aprendizado.</p>
</section> 
</div>
</section>
        </main>
    )
}