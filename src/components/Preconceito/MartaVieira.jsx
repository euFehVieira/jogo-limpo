import Styles from "../../styles/Preconceito/MartaVieira.module.css";

function MartaVieira() {
  return (
    <section className={Styles.container_Sobre}>
        <div className={Styles.MartaVieira}>
            <div className={Styles.fotoPersona}>
                <h3>04</h3>
                <div className={Styles.Tema}>
                    <h2>MISOGINIA</h2>
                </div>
            </div>

            <div className={Styles.container_textosSobre}>

                {/* Quem é a Persona */}
                <div className={Styles.QuemPersona}>
                    <h2>Marta Vieira da Silva</h2>
                    <p>
                    Marta Vieira da Silva, considerada a maior jogadora de futebol de todos os tempos, é a principal referência do futebol feminino mundial e a personificação da luta contra a misoginia e o preconceito de gênero no esporte
                    </p>
                </div>

                {/* Dificuldades da Persona */}
                <div className={Styles.DificuldadesPersona}>
                    <h2>As Dificuldades Perante a Misoginia</h2>
                    <div className={Styles.Topicos}>
                    <h3>Preconceito na Infância</h3>
                    <p>
                        Em sua cidade natal, Marta era a única menina entre os meninos. Ela costumava ouvir insultos, ver seus parentes serem pressionados para proibi-la de jogar e ter suas bolas tomadas por garotos que não aceitavam ser driblados por uma mulher.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Falta de Investimento e Desigualdade Salarial</h3>
                    <p>
                        Mesmo após se consolidar como a melhor do mundo, Marta enfrentou a enorme discrepância de estrutura e premiação entre o futebol masculino e feminino. Durante grande parte de sua carreira, lutou por salários dignos, patrocínios e condições básicas de treino para as atletas.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Chuteiras Sem Patrocínio</h3>
                    <p>
                        Na Copa do Mundo Feminina de 2019, Marta jogou com chuteiras pretas sem marca, exibindo o símbolo do movimento =Equal Play (Igualdade na Play/Jogo), para protestar contra as propostas de patrocínio que ofereciam valores desproporcionalmente inferiores aos pagos aos jogadores masculinos do mesmo nível.
                    </p>
                    </div>
                </div>

                {/* Legado da Persona */}
                <div className={Styles.LegadoPersona}>
                    <h2>Legado</h2>
                    <p>
                    Marta não apenas quebrou recordes dentro de campo, mas também abriu portas para que gerações de meninas pudessem sonhar em viver do futebol de forma profissional. Nomeada Embaixadora da Boa Vontade da ONU Mulheres, ela utiliza constantemente sua voz para cobrar igualdade de salários, apoio às categorias de base e respeito às mulheres em todas as áreas da sociedade.
                    </p>
                </div>
            </div>
      </div>
    </section>
  );
}

export default MartaVieira;
