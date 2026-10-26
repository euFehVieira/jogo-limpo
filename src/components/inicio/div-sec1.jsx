import Styles from '../../styles/inicio/div-section1.module.css'
import SetaBtn from '../../assets/seta_btn.svg'

function DivSec1(){
    return(
        <div className={Styles.container}>
            <div className={Styles.textos}>
                <h3>RESPEITO TAMBÉM É JOGO COLETIVO</h3>
                <h2>O RESPEITO É PARTE DO <span>JOGO.</span></h2>
                <p>Futebol, vôlei ou basquete: nenhuma modalidade combina com preconceito. A mudança começa quando cada pessoa escolhe não ficar em silêncio.</p>
            </div>

            <a href="#">Conheça os quatro desafios <img src={SetaBtn} alt="seta_btn" /></a>
        </div>
    )
}

export default DivSec1