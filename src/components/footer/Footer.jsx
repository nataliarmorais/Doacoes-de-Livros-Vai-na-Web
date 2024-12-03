import logoFacebook from '../../assets/logoFacebook.png';
import logoTwitter from '../../assets/logoTwitter.png';
import logoYoutube from '../../assets/logoYoutube.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import logoInstagram from '../../assets/logoInstagram.png';  
import s from './footer.module.scss'; 
export default function Footer() {
    return (
        <footer>
                <section className={s.contatoslogoFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="imagem com uma ilustração de um facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="imagem com uma ilustração de um twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="imagem com uma ilustração de um youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="imagem com uma ilustração de um linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="imagem com uma ilustração de um instagram" /></a>

                                 </nav>
            </section>
            <section className={s.copyrightFooter}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    );
}