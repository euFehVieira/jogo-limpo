import Styles from '../styles/Footer.module.css'
import Instagram from '../assets/logo-instagram.svg'
import Github from '../assets/logo-github.svg'
import Linkedin from '../assets/logo_linkedin.svg'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div className={Styles.div_top}>
                <div className={Styles.div_left}>
                    <div className={Styles.logo}>
                        <h2>JOGO<span>LIMPO.</span></h2>
                        <p>Duas quadras. Um só respeito.</p>
                    </div>
                    <div className={Styles.links}>
                        <a href="#">Início</a>
                        <a href="#">Esportes</a>
                        <a href="#">Preconceitos</a>
                        <a href="#">Faça parte</a>
                    </div>
                </div>
                <div className={Styles.div_right}>
                    <h2>REDES <span>SOCIAIS</span></h2>
                    <div className={Styles.container_redesSociais}>
                        <a href="#"><img src={Instagram} alt="Instagram" /></a>
                        <a href="#"><img src={Github} alt="Github" /></a>
                        <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                    </div>
                </div>
            </div>

            <div className={Styles.div_bottom}>
                <h3>©TODOS OS DIREITOS RESERVADOS</h3>
                <h3>O RESPEITO FAZ PARTE DO JOGO.</h3>
            </div>
        </footer>
    )
}

export default Footer