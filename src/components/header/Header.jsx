import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio';
import LivrosDoados from '../../pages/livrosdoados/LivrosDoados';
import QueroDoar from '../../pages/querodoar/QueroDoar';
import search from '../../assets/search.png';
import logoLivro from '../../assets/logoLivro.png';
import s from './header.module.scss';

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoHeader}>
          <img src={logoLivro} alt="Imagem com uma ilustração de um livro aberto com capa azul" />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav className={s.navHeader}>
          <ul>
            <li><Link className={s.link} to="/inicio">Início</Link></li>
            <li><Link className={s.link} to="/livrosdoados">Livros Doados</Link></li>
            <li><Link className={s.link} to="/querodoar">Quero Doar</Link></li>
          </ul>
        </nav>

        <section className={s.barraDeBusca}>
          <input type="search" placeholder="O que você procura?" />
          <button>
            <img src={search} alt="Imagem com uma ilustração de uma lupa" />
          </button>
        </section>
      </header>

      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/livrosdoados" element={<LivrosDoados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
