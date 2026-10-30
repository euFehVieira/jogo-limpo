import Styles from "../../styles/Preconceito/DouglasSouza.module.css";

function DouglasSouza() {
  return (
    <section className={Styles.container_Sobre}>
        <div className={Styles.DouglasSouza}>
            <div className={Styles.fotoPersona}>
                <h3>02</h3>
                <div className={Styles.Tema}>
                    <h2>HOMOFOBIA</h2>
                </div>
            </div>

            <div className={Styles.container_textosSobre}>

                {/* Quem é a Persona */}
                <div className={Styles.QuemPersona}>
                    <h2>Douglas Souza</h2>
                    <p>
                    Douglas Souza é uma das figuras mais marcantes do vôlei brasileiro recente, destacando-se tanto pelo alto nível técnico em quadra quanto pelo pioneirismo e pela coragem em ser um atleta abertamente homossexual no esporte de alto rendimento.
                    </p>
                </div>

                {/* Dificuldades da Persona */}
                <div className={Styles.DificuldadesPersona}>
                    <h2>As Dificuldades Perante a Homofobia</h2>
                    <div className={Styles.Topicos}>
                    <h3>Invisibilidade e Barreiras na Base</h3>
                    <p>
                        No início da carreira, Douglas ouviu conselhos para "esconder" quem era para não prejudicar patrocínios ou chances na Seleção, um reflexo do ambiente veladamente homofóbico do esporte de alto rendimento.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Episódio na Itália (2021)</h3>
                    <p>
                        Ao se transferir para o Vibo Valentia, o jogador relatou ter sido vítima de homofobia no aeroporto de Amsterdã durante a viagem, enfrentando abordagem truculenta e tratamento discriminatório apenas por viajar acompanhado do noivo.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Ataques no Meio Esportivo</h3>
                    <p>
                        Em 2021, foi alvo indireto de declarações homofóbicas proferidas por outros atletas da modalidade em redes sociais, o que gerou forte debate nacional e culminou em punições e demissões no vôlei brasileiro.
                    </p>
                    </div>
                </div>

                {/* Legado da Persona */}
                <div className={Styles.LegadoPersona}>
                    <h2>Legado</h2>
                    <p>
                    Ao se recusar a esconder sua identidade, Douglas quebrou tabus em um ambiente historicamente conservador e machista. Ele usou sua visibilidade para reforçar constantemente que "homofobia é crime, não opinião", tornando-se referência para jovens atletas que buscam praticar esportes sem ter que abdicar de quem são.
                    </p>
                </div>
            </div>
      </div>
    </section>
  );
}

export default DouglasSouza;
