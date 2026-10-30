import Styles from '../styles/Esportes/Esportes.module.css'
import { Components } from '../components/Esportes'

function Esportes(){
    return(
        <main>
            <section className={Styles.section1_esportes}>
                <Components.DivSec1Esporte/>
            </section>

            <section className={Styles.section2_esportes}>
                <Components.Div2SecEsporte/>
            </section>

            <section className={Styles.section3_esportes}>
                <Components.Div3SecEsporte/>
            </section>

            <section className={Styles.section4_esportes}>
                <Components.Div4SecEsporte/>
            </section>
        </main>
    )
}

export default Esportes