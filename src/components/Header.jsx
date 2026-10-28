import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <h1>
          JOGO<span>LIMPO</span>
        </h1>
      </a>

      <nav className={styles.navbar}>
        <a href="/">Início</a>
        <a href="/esportes">Esportes</a>
        <a href="/preconceito">Preconceito</a>
      </nav>

      <a href="/facaparte" className={styles.botao}>
        Faça parte
      </a>
    </header>
  );
}

export default Header