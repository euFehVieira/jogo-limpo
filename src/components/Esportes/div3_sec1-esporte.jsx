import Styles from '../../styles/Esportes/div3-esportes.module.css'

function Div3SecEsporte(){
    return(
        <div className={Styles.div3_esportes}>
            <h3>03 <span>BASQUETE</span></h3>
            <h2>O <span>RESPEITO</span> É A MELHOR JOGADA DO TIME.</h2>
            <p>O basquete também precisa enfrentar o racismo, a misoginia e a LGBTfobia. Comentários discriminatórios não são brincadeira: eles podem afastar pessoas do esporte e reforçar desigualdades.</p>

            <div className={Styles.frase}>
                <span></span>
                <p>“Uma equipe forte não deixa ninguém para trás.”</p>
            </div>
        </div>
    )
}

export default Div3SecEsporte