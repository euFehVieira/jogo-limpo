import Styles from '../../styles/Esportes/div-esportes.module.css'

function DivSec1Esporte(){
    return(
        <div className={Styles.div_esportes}>
            <h3>01 <span>VÔLEI</span></h3>
            <h2>TALENTO NÃO TEM UM ÚNICO <span>PERFIL.</span></h2>
            <p>Mulheres e atletas LGBTQIA+ podem enfrentar julgamentos sobre aparência, corpo, identidade e vida pessoal. O foco deve estar no desempenho, no trabalho em equipe e no direito de competir com dignidade.</p>

            <div className={Styles.frase}>
                <span></span>
                <p>“Respeitar uma pessoa também é respeitar o direito de ela ser quem é.”</p>
            </div>
        </div>
    )
}

export default DivSec1Esporte