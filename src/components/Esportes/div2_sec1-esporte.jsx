import Styles from '../../styles/Esportes/div2-esportes.module.css'

function Div2SecEsporte(){
    return(
        <div className={Styles.div2_esportes}>
            <h3>02 <span>FUTEBOL</span></h3>
            <h2>O CAMPO NÃO TEM ESPAÇO PARA O <span>ÓDIO.</span></h2>
            <p>Ofensas racistas, ataques machistas e discriminação contra pessoas LGBTQIA+ ainda aparecem no futebol. Torcedores, atletas, clubes e federações têm responsabilidade na construção de um ambiente seguro.</p>

            <div className={Styles.frase}>
                <span></span>
                <p>“Paixão pelo time nunca deve ser desculpa para desrespeitar alguém.”</p>
            </div>
        </div>
    )
}

export default Div2SecEsporte