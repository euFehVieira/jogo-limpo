import Styles from "../../styles/Preconceito/EarlLIoyd.module.css";

function EarlLIoyd() {
  return (
    <section className={Styles.container_Sobre}>
        <div className={Styles.EarlLIoyd}>
            <div className={Styles.fotoPersona}>
                <h3>01</h3>
                <div className={Styles.Tema}>
                    <h2>RACISMO</h2>
                </div>
            </div>

            <div className={Styles.container_textosSobre}>
                {/* Quem é a Persona */}
                <div className={Styles.QuemPersona}>
                    <h2>Earl LIoyd</h2>
                    <p>
                    A história do primeiro jogador negro na NBA é marcada por uma
                    coincidência histórica no ano de 1950, o título de primeiro
                    jogador negro a pisar em quadra numa partida oficial da NBA
                    pertence a Earl Lloyd.
                    </p>
                </div>

                {/* Dificuldades da Persona */}
                <div className={Styles.DificuldadesPersona}>
                    <h2>As Dificuldades Perante o Racismo</h2>
                    <div className={Styles.Topicos}>
                    <h3>Segregação na Hospedagem e Alimentação</h3>
                    <p>
                        Durante as viagens para jogos fora de casa, Lloyd e seus
                        companheiros negros frequentemente não podiam se hospedar nos
                        mesmos hotéis nem comer nos mesmos restaurantes que o restante
                        da equipe. Em muitas cidades, precisavam procurar alojamentos
                        segregados.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Hostilidade do Público</h3>
                    <p>
                        Nos ginásios, era comum ouvir ofensas racistas vindas das
                        arquibancadas. Lloyd relatava que torcedores cuspiam nele e
                        gritavam insultos como "Volte para a África".
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Isolamento social e emocional</h3>
                    <p>
                        A pressão psicológica era imensa. Qualquer reação contra o
                        preconceito verbal poderia ser usada pelos críticos para
                        rotulá-los como "inadequados" para a liga, exigindo um
                        autocontrole extremo para focar apenas no jogo.
                    </p>
                    </div>
                </div>

                {/* Legado da Persona */}
                <div className={Styles.LegadoPersona}>
                    <h2>Legado</h2>
                    <p>
                    Apesar do ambiente adverso, Earl Lloyd construiu uma carreira
                    sólida: jogou por mais de nove temporadas, foi campeão da NBA pelo
                    Syracuse Nationals em 1955 e, mais tarde, tornou-se o primeiro
                    negro a ser técnico assistente e técnico principal em tempo
                    integral na liga (pelo Detroit Pistons). Em 2003, ele foi
                    eternizado no Naismith Memorial Basketball Hall of Fame.
                    </p>
                </div>
            </div>
      </div>
    </section>
  );
}

export default EarlLIoyd;
