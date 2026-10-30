import Styles from '../styles/Esportes/Esportes.module.css'
import DivSec1Esporte from '../components/Esportes/div-sec1-esporte'
import Div2SecEsporte from '../components/Esportes/div2_sec1-esporte'
import Div3SecEsporte from '../components/Esportes/div3_sec1-esporte'
import Div4SecEsporte from '../components/Esportes/div4-sec1-esportes'

function Esportes(){
    return(
        <main>
            <section className={Styles.section1_esportes}>
                <DivSec1Esporte/>
            </section>

            <section className={Styles.section2_esportes}>
                <Div2SecEsporte/>
            </section>

            <section className={Styles.section3_esportes}>
                <Div3SecEsporte/>
            </section>

            <section className={Styles.section4_esportes}>
                <Div4SecEsporte/>
            </section>
        </main>
    )
}

export default Esportes