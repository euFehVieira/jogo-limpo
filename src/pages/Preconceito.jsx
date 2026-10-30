import Styles from '../styles/Preconceito/Preconceito.module.css'
import { Components } from '../components/Preconceito'

function Preconceito(){
    return(
        <main>
            <section className={Styles.section1_preconceito}>
                <Components.Div1SecPreconceito/> 
                <Components.Div2SecPreconceito/>           
            </section>

            <section className={Styles.section2_preconceito}>
                <Components.Div1Sec2/>
                <Components.EarlLIoyd/>
                <Components.DouglasSouza/>
                <Components.TifannyAbreu/>
                <Components.MartaVieira/>
            </section>
        </main>
    )
}

export default Preconceito