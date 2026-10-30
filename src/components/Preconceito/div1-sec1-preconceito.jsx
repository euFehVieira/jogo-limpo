import Styles from '../../styles/Preconceito/Div1SecPreconceito.module.css'

function Div1SecPreconceito(){
    return(
        <div className={Styles.titulos}>
            <div className={Styles.div_left}>
                <h3>NÃO É “SÓ UM BRINCADEIRINHA”</h3>
                <h2>O PRECONCEITO <span>MUDA DE FORMA.</span></h2>
            </div>

            <div className={Styles.div_right}>
                <p>Identificar cada tipo de discriminação ajuda a entender seus efeitos e a agir quando ela acontece.</p>
            </div>
        </div>
    )
}

export default Div1SecPreconceito