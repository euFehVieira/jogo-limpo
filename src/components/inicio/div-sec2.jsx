import Styles from '../../styles/inicio/div-sec2.module.css'

function DivSec2(){
    return(
        <div className={Styles.container}>
            <div className={Styles.titulozinho}>
                <h3>NOSSA IDEIA</h3>
            </div>

            <div className={Styles.containerzinho}>
                <h2>O ESPORTE UNE. <span>O PRECONCEITO DIVIDE.</span></h2>

                <div className={Styles.container_paragrafos}>
                    <p className={Styles.p1}>O esporte pode aproximar pessoas diferentes, criar oportunidades e ensinar a trabalhar em equipe. Mas, quando o preconceito aparece nas arquibancadas, nas quadras, nos campos ou nas redes sociais, esse papel é colocado em risco.</p>

                    <p className={Styles.p2}>Esta campanha convida você a olhar para três modalidades populares e pensar: que tipo de ambiente estamos ajudando a construir?</p>
                </div>
            </div>

            <div className={Styles.topicos}>
                <div className={Styles.container_textos}>
                    <h3>01</h3>
                    <div className={Styles.textos}>
                        <h2>Respeitar</h2>
                        <p>Reconhecer a dignidade de cada pessoa.</p>
                    </div>
                </div>
                <div className={Styles.container_textos}>
                    <h3>02</h3>
                    <div className={Styles.textos}>
                        <h2>Escutar</h2>
                        <p>Levar a sério quem relata discriminação.</p>
                    </div>
                </div>
                <div className={Styles.container_textos3}>
                    <h3>03</h3>
                    <div className={Styles.textos}>
                        <h2>Agir</h2>
                        <p>Não normalizar ofensas nem exclusão.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DivSec2