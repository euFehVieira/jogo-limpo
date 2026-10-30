import Styles from "../../styles/Preconceito/TifannyAbreu.module.css";

function TifannyAbreu() {
  return (
    <section className={Styles.container_Sobre}>
        <div className={Styles.TifannyAbreu}>
            <div className={Styles.fotoPersona}>
                <h3>03</h3>
                <div className={Styles.Tema}>
                    <h2>TRANSFOBIA</h2>
                </div>
            </div>

            <div className={Styles.container_textosSobre}>

                {/* Quem é a Persona */}
                <div className={Styles.QuemPersona}>
                    <h2>Tifanny Abreu</h2>
                    <p>
                    Tifanny Abreu é um divisor de águas na história do esporte mundial. Ela se tornou a primeira atleta trans a atuar na Superliga Feminina de Vôlei, consolidando-se como uma das atacantes mais prolíficas do país e uma figura central do Osasco Voleibol Clube.
                    </p>
                </div>

                {/* Dificuldades da Persona */}
                <div className={Styles.DificuldadesPersona}>
                    <h2>As Dificuldades Perante a Transfobia</h2>
                    <div className={Styles.Topicos}>
                    <h3>Invalidação e Discriminação Pública</h3>
                    <p>
                        Desde sua estreia na liga feminina, Tifanny enfrentou declarações preconceituosas de dirigentes, treinadores, ex-atletas e torcedores. Críticos frequentemente ignoravam o cumprimento das normas do COI para atribuir suas conquistas exclusivamente a "vantagens biológicas", tentando invalidar sua identidade de mulher.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Ataques nas Redes Sociais e Arquibancadas</h3>
                    <p>
                        Foi alvo frequente de xingamentos e vaias direcionadas em ginásios pelo país, além de campanhas de ódio virtual que questionavam sua presença na competição e sua legitimidade como atleta.
                    </p>
                    </div>

                    <div className={Styles.Topicos}>
                    <h3>Pressão Psicológica e Incerteza Regulatória</h3>
                    <p>
                        As constantes mudanças e debates sobre as diretrizes internacionais para atletas trans criam uma instabilidade permanente na carreira. Tifanny precisou demonstrar resiliência para focar no desempenho em quadra sob o peso de ser uma figura pública monitorada a cada ponto marcado.
                    </p>
                    </div>
                </div>

                {/* Legado da Persona */}
                <div className={Styles.LegadoPersona}>
                    <h2>Legado</h2>
                    <p>
                    Tifanny tornou-se símbolo de resistência e direito ao trabalho para a comunidade LGBTQIA+ no esporte. Sua postura firme dentro e fora de quadra abriu precedentes para que o debate sobre inclusão no esporte de alto rendimento passasse a ser pautado pela ciência e pelos direitos humanos, sem apagar o mérito do seu trabalho e dedicação como atleta profissional.
                    </p>
                </div>
            </div>
      </div>
    </section>
  );
}

export default TifannyAbreu;
