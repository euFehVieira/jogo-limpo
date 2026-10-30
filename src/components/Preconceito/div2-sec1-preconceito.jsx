import Styles from '../../styles/Preconceito/Div2SecPreconceito.module.css'

function Div2SecPreconceito(){
    return(
        <div className={Styles.divGeral}>
            <div className={Styles.container_cards}>
                <div className={Styles.card}>
                    <div className={Styles.caixinha_letra}>
                        <h3>R</h3>
                    </div>
                    <h2>RACISMO</h2>
                    <p>Discriminação ou hostilidade baseada na raça ou cor da pele. No esporte, pode aparecer em insultos, estereótipos e tratamento desigual.</p>
                    <h4>01/ NÃO SE CALE</h4>
                </div>

                <div className={Styles.card}>
                    <div className={Styles.caixinha_letra}>
                        <h3>M</h3>
                    </div>
                    <h2>MACHISMO</h2>
                    <p>Desprezo, hostilidade ou discriminação contra mulheres. Pode surgir em ataques à capacidade, à aparência ou ao direito das mulheres de ocupar espaços esportivos.</p>
                    <h4>02/ VALORIZE</h4>
                </div>

                <div className={Styles.card}>
                    <div className={Styles.caixinha_letra}>
                        <h3>H</h3>
                    </div>
                    <h2>HOMOFOBIA</h2>
                    <p>Preconceito ou discriminação contra pessoas homossexuais. Piadas, ameaças e insultos por orientação sexual também criam ambientes inseguros.</p>
                    <h4>03/ ACOLHA</h4>
                </div>

                <div className={Styles.card}>
                    <div className={Styles.caixinha_letra}>
                        <h3>T</h3>
                    </div>
                    <h2>TRANSFOBIA</h2>
                    <p>Preconceito ou discriminação contra pessoas trans. Desrespeitar sua identidade ou excluí-las por serem quem são também é violência.</p>
                    <h4>04/ RESPEITE</h4>
                </div>
            </div>

            <p>Esses problemas não acontecem apenas no esporte profissional. Eles também podem aparecer na escola, no bairro, em clubes e nas redes sociais.</p>
        </div>
    )
}

export default Div2SecPreconceito